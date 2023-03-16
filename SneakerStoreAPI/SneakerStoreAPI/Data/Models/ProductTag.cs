﻿using System;
using System.Collections.Generic;

#nullable disable

namespace SneakerStoreAPI.Data
{
    public partial class ProductTag
    {
        public long TagId { get; set; }
        public long ProductId { get; set; }

        public virtual Product Product { get; set; }
        public virtual Tag Tag { get; set; }
    }
}
