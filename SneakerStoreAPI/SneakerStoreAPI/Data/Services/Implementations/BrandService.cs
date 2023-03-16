using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SneakerStoreAPI.Data
{
    public class BrandService : IBrandService
    {
        private readonly IBrandRepository _repository;
        public BrandService(IBrandRepository repository)
        {
            _repository = repository;
        }
        public async Task<Brand> CreateBrand(string brandName)
        {
            return await _repository.CreateBrand(brandName);
        }

        public async Task<IEnumerable<Brand>> GetAll()
        {
            return await _repository.GetAll();
        }

        public async Task<Brand> GetById(long id)
        {
            return await _repository.GetById(id);
        }

        public async Task<Brand> UpdateBrand(long id, string brandName)
        {
            return await _repository.UpdateBrand(id, brandName);
        }
    }
}
