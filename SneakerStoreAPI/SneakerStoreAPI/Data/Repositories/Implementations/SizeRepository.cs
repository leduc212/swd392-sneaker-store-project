using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SneakerStoreAPI.Data
{
    public class SizeRepository : ISizeRepository
    {
        private readonly SneakerStoreContext _context;
        private readonly DbSet<Size> _dbSetSize;
        public SizeRepository()
        {
            _context = new SneakerStoreContext();
            _dbSetSize = _context.Set<Size>();
        }

        public async Task<IEnumerable<Size>> GetAll()
        {
            return await _dbSetSize.ToListAsync();
        }
    }
}
