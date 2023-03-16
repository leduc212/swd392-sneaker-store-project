using System.Collections.Generic;
using System.Threading.Tasks;

namespace SneakerStoreAPI.Data
{
    public interface ICategoryRepository
    {
        Task<Category> GetById(long id);
        Task<Category> CreateCategory(string categoryName);
        Task<Category> UpdateCategory(long id, string categoryName);
        Task<IEnumerable<Category>> GetAll();
    }
}
