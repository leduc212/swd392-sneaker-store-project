using System.Collections.Generic;
using System.Threading.Tasks;

namespace SneakerStoreAPI.Data
{
    public interface IBrandRepository
    {
        Task<IEnumerable<Brand>> GetAll();
        Task<Brand> GetById(long id);
        Task<Brand> CreateBrand(string brandName);
        Task<Brand> UpdateBrand(long id, string brandName);
    }
}
