using System.Threading.Tasks;
using System.Collections.Generic;

namespace SneakerStoreAPI.Data
{
    public interface ICategoryService
    {
        Task<Category> GetById(long id);
        Task<Category> CreateCategory(string categoryName);
        Task<Category> UpdateCategory(long id, string categoryName);
        Task<IEnumerable<Category>> GetAll();
    }
}
