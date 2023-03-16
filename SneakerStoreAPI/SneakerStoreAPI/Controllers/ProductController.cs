using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SneakerStoreAPI.Data;
using System.Collections.Generic;
using System.Linq;
using System;
using System.Text.Json;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;

namespace SneakerStoreAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly IProductService _productService;

        public ProductController(IProductService productService)
        {
            _productService = productService;
        }


        // Home page: show top 3 products
        [HttpGet]
        [Route("TopProducts")]
        public async Task<ActionResult<IEnumerable<Product>>> GetTopProducts()
        {
            var data = await _productService.GetMostPopularItem();
            if(data == null)
            {
                return NotFound();
            }
            return Ok(data);
        }

        // Get client products list pagination and search
        [HttpGet]
        public async Task<ActionResult<ProductListClientViewModel>> GetProducts(
            [FromQuery(Name = "page")] int page, [FromQuery(Name = "size")] int size,
            [FromQuery(Name = "search")] string search, [FromQuery(Name = "categoryId")] long categoryID,
            [FromQuery(Name = "brandId")] long brandId, [FromQuery(Name = "sizeId")] long sizeId,
            [FromQuery(Name = "orderBy")] int orderBy)
        {
            var data = await _productService.GetAllProductPagination(page, size, search, categoryID, brandId, sizeId, orderBy);
            if (data == null)
            {
                return NotFound();
            }
            return Ok(data);
        }

        // Get product detail client
        [HttpGet("{id:int}")]
        public async Task<ActionResult<ProductDetailViewModel>> GetProduct(int id)
        {
            var data = await _productService.GetById(id);
            if (data == null)
            {
                return NotFound();
            }
            return Ok(data);
        }

        // Admin: Create page get data for categories, brands, sizes
        [HttpGet]
        [Route("Create")]
        public async Task<ActionResult<ProductCreateViewModel>> GetDataForCreatePage()
        {
            var data = await _productService.GetDataForCreatePage();
            if (data == null)
            {
                return NotFound();
            }
            return Ok(data);
        }

        // Admin: Create new product
        [HttpPost]
        [Route("Create")]
        public async Task<ActionResult<Product>> AddProduct([FromBody] ProductCreateViewModel productCreateViewModel)
        {
            var data = await _productService.CreateProduct(productCreateViewModel);
            if (data == null)
            {
                return NotFound();
            }
            return Ok(data);
        }

        // Admin: Get admin products list pagination and search
        [HttpGet]
        [Route("Admin")]
        public async Task<ActionResult<ProductListClientViewModel>> GetProductsAdmin(
            [FromQuery(Name = "page")] int page, [FromQuery(Name = "size")] int size,
            [FromQuery(Name = "search")] string search, [FromQuery(Name = "categoryId")] long categoryID,
            [FromQuery(Name = "brandId")] long brandId, [FromQuery(Name = "sizeId")] long sizeId,
            [FromQuery(Name = "orderBy")] int orderBy)
        {
            var data = await _productService.GetAllProductPaginationAdmin(page, size, search, categoryID, brandId, sizeId, orderBy);
            if (data == null)
            {
                return NotFound();
            }
            return Ok(data);
        }

        // Admin: Get product detail admin
        [HttpGet]
        [Route("Admin/{id}")]
        public async Task<ActionResult<Product>> GetProductAdmin(int id)
        {
            var data = await _productService.GetByIdAllStatus(id);
            if (data == null)
            {
                return NotFound();
            }
            return Ok(data);
        }

        // Admin: Create page update
        [HttpGet]
        [Route("Update/{id}")]
        public async Task<ActionResult<ProductUpdateViewModel>> GetDataForUpdatePage(int id)
        {
            var data = await _productService.GetDataForUpdatePage(id);
            if (data == null)
            {
                return NotFound();
            }
            return Ok(data);
        }

        // Admin: Update product
        [HttpPost]
        [Route("Update")]
        public async Task<ActionResult<Product>> UpdateProduct([FromBody] ProductUpdateViewModel productUpdateViewModel)
        {
            var data = await _productService.UpdateProduct(productUpdateViewModel);
            if (data == null)
            {
                return NotFound();
            }
            return Ok(data);
        }

        // Admin : Change product status
        [HttpGet]
        [Route("ChangeStatus/{id}")]
        public async Task<ActionResult<ProductUpdateViewModel>> ChangeProductStatus(int id)
        {
            _productService.ChangeStatus(id);
            return Ok();
        }
    }
}
