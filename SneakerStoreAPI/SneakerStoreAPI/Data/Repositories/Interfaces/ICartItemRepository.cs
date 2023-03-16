using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SneakerStoreAPI.Data
{
    public interface ICartItemRepository
    {
        Task<CartItem> GetById(long cartId, long productId, long sizeId);
        Task<IEnumerable<CartItem>> GetByCartId(long cartId);
        Task<CartItem> AddToCart(long cartId, long productId, long sizeId, int quantity);
        Task<CartItem> RemoveCartItem(long cartId, long productId, long sizeId);
        Task<IEnumerable<CartItem>> DeleteCart(long cartId);
        void UpdateCartItem(long cartId, long productId, long sizeId, int quantity);
    }
}
