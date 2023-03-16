using System.Collections.Generic;
using System.Linq;

namespace SneakerStoreAPI.Data
{
    public class ProductDetailViewModel
    {
        public Product Product { get; set; }
        public IEnumerable<Product> RelatedProducts { get; set; }
        public long ProductID { get; set; }
        public long SizeID { get; set; }
        public int Quantity { get; set; }
    }
}
