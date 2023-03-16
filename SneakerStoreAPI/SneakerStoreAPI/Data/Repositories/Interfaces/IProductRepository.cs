using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SneakerStoreAPI.Data
{
    public interface IProductRepository
    {
        Task<IEnumerable<Product>> GetAllProduct();
        Task<List<long>> GetMostPopularItemIds();
        Task<IEnumerable<Product>> GetMostPopularItem();
        Task<IEnumerable<Product>> GetAllProductPagination(int page, int size, string search, long categoryId, long brandId, long sizeId, int orderBy);
        Task<int> CountAllProduct(string search, long categoryId, long brandId, long sizeId);
        Task<IEnumerable<Product>> GetAllProductPaginationAdmin(int page, int size, string search, long categoryId, long brandId, long sizeId, int orderBy);
        Task<int> CountAllProductAdmin(string search, long categoryId, long brandId, long sizeId);
        Task<IEnumerable<Product>> GetRelatedProduct(long productId);
        Task<Product> GetById(long id);
        Task<Product> GetByIdAllStatus(long id);
        Task<Product> CreateProduct(string description, string name, string image, decimal price, long? brandId, long? categoryId, List<long> sizes);
        Task<Product> UpdateProduct(long id, string description, string name, string image, decimal price, long? brandId, long? categoryId, List<long> sizes);
        void ChangeStatus(long id);
    }
}
