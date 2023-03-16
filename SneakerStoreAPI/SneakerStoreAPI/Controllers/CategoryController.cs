using Microsoft.AspNetCore.Mvc;
using SneakerStoreAPI.Data;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SneakerStoreAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CategoryController : Controller
    {
        private readonly ICategoryService _categoryService;

        public CategoryController(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }

        // Get all categories
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Category>>> GetAll()
        {
            var data = await _categoryService.GetAll();
            if (data == null)
            {
                return NotFound();
            }
            return Ok(data);
        }

        // Get category detail for update
        [HttpGet("{id:int}")]
        public async Task<ActionResult<Category>> GetById(long id)
        {
            var data = await _categoryService.GetById(id);
            if (data == null)
            {
                return NotFound();
            }
            return Ok(data);
        }

        // Create new Category
        [HttpPost]
        public async Task<ActionResult<Category>> CreateBrand(Category category)
        {
            var data = await _categoryService.CreateCategory(category.Name);
            if (data == null)
            {
                return NotFound();
            }
            return Ok(data);
        }

        // Update a Category
        [HttpPost("{id:int}")]
        public async Task<ActionResult<Category>> UpdateCategory(long id, Category category)
        {
            var data = await _categoryService.UpdateCategory(id, category.Name);
            if (data == null)
            {
                return NotFound();
            }
            return Ok(data);
        }
    }
}
