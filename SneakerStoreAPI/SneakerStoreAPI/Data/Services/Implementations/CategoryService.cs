using System.Collections.Generic;
using System.Threading.Tasks;

namespace SneakerStoreAPI.Data
{
    public class CategoryService : ICategoryService
    {
        private readonly ICategoryRepository _repository;
        public CategoryService(ICategoryRepository repository)
        {
            _repository = repository;
        }
        public async Task<Category> CreateCategory(string categoryName)
        {
            return await _repository.CreateCategory(categoryName);
        }

        public async Task<IEnumerable<Category>> GetAll()
        {
            return await _repository.GetAll();
        }

        public async Task<Category> GetById(long id)
        {
            return await _repository.GetById(id);
        }

        public async Task<Category> UpdateCategory(long id, string categoryName)
        {
            return await _repository.UpdateCategory(id, categoryName);
        }
    }
}
