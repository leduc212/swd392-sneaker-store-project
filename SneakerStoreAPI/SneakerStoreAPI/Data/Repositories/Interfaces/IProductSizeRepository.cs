using System.Linq;

namespace SneakerStoreAPI.Data
{
    public interface IProductSizeRepository
    {
        void AddSize(long sizeId, long productId);
        IQueryable<ProductSize> GetAllSizeByProductId(long productId);
        void RemoveAllSizeOfProduct(long productId);
    }
}
