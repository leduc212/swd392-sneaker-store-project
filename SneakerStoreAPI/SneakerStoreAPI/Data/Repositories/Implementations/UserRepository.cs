using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BC = BCrypt.Net.BCrypt;

namespace SneakerStoreAPI.Data
{
    public class UserRepository : IUserRepository
    {
        private readonly SneakerStoreContext _context;
        private readonly DbSet<User> _dbSet;
        public UserRepository()
        {
            _context = new SneakerStoreContext();
            _dbSet = _context.Set<User>();
        }

        public async Task<User> Login(string email, string password)
        {
            User user = await _dbSet
                .Where(u => u.Email.Equals(email))
                .FirstOrDefaultAsync();
            if (user == null || !BC.Verify(password, user.Password))
            {
                return null;
            }
            return user;
        }

        public async Task<User> GetByEmail(string email)
        {
            User user = await _dbSet.Where(u => u.Email.Equals(email)).FirstOrDefaultAsync();
            return user;
        }

        public async Task<User> GetById(long id)
        {
            User user = await _dbSet.Where(u => u.Id == id).FirstOrDefaultAsync();
            return user;
        }

        public async Task<User> Register(string email, string phone, string fullName, string password)
        {
            User user = new User() { 
                Email = email,
                Phone = phone,
                Name = fullName,
                Password = BC.HashPassword(password),
                Active = 1,
                Admin = 0,
                CreatedAt = DateTime.Now,
                UpdatedAt = DateTime.Now
            };

            _dbSet.Add(user);
            await _context.SaveChangesAsync();
            return user;
        }


        public async Task<User> UpdateNameAndPhone(long userId, string phone, string name)
        {
            User user = await GetById(userId);
            if (user != null)
            {
                user.Name = name;
                user.Phone = phone;
                user.UpdatedAt = DateTime.Now;
            }
            _dbSet.Update(user);
            await _context.SaveChangesAsync();
            return user;
        }

        public async Task<User> UpdatePassword(long userId, string newPassword)
        {
            User user = await GetById(userId);
            if (user != null)
            {
                user.Password = BC.HashPassword(newPassword);
                user.UpdatedAt = DateTime.Now;
            }
            _dbSet.Update(user);
            await _context.SaveChangesAsync();
            return user;
        }

        public async void ChangeUserStatus(long id)
        {
            User user = await GetById(id);
            if (user != null)
            {
                if(user.Active == 0)
                {
                    user.Active = 1;
                } 
                else
                {
                    user.Active = 0;
                }
            }
            _dbSet.Update(user);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<User>> GetAllUserPagination(int page, int size, string search)
        {
            return await _dbSet
                .Where(u => (string.IsNullOrEmpty(search) || u.Email.Contains(search)))
                .OrderBy(u => u.Id)
                .Skip((page - 1) * size)
                .Take(size)
                .ToListAsync();
        }

        public async Task<int> CountAllUserPagination(string search)
        {
            return await _dbSet
                .Where(u => (string.IsNullOrEmpty(search) || u.Email.Contains(search)))
                .CountAsync();
        }

        public async Task<int> CountAllCustomerPagination()
        {
            return await _dbSet
                .Where(u => u.Admin == 0)
                .CountAsync();
        }
    }
}
