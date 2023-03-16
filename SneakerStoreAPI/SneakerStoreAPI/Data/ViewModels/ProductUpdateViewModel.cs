using Microsoft.AspNetCore.Http;
using System.Collections.Generic;
using System.Linq;

namespace SneakerStoreAPI.Data
{
    public class ProductUpdateViewModel
    {
        public long Id { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public long? BrandId { get; set; }
        public long? CategoryId { get; set; }
        public List<long> Sizes { get; set; }
        public IEnumerable<Brand> BrandList { get; set; }
        public IEnumerable<Category> CategoryList { get; set; }
        public IEnumerable<Size> SizeList { get; set; }
    }
}
