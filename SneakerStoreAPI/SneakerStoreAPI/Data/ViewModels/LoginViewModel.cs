namespace SneakerStoreAPI.Data
{
    public class LoginViewModel
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        public long UserId { get; set; }
        public bool IsAdmin { get; set; }
        public int CartCount { get; set; }
    }
}
