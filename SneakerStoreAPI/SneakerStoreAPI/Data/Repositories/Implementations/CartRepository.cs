using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace SneakerStoreAPI.Data
{
    public class CartRepository : ICartRepository
    {
        private readonly SneakerStoreContext _context;
        private readonly DbSet<Cart> _dbSetCart;
        private readonly DbSet<CartItem> _dbSetCartItem;

        public CartRepository()
        {
            _context = new SneakerStoreContext();
            _dbSetCart = _context.Set<Cart>();
            _dbSetCartItem = _context.Set<CartItem>();
        }

        public async Task<Cart> CreateCart(long userId)
        {
            Cart cart = new Cart()
            {
                UserId = userId,
            };

            _dbSetCart.Add(cart);
            await _context.SaveChangesAsync();
            return cart;
        }

        public async Task<int> GetCartCount(long userId)
        {
            int count = await _dbSetCartItem.Join(_dbSetCart, ci => ci.CartId, c => c.Id, (ci, c) => new
            {
                userId = c.UserId
            }).Where(x => x.userId == userId)
            .CountAsync();

            return count;
        }

        public async Task<Cart> GetCartByUserId(long userId)
        {
            Cart cart = await _dbSetCart.Where(c => c.UserId == userId).FirstOrDefaultAsync();

            return cart;
        }
    }
}
