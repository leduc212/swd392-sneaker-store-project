using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SneakerStoreAPI.Data
{
    public class CartService : ICartService
    {
        private readonly ICartRepository _cartRepository;
        private readonly ICartItemRepository _cartItemRepository;
        private readonly IOrderRepository _orderRepository;

        public CartService(ICartRepository cartRepository, ICartItemRepository cartItemRepository, IOrderRepository orderRepository)
        {
            _cartRepository = cartRepository;
            _cartItemRepository = cartItemRepository;
            _orderRepository = orderRepository;
        }

        public async Task<int> AddToCart(long userId, ProductDetailViewModel addToCartModel)
        {
            // Get Cart from User
            Cart cart = await _cartRepository.GetCartByUserId(userId);

            // Add new cart item or update quantity or current item
            CartItem cartItem = await _cartItemRepository.AddToCart(cart.Id, addToCartModel.ProductID, addToCartModel.SizeID, addToCartModel.Quantity);

            // Update cart item count
            int cartCount = await _cartRepository.GetCartCount(userId);
            return cartCount;
        }

        public async Task<Cart> CreateCart(long userId)
        {
            return await _cartRepository.CreateCart(userId);
        }

        public async Task<CartViewModel> GetCartByUserId(long userId)
        {
            // Get Cart from User
            Cart cart = await _cartRepository.GetCartByUserId(userId);

            // Get Cart itesm
            IEnumerable<CartItem> cartItems = await _cartItemRepository.GetByCartId(cart.Id);

            CartViewModel cartViewModel = new CartViewModel()
            {
                CartItems = cartItems.OrderBy(ci => ci.ProductId),
                TotalItems = cartItems.Count(),
                TotalQuantities = cartItems.Sum(ci => ci.Quantity).Value,
                TotalPrice = cartItems.Sum(ci => ci.Quantity * ci.Product.Price).Value
            };
            return cartViewModel;
        }

        public async Task<int> GetCartCount(long userId)
        {
            return await _cartRepository.GetCartCount(userId);
        }

        public async Task<int> RemoveFromcart(long userId, long productId, long sizeId)
        {
            // Get Cart from User
            Cart cart = await _cartRepository.GetCartByUserId(userId);

            // Remove cartitem by cartid, prodid, sizeid
            await _cartItemRepository.RemoveCartItem(cart.Id, productId, sizeId);

            // Update cart item count
            int cartCount = await _cartRepository.GetCartCount(userId);

            return cartCount;
        }

        public async Task<int> ChangeQuantity(long userId, long productId, long sizeId, int newQuantity)
        {
            // Get Cart from User
            Cart cart = await _cartRepository.GetCartByUserId(userId);

            // Update cartitem by cartid, prodid, sizeid
            _cartItemRepository.UpdateCartItem(cart.Id, productId, sizeId, newQuantity);

            // Update cart item count
            int cartCount = await _cartRepository.GetCartCount(userId);
            return cartCount;
        }

        public async Task<int> Checkout(long userId, CheckoutViewModel model)
        {
            // Get Cart from User
            Cart cart = await _cartRepository.GetCartByUserId(userId);

            // Get Cart items
            IEnumerable<CartItem> cartItems = await _cartItemRepository.GetByCartId(cart.Id);

            // Create order and add order items
            Order order = await _orderRepository.CreateOrder(userId, model.Phone, model.Address, model.PaymentMethod, model.TotalPrice, cartItems);

            // Delete cart items
            await _cartItemRepository.DeleteCart(cart.Id);

            // Update cart item count
            int cartCount = await _cartRepository.GetCartCount(userId);

            return cartCount;
        }
    }
}
