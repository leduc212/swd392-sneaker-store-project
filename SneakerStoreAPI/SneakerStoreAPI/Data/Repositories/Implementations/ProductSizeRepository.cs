using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace SneakerStoreAPI.Data
{
    public class ProductSizeRepository : IProductSizeRepository
    {
        private readonly SneakerStoreContext _context;
        private readonly DbSet<ProductSize> _dbSetProductSize;
        public ProductSizeRepository()
        {
            _context = new SneakerStoreContext();
            _dbSetProductSize = _context.Set<ProductSize>();
        }

        public void AddSize(long sizeId, long productId)
        {
            ProductSize productSize = new ProductSize()
            {
                SizeId = sizeId,
                ProductId = productId
            };
            _dbSetProductSize.Add(productSize);
            _context.SaveChanges();
        }

        public IQueryable<ProductSize> GetAllSizeByProductId(long productId)
        {
            return _dbSetProductSize.Where(ps => ps.ProductId == productId);
        }

        public void RemoveAllSizeOfProduct(long productId)
        {
            var productSize = GetAllSizeByProductId(productId);
            _dbSetProductSize.RemoveRange(productSize);
        }
    }
}
