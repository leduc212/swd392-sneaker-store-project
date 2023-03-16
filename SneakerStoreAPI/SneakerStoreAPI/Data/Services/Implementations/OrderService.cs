using Firebase.Auth;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SneakerStoreAPI.Data
{
    public class OrderService : IOrderService
    {
        private readonly IOrderRepository _repository;
        public OrderService(IOrderRepository repository)
        {
            _repository = repository;
        }

        public async Task<OrderListAdminViewModel> GetAllOrders(int page, byte status, string search, int role, int userId)
        {
            // Get order list
            int size = 10;
            page = page == 0 ? 1 : page;

            var orderList = role == 1 ? await _repository.GetAllOrdersByStatusAndIdPagination(page, size, status, search) : await _repository.GetOrdersByUserIdAndStatusPagination(userId, page, size, status);
            int orderCount = role == 1 ? await _repository.CountAllOrderByStatusAndId(status, search) : await _repository.CountAllOrderByUserIdAndStatus(userId, status);

            int totalPages = (int)Math.Ceiling((double)orderCount / size);
            List<int> pageNumbers = new List<int>();
            if (totalPages > 0)
            {
                int start = Math.Max(1, page - 2);
                int end = Math.Min(page + 2, totalPages);

                if (totalPages > 5)
                {
                    if (end == totalPages) start = end - 4;
                    else if (start == 1) end = start + 4;
                }
                else
                {
                    start = 1;
                    end = totalPages;
                }
                pageNumbers = Enumerable.Range(start, end - start + 1).ToList();
            }

            OrderListAdminViewModel model = new()
            {
                OrdersPaginated = orderList,
                Size = size,
                Page = page,
                TotalCount = orderCount,
                TotalPage = totalPages,
                PageNumbers = pageNumbers,
                Status = status,
                Search = search
            };

            return model;
        }


        public async Task<Order> ChangeOrderStatus(long id, byte status)
        {
            return await _repository.ChangeOrderStatus(id, status);
        }

        public async Task<Order> CreateOrder(long userId, string phone, string address, string payment, decimal totalPrice, IQueryable<CartItem> cartItems)
        {
            return await _repository.CreateOrder(userId, phone, address, payment, totalPrice, cartItems);
        }

        public async Task<Order> GetById(long orderId)
        {
            return await _repository.GetById(orderId);
        }

        public async Task<IEnumerable<Order>> GetRecentOrder()
        {
            return await _repository.GetRecentOrder();
        }

        public async Task<int> CountAllOrderByStatus(byte status)
        {
            return await _repository.CountAllOrderByStatus(status);
        }
    }
}
