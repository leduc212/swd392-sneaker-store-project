using System;

namespace SneakerStoreAPI.Data
{
    public class OrderUpdateViewModel
    {
        public long Id { get; set; }
        public byte Status { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }
}
