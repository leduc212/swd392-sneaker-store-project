﻿using System;
using System.Collections.Generic;

#nullable disable

namespace SneakerStoreAPI.Data
{
    public partial class Tag
    {
        public Tag()
        {
            ProductTags = new HashSet<ProductTag>();
        }

        public long Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<ProductTag> ProductTags { get; set; }
    }
}
