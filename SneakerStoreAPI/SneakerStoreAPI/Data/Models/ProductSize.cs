﻿using System;
using System.Collections.Generic;

#nullable disable

namespace SneakerStoreAPI.Data
{
    public partial class ProductSize
    {
        public long SizeId { get; set; }
        public long ProductId { get; set; }

        public virtual Product Product { get; set; }
        public virtual Size Size { get; set; }
    }
}
