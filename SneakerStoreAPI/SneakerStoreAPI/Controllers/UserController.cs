using Firebase.Auth;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using SneakerStoreAPI.Data;
using System.Threading.Tasks;

namespace SneakerStoreAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        // Admin: Get users list pagination
        [HttpGet]
        public async Task<ActionResult<UserUpdateViewModel>> ViewAll([FromQuery] int page, [FromQuery] string search)
        {
            var data = await _userService.GetAll(page, search);
            if (data == null)
            {
                return NotFound();
            }
            return Ok(data);
        }

        // Update a user by id
        [HttpGet]
        [Route("Update/{id}")]
        public async Task<ActionResult<Data.User>> Update(int id)
        {
            var data = await _userService.ChangeStatus(id);
            if (data == null)
            {
                return NotFound();
            }
            return Ok(data);
        }

        // Get a user by id
        [HttpGet("{id:int}")]
        public async Task<ActionResult<Data.User>> Get(int id)
        {
            var data = await _userService.GetById(id);
            if (data == null)
            {
                return NotFound();
            }
            return Ok(data);
        }

        // Login
        [HttpPost]
        [Route("Login")]
        public async Task<ActionResult<LoginViewModel>> Login(LoginViewModel model)
        {
            var data = await _userService.Login(model);
            if (data == null)
            {
                return NotFound();
            }
            return Ok(data);
        }

        // Register
        [HttpPost]
        [Route("Register")]
        public async Task<ActionResult<RegisterViewModel>> Register(RegisterViewModel model)
        {
            var data = await _userService.Register(model);
            if (data == null)
            {
                return NotFound();
            }
            return Ok(data);
        }

        // Update information
        [HttpPost]
        [Route("UpdateInformation")]
        public async Task<ActionResult<Data.User>> UpdateInformation(Data.User user)
        {
            var data = await _userService.UpdateInformation(user);
            if (data == null)
            {
                return NotFound();
            }
            return Ok(data);
        }

        // Change password
        [HttpPost]
        [Route("ChangePassword")]
        public async Task<ActionResult<Data.User>> ChangePassword(ChangePasswordViewModel model)
        {
            var data = await _userService.ChangePassword(model);
            if (data == null)
            {
                return NotFound();
            }
            return Ok(data);
        }
    }
}
