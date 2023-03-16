using System.Collections.Generic;
using System.Threading.Tasks;

namespace SneakerStoreAPI.Data
{
    public interface IBrandService
    {
        Task<Brand> GetById(long id);
        Task<Brand> CreateBrand(string brandName);
        Task<Brand> UpdateBrand(long id, string brandName);
        Task<IEnumerable<Brand>> GetAll();
    }
}
