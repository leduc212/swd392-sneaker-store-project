using Firebase.Auth;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using SneakerStoreAPI.Data;
using System.Data;
using System.Threading.Tasks;

namespace SneakerStoreAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CartController : Controller
    {
        private readonly ICartService _cartService;

        public CartController(ICartService cartService)
        {
            _cartService = cartService;
        }

        // Get all cart items of a user id
        [HttpGet]
        public async Task<ActionResult<CartViewModel>> GetCart([FromQuery(Name = "userId")] int userId)
        {
            var data = await _cartService.GetCartByUserId(userId);
            if (data == null)
            {
                return NotFound();
            }
            return Ok(data);
        }

        // Add an item to cart of a user id
        [HttpPost]
        [Route("Add")]
        public async Task<ActionResult<int>> AddToCart([FromQuery(Name = "userId")] int userId, 
            [FromBody] ProductDetailViewModel addToCartModel)
        {
            var data = await _cartService.AddToCart(userId, addToCartModel);
            return Ok(data);
        }

        // Remove an item from cart
        [HttpGet]
        [Route("Remove")]
        public async Task<ActionResult<int>> RemoveFromCart([FromQuery(Name = "userId")] int userId,
            [FromQuery(Name = "productId")] int productId, [FromQuery(Name = "sizeId")] int sizeId)
        {
            var data = await _cartService.RemoveFromcart(userId, productId, sizeId);
            return Ok(data);
        }

        // change quantity of an item from cart
        [HttpGet]
        [Route("Update")]
        public async Task<ActionResult<int>> ChangeQuantity([FromQuery(Name = "userId")] int userId,
            [FromQuery(Name = "productId")] int productId, [FromQuery(Name = "sizeId")] int sizeId,
            [FromQuery(Name = "newQuantity")] int newQuantity)
        {
            var data = await _cartService.ChangeQuantity(userId, productId, sizeId, newQuantity);
            return Ok(data);
        }

        // change quantity of an item from cart
        [HttpPost]
        [Route("Checkout")]
        public async Task<ActionResult<int>> Checkout([FromQuery(Name = "userId")] int userId,
            CheckoutViewModel model)
        {
            var data = await _cartService.Checkout(userId, model);
            return Ok(data);
        }
    }
}
