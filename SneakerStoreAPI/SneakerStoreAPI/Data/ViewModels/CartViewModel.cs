using System.Collections.Generic;
using System.Linq;

namespace SneakerStoreAPI.Data
{
    public class CartViewModel
    {
        public IEnumerable<CartItem> CartItems { get; set; }
        public int TotalItems { get; set; }
        public int TotalQuantities { get; set; }
        public decimal TotalPrice { get; set; }
    }
}
