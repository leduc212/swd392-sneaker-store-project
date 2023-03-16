using Microsoft.AspNetCore.Mvc;
using SneakerStoreAPI.Data;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SneakerStoreAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BrandController : Controller
    {
        private readonly IBrandService _brandService;

        public BrandController(IBrandService brandService)
        {
            _brandService = brandService;
        }

        // Get all brands
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Brand>>> GetAll()
        {
            var data = await _brandService.GetAll();
            if (data == null)
            {
                return NotFound();
            }
            return Ok(data);
        }

        // Get brand detail for update
        [HttpGet("{id:int}")]
        public async Task<ActionResult<Brand>> GetById(long id)
        {
            var data = await _brandService.GetById(id);
            if (data == null)
            {
                return NotFound();
            }
            return Ok(data);
        }

        // Create new Brand
        [HttpPost]
        public async Task<ActionResult<Brand>> CreateBrand(Brand brand)
        {
            var data = await _brandService.CreateBrand(brand.Name);
            if (data == null)
            {
                return NotFound();
            }
            return Ok(data);
        }

        // Update a Brand
        [HttpPost("{id:int}")]
        public async Task<ActionResult<Brand>> UpdateBrand(long id, Brand brand)
        {
            var data = await _brandService.UpdateBrand(id, brand.Name);
            if (data == null)
            {
                return NotFound();
            }
            return Ok(data);
        }
    }
}
