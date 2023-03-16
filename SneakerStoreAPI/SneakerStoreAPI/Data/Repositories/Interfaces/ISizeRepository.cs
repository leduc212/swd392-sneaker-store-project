using System.Collections.Generic;
using System.Threading.Tasks;

namespace SneakerStoreAPI.Data
{
    public interface ISizeRepository
    {
        Task<IEnumerable<Size>> GetAll();
    }
}
