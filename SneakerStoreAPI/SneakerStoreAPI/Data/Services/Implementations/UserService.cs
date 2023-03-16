using System.Collections.Generic;
using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Http;
using System.Security.Claims;
using BC = BCrypt.Net.BCrypt;

namespace SneakerStoreAPI.Data
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _repository;
        private readonly ICartRepository _cartRepository;
        public UserService(IUserRepository repository, ICartRepository cartRepository)
        {
            _repository = repository;
            _cartRepository = cartRepository;
        }

        public async Task<User> ChangeStatus(long userId)
        {
            User user = await _repository.GetById(userId);
            if (user != null)
            {
                _repository.ChangeUserStatus(userId);
            }
            return user;
        }

        public async Task<UserUpdateViewModel> GetAll(int page, string search)
        {
            // Handle query data
            int size = 10;
            page = page == 0 ? 1 : page;
            var userList = await _repository.GetAllUserPagination(page, size, search);
            int userCount = await _repository.CountAllUserPagination(search);
            int totalPages = (int)Math.Ceiling((double)userCount / size);
            List<int> pageNumbers = new List<int>();
            if (totalPages > 0)
            {
                int start = Math.Max(1, page - 2);
                int end = Math.Min(page + 2, totalPages);

                if (totalPages > 5)
                {
                    if (end == totalPages) start = end - 4;
                    else if (start == 1) end = start + 4;
                }
                else
                {
                    start = 1;
                    end = totalPages;
                }
                pageNumbers = Enumerable.Range(start, end - start + 1).ToList();
            }

            UserUpdateViewModel users = new UserUpdateViewModel()
            {
                UserList = userList,
                Size = size,
                Page = page,
                TotalCount = userCount,
                TotalPage = totalPages,
                PageNumbers = pageNumbers,
                Search = search,
            };

            return users;
        }

        public async Task<LoginViewModel> Login(LoginViewModel model)
        {
            // Check login account with Database
            User user = await _repository.Login(model.Email, model.Password);
            if (user == null)
            {
                // User not exists -> back to Login
                return null;
            }

            if (user.Active == 0)
            {
                // User is inactive
                return null;
            }

            // Login success:
            int cartCount = await _cartRepository.GetCartCount(user.Id);
            model.CartCount = cartCount;
            model.Name = user.Name;
            model.UserId = user.Id;
            model.IsAdmin = false;
            model.Password = "";

            if (user.Admin == 1)
            {
                model.IsAdmin = true;
            }

            return model;
        }

        public async Task<RegisterViewModel> Register(RegisterViewModel model)
        {
            // Check confirm password
            if (!model.ConfirmPassword.Equals(model.Password))
            {
                // Back to register if not equal
                return null;
            }

            // Check for duplicate email
            if (_repository.GetByEmail(model.Email) != null)
            {
                // Back to register if email is used
                return null;
            }

            // Proceed to add a new User
            User user = await _repository.Register(model.Email, model.Phone, model.FullName, model.Password);
            await _cartRepository.CreateCart(user.Id);
            return model;
        }

        public async Task<User> GetById(long userId)
        {
            return await _repository.GetById(userId);
        }

        public async Task<User> UpdateInformation(User model)
        {
            // Update user in database
            User user = await _repository.UpdateNameAndPhone(model.Id, model.Phone, model.Name);
            return user;
        }

        public async Task<User> ChangePassword(ChangePasswordViewModel model)
        {
            // Get user
            User user = await _repository.GetById(model.Id);

            // Check if current password match
            if (!BC.Verify(model.OldPassword, user.Password))
            {
                return null;
            }

            // Check if new password confirmation
            if (!model.NewPassword.Equals(model.ConfirmPassword))
            {
                return null;
            }

            // Check if new password equal old password
            if (model.NewPassword.Equals(model.OldPassword))
            {
                return null;
            }

            // Update password in database
            user = await _repository.UpdatePassword(model.Id, model.NewPassword);

            return user;
        }
    }   
}
