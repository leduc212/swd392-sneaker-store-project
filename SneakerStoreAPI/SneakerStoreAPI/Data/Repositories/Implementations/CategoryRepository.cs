using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SneakerStoreAPI.Data
{
    public class CategoryRepository : ICategoryRepository
    {
        private readonly SneakerStoreContext _context;
        private readonly DbSet<Category> _dbSetCategory;

        public CategoryRepository()
        {
            _context = new SneakerStoreContext();
            _dbSetCategory = _context.Set<Category>();
        }

        public async Task<Category> GetById(long id)
        {
            return await _dbSetCategory.Where(p => p.Id == id).FirstOrDefaultAsync();
        }

        public async Task<Category> CreateCategory(string categoryName)
        {
            Category category = new Category()
            {
                Name = categoryName
            };

            _dbSetCategory.Add(category);
            await _context.SaveChangesAsync();
            return category;
        }

        public async Task<Category> UpdateCategory(long id, string categoryName)
        {
            Category category = await GetById(id);
            if (category != null)
            {
                category.Name = categoryName;
            }

            _context.Attach(category);
            _context.Entry(category).Property(p => p.Name).IsModified = true;
            await _context.SaveChangesAsync();
            return category;
        }

        public async Task<IEnumerable<Category>> GetAll()
        {
            return await _dbSetCategory.ToListAsync();
        }
    }
}
