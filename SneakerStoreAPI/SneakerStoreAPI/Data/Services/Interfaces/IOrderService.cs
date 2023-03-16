using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace SneakerStoreAPI.Data
{
    public interface IOrderService
    {
        Task<Order> CreateOrder(long userId, string phone, string address, string payment, decimal totalPrice, IQueryable<CartItem> cartItems);
        Task<Order> GetById(long orderId);
        Task<IEnumerable<Order>> GetRecentOrder();
        Task<int> CountAllOrderByStatus(byte status);
        Task<OrderListAdminViewModel> GetAllOrders(int page, byte status, string search, int role, int userId);
        Task<Order> ChangeOrderStatus(long id, byte status);
    }
}
