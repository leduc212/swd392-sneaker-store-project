namespace SneakerStoreAPI.Data
{
    public class CheckoutViewModel
    {
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
        public string PaymentMethod { get; set; }
        public decimal TotalPrice { get; set; }
    }
}
