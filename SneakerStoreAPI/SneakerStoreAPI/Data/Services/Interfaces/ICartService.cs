using Firebase.Auth;
using System.Threading.Tasks;

namespace SneakerStoreAPI.Data
{
    public interface ICartService
    {
        Task<int> AddToCart(long userId, ProductDetailViewModel addToCartModel);
        Task<int> RemoveFromcart(long userId, long productId, long sizeId);
        Task<int> ChangeQuantity(long userId, long productId, long sizeId, int newQuantity);
        Task<Cart> CreateCart(long userId);
        Task<int> Checkout(long userId, CheckoutViewModel model);
        Task<int> GetCartCount(long userId);
        Task<CartViewModel> GetCartByUserId(long userId);
    }
}
