using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SneakerStoreAPI.Data
{
    public class BrandRepository : IBrandRepository
    {
        private readonly SneakerStoreContext _context;
        private readonly DbSet<Brand> _dbSetBrand;
        public BrandRepository()
        {
            _context = new SneakerStoreContext();
            _dbSetBrand = _context.Set<Brand>();
        }

        public async Task<Brand> GetById(long id)
        {
            return await _dbSetBrand.Where(p => p.Id == id).FirstOrDefaultAsync();
        }

        public async Task<Brand> CreateBrand(string brandName)
        {
            Brand brand = new Brand()
            {
                Name = brandName
            };

            _dbSetBrand.Add(brand);
            await _context.SaveChangesAsync();
            return brand;
        }

        public async Task<Brand> UpdateBrand(long id, string brandName)
        {
            Brand brand = await GetById(id);
            if(brand != null)
            {
                brand.Name = brandName;
            }

            _context.Attach(brand);
            _context.Entry(brand).Property(p => p.Name).IsModified=true;
            await _context.SaveChangesAsync();
            return brand;
        }

        public async Task<IEnumerable<Brand>> GetAll()
        {
            return await _dbSetBrand.ToListAsync();
        }
    }
}
