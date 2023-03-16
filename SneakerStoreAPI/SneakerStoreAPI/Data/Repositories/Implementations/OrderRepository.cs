using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SneakerStoreAPI.Data
{
    public class OrderRepository : IOrderRepository
    {
        private readonly SneakerStoreContext _context;
        private readonly DbSet<Order> _dbSetOrder;
        private readonly DbSet<OrderItem> _dbSetOrderItem;

        public OrderRepository()
        {
            _context = new SneakerStoreContext();
            _dbSetOrder = _context.Set<Order>();
            _dbSetOrderItem = _context.Set<OrderItem>();
        }

        public async Task<Order> CreateOrder(long userId, string phone, string address, string payment, decimal totalPrice, IEnumerable<CartItem> cartItems)
        {
            // Add order
            Order order = new Order()
            {
                UserId = userId,
                CreatedAt = DateTime.Now,
                UpdatedAt = DateTime.Now,
                Phone = phone,
                Address = address,
                Payment = payment,
                Status = 1,
                TotalItem = 0,
                TotalPrice = 0,
            };
            _dbSetOrder.Add(order);
            await _context.SaveChangesAsync();

            // Add order items
            List<OrderItem> orderItems = new List<OrderItem>();
            foreach (CartItem cartItem in cartItems)
            {
                orderItems.Add(new OrderItem()
                {
                    OrderId = order.Id,
                    SizeId = cartItem.SizeId,
                    ProductId = cartItem.ProductId,
                    Quantity = cartItem.Quantity,
                });
            }

            _dbSetOrderItem.AddRange(orderItems);
            await _context.SaveChangesAsync();

            // Update order price and item
            order.TotalItem = orderItems.Count;
            order.TotalPrice = totalPrice;
            _context.Attach(order);
            _context.Entry(order).Property(oi => oi.TotalItem).IsModified = true;
            _context.Entry(order).Property(oi => oi.TotalPrice).IsModified = true;
            await _context.SaveChangesAsync();

            return order;
        }

        public async Task<Order> GetById(long orderId)
        {
            return await _dbSetOrder
                .Where(o => o.Id == orderId)
                .Include(o => o.User)
                .Include(o => o.OrderItems).ThenInclude(oi => oi.Size)
                .Include(o => o.OrderItems).ThenInclude(oi => oi.Product).ThenInclude(p => p.Brand)
                .Include(o => o.OrderItems).ThenInclude(oi => oi.Product).ThenInclude(p => p.Category)
                .FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<Order>> GetRecentOrder()
        {
            return await _dbSetOrder
                .OrderByDescending(o => o.CreatedAt)
                .Take(4)
                .ToListAsync();
        }

        public async Task<IEnumerable<Order>> GetOrdersByUserId(long userId)
        {
            return await _dbSetOrder
                .Where(o => o.UserId == userId)
                .OrderByDescending(o => o.CreatedAt)
                .ToListAsync();
        }

        public async Task<IEnumerable<Order>> GetOrdersByUserIdAndStatusPagination(long userId, int page, int size, byte status)
        {
            if (status == 0)
            {
                return  await _dbSetOrder
                                .Where(o => o.UserId == userId)
                                .OrderByDescending(o => o.CreatedAt)
                                .Skip((page - 1) * size)
                                .Take(size)
                                .ToListAsync();
            }
            return await _dbSetOrder
                .Where(o => o.UserId == userId && o.Status == status)
                .OrderByDescending(o => o.CreatedAt)
                .Skip((page - 1) * size)
                .Take(size)
                .ToListAsync();
        }

        public async Task<int> CountAllOrderByUserIdAndStatus(long userId, byte status)
        {
            if (status == 0)
            {
                return await _dbSetOrder
                                .Where(o => o.UserId == userId)
                                .CountAsync();
            }
            return await _dbSetOrder
              .Where(o => o.UserId == userId && o.Status == status)
              .CountAsync();
        }

        public async Task<IEnumerable<Order>> GetAllOrdersByStatusPagination(int page, int size, byte status)
        {
            if (status == 0)
            {
                return await _dbSetOrder
                                .OrderByDescending(o => o.CreatedAt)
                                .Skip((page - 1) * size)
                                .Take(size)
                                .Include(o => o.User)
                                .ToListAsync();
            }
            return await _dbSetOrder
                .Where(o => o.Status == status)
                .OrderByDescending(o => o.CreatedAt)
                .Skip((page - 1) * size)
                .Take(size)
                .Include(o => o.User)
                .ToListAsync();
        }

        public async Task<int> CountAllOrderByStatus(byte status)
        {
            if (status == 0)
            {
                return await _dbSetOrder
                                .CountAsync();
            }
            return await _dbSetOrder
              .Where(o => o.Status == status)
              .CountAsync();
        }

        public async Task<IEnumerable<Order>> GetAllOrdersByStatusAndIdPagination(int page, int size, byte status, string search)
        {
            if (status == 0)
            {
                return await _dbSetOrder
                    .Where(o => (string.IsNullOrEmpty(search) || o.Id.ToString().Contains(search)))
                                .OrderByDescending(o => o.CreatedAt)
                                .Skip((page - 1) * size)
                                .Take(size)
                                .Include(o => o.User)
                                .ToListAsync();
            }
            return await _dbSetOrder
                .Where(o => o.Status == status
                && (string.IsNullOrEmpty(search) || o.Id.ToString().Contains(search)))
                .OrderByDescending(o => o.CreatedAt)
                .Skip((page - 1) * size)
                .Take(size)
                .Include(o => o.User)
                .ToListAsync();
        }

        public async Task<int> CountAllOrderByStatusAndId(byte status, string search)
        {
            if (status == 0)
            {
                return await _dbSetOrder
                    .Where(o => (string.IsNullOrEmpty(search) || o.Id.ToString().Contains(search)))
                                .CountAsync();
            }
            return await _dbSetOrder
              .Where(o => o.Status == status
              && (string.IsNullOrEmpty(search) || o.Id.ToString().Contains(search)))
              .CountAsync();
        }

        public async Task<Order> ChangeOrderStatus(long id, byte status)
        {
            Order order = await GetById(id);
            if (order != null)
            {
                order.Status = status;
                order.UpdatedAt = DateTime.Now;
            }
            _dbSetOrder.Update(order);
            await _context.SaveChangesAsync();
            return order;
        }
    }
}
