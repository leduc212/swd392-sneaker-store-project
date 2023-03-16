using System.Threading.Tasks;

namespace SneakerStoreAPI.Data
{
    public interface ICartRepository
    {
        Task<Cart> CreateCart(long userId);
        Task<int> GetCartCount(long userId);
        Task<Cart> GetCartByUserId(long userId);
    }
}
