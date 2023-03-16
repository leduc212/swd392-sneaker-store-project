using Microsoft.AspNetCore.Mvc;
using SneakerStoreAPI.Data;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SneakerStoreAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrderController : Controller
    {
        private readonly IOrderService _orderService;

        public OrderController(IOrderService orderService)
        {
            _orderService = orderService;
        }

        // Get all orders
        [HttpGet]
        public async Task<ActionResult<OrderListAdminViewModel>> GetAll([FromQuery(Name = "page")] int page,
            [FromQuery(Name = "status")] byte status, [FromQuery(Name = "search")] string search,
            [FromQuery(Name = "role")] int role, [FromQuery(Name = "userId")] int userId)
        {
            var data = await _orderService.GetAllOrders(page, status, search, role, userId);
            if (data == null)
            {
                return NotFound();
            }
            return Ok(data);
        }

        // Get order detail
        [HttpGet("{id:int}")]
        public async Task<ActionResult<Order>> GetById(int id)
        {
            var data = await _orderService.GetById(id);
            if (data == null)
            {
                return NotFound();
            }
            return Ok(data);
        }

        //Change order status
        [HttpGet]
        [Route("Update/{id}")]
        public async Task<ActionResult<Order>> ChangeStatus(int id, [FromQuery(Name = "status")] byte status)
        {
            var data = await _orderService.ChangeOrderStatus(id, status);
            if (data == null)
            {
                return NotFound();
            }
            return Ok(data);
        }
    }
}
