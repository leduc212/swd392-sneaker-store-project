using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SneakerStoreAPI.Data
{
    public interface IOrderRepository
    {
        Task<Order> CreateOrder(long userId, string phone, string address, string payment, decimal totalPrice, IEnumerable<CartItem> cartItems);
        Task<Order> GetById(long orderId);
        Task<IEnumerable<Order>> GetRecentOrder();
        Task<IEnumerable<Order>> GetOrdersByUserId(long userId);
        Task<IEnumerable<Order>> GetOrdersByUserIdAndStatusPagination(long userId, int page, int size, byte status);
        Task<int> CountAllOrderByUserIdAndStatus(long userId, byte status);
        Task<IEnumerable<Order>> GetAllOrdersByStatusPagination(int page, int size, byte status);
        Task<int> CountAllOrderByStatus(byte status);
        Task<IEnumerable<Order>> GetAllOrdersByStatusAndIdPagination(int page, int size, byte status, string search);
        Task<int> CountAllOrderByStatusAndId(byte status, string search);
        Task<Order> ChangeOrderStatus(long id, byte status);
    }
}
