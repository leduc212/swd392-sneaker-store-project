using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SneakerStoreAPI.Data
{
    public interface IUserRepository
    {
        Task<User> Login(string email, string password);
        Task<User> GetByEmail(string email);
        Task<User> GetById(long id);
        Task<User> Register(string email, string phone, string fullName, string password);
        Task<User> UpdateNameAndPhone(long userId, string phone, string name);
        Task<User> UpdatePassword(long userId, string newPassword);
        void ChangeUserStatus(long id);
        Task<IEnumerable<User>> GetAllUserPagination(int page, int size, string search);
        Task<int> CountAllUserPagination(string search);
        Task<int> CountAllCustomerPagination();
    }
}
