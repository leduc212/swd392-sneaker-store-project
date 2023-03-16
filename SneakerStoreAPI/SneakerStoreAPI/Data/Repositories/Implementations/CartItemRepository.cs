using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace SneakerStoreAPI.Data
{
    public class CartItemRepository : ICartItemRepository
    {
        private readonly SneakerStoreContext _context;
        private readonly DbSet<CartItem> _dbSet;
        public CartItemRepository()
        {
            _context = new SneakerStoreContext();
            _dbSet = _context.Set<CartItem>();
        }

        public async Task<CartItem> GetById(long cartId, long productId, long sizeId)
        {
            CartItem cartItem = await _dbSet
                .Where(ci => ci.CartId == cartId && ci.ProductId == productId && ci.SizeId == sizeId && ci.Product.Active == 1)
                .FirstOrDefaultAsync();
            return cartItem;
        }

        public async Task<IEnumerable<CartItem>> GetByCartId(long cartId)
        {
            var cartItems = await _dbSet
                .AsNoTracking()
                .Where(ci => ci.CartId == cartId && ci.Product.Active == 1)
                .Include(ci => ci.Size)
                .Include(ci => ci.Product)
                .ThenInclude(p => p.Brand)
                .ToListAsync();
            return cartItems;
        }

        public async Task<CartItem> AddToCart(long cartId, long productId, long sizeId, int quantity)
        {
            // Check if cart item already exist?
            CartItem cartItem = await GetById(cartId, productId, sizeId);
            if (cartItem == null)
            {
                // Add new cart item
                cartItem = new CartItem()
                {
                    CartId = cartId,
                    ProductId = productId,
                    SizeId = sizeId,
                    Quantity = quantity
                };
                _dbSet.Add(cartItem);
                await _context.SaveChangesAsync();
                return cartItem;
            }

            // Update quantity
            cartItem.Quantity += quantity;
            _context.Attach(cartItem);
            _context.Entry(cartItem).Property(ci => ci.Quantity).IsModified = true;
            await _context.SaveChangesAsync();

            return cartItem;
        }

        public async Task<CartItem> RemoveCartItem(long cartId, long productId, long sizeId)
        {
            CartItem cartItem = await GetById(cartId, productId, sizeId);
            if (cartItem != null)
            {
                _dbSet.Remove(cartItem);
                await _context.SaveChangesAsync();
            }

            return cartItem;
        }

        public async Task<IEnumerable<CartItem>> DeleteCart(long cartId)
        {
            IEnumerable<CartItem> cartItems = await GetByCartId(cartId);
            if (cartItems.Count() > 0)
            {
                _dbSet.RemoveRange(cartItems);
                await _context.SaveChangesAsync();
            }

            return cartItems;
        }

        public async void UpdateCartItem(long cartId, long productId, long sizeId, int quantity)
        {
            CartItem cartItem = await GetById(cartId, productId, sizeId);
            if (cartItem != null)
            {
                cartItem.Quantity = quantity;
                _context.Attach(cartItem);
                _context.Entry(cartItem).Property(ci => ci.Quantity).IsModified = true;
                await _context.SaveChangesAsync();
            }
        }
    }
}
