using System.Linq;
using System.Threading.Tasks;

namespace SneakerStoreAPI.Data
{
    public interface IUserService
    {
        Task<UserUpdateViewModel> GetAll(int page, string search);
        Task<User> ChangeStatus(long userId);
        Task<User> GetById(long userId);
        Task<User> UpdateInformation(User user);
        Task<User> ChangePassword(ChangePasswordViewModel model);
        Task<LoginViewModel> Login(LoginViewModel model);
        Task<RegisterViewModel> Register(RegisterViewModel model);
    }
}
