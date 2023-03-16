﻿using System;
using System.Collections.Generic;

#nullable disable

namespace SneakerStoreAPI.Data
{
    public partial class Brand
    {
        public Brand()
        {
            Products = new HashSet<Product>();
        }

        public long Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Product> Products { get; set; }
    }
}
