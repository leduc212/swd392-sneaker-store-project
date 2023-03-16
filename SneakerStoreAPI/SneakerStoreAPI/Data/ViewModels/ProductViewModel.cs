using System;
using System.Linq;

namespace SneakerStoreAPI.Data
{
    public class ProductViewModel
    {
        public string Description { get; set; }
        public string Image { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public ProductCreateViewModel CreateViewModel { get; set; }
    }
}
