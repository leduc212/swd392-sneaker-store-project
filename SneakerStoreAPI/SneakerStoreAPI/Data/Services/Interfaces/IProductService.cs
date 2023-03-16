using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SneakerStoreAPI.Data
{
    public interface IProductService
    {
        Task<ProductCreateViewModel> GetDataForCreatePage();
        Task<IEnumerable<Product>> GetMostPopularItem();
        Task<ProductListClientViewModel> GetAllProductPagination(int page, int size, string search, long categoryId, long brandId, long sizeId, int orderBy);
        Task<ProductListClientViewModel> GetAllProductPaginationAdmin(int page, int size, string search, long categoryId, long brandId, long sizeId, int orderBy);
        Task<ProductDetailViewModel> GetById(long id);
        Task<Product> GetByIdAllStatus(long id);
        Task<ProductUpdateViewModel> GetDataForUpdatePage(long id);
        Task<Product> CreateProduct(ProductCreateViewModel productCreateViewModel);
        Task<Product> UpdateProduct(ProductUpdateViewModel productUpdateViewModel);
        void ChangeStatus(long id);
    }
}
