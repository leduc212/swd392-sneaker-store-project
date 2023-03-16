using Firebase.Auth;
using Firebase.Storage;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Sockets;
using System.Threading.Tasks;

namespace SneakerStoreAPI.Data
{
    public class ProductService : IProductService
    {
        private readonly IProductRepository _productRepository;
        private readonly ICategoryRepository _categoryRepository;
        private readonly IBrandRepository _brandRepository;
        private readonly ISizeRepository _sizeRepository;
        public ProductService(IProductRepository productRepository, ICategoryRepository categoryRepository
            , IBrandRepository brandRepository, ISizeRepository sizeRepository)
        {
            _productRepository = productRepository;
            _categoryRepository = categoryRepository;
            _brandRepository = brandRepository;
            _sizeRepository = sizeRepository;
        }

        public void ChangeStatus(long id)
        {
            _productRepository.ChangeStatus(id);
        }

        public async Task<Product> CreateProduct(ProductCreateViewModel model)
        {
            if (model.Sizes?.Any() != true)
            {
                return null;
            }
            Product newProduct = await _productRepository.CreateProduct(model.Description,
                model.Name, model.Image, model.Price, model.BrandId, model.CategoryId, model.Sizes);

            return newProduct;
        }

        public async Task<ProductListClientViewModel> GetAllProductPagination(int page, int size, string search, long categoryId, long brandId, long sizeId, int orderBy)
        {
            // Handle query data
            size = 12;
            page = page == 0 ? 1 : page;
            var productList = await _productRepository.GetAllProductPagination(page, size, search, categoryId, brandId, sizeId, orderBy);
            int productCount = await _productRepository.CountAllProduct(search, categoryId, brandId, sizeId);
            int totalPages = (int)Math.Ceiling((double)productCount / size);
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

            // Get category list for filtering
            var categories = _categoryRepository.GetAll();

            // Get brand list for filtering
            var brands = _brandRepository.GetAll();

            // Get size list for filtering
            var sizes = _sizeRepository.GetAll();

            ProductListClientViewModel model = new()
            {
                ProductsPaginated = productList,
                Size = size,
                Page = page,
                TotalCount = productCount,
                TotalPage = totalPages,
                PageNumbers = pageNumbers,
                Search = search,
                Categories = categories.Result,
                Category = categoryId,
                Brands = brands.Result,
                Brand = brandId,
                Sizes = sizes.Result,
                SizeId = sizeId,
                OrderBy = orderBy,
            };

            return model;
        }

        public async Task<ProductListClientViewModel> GetAllProductPaginationAdmin(int page, int size, string search, long categoryId, long brandId, long sizeId, int orderBy)
        {
            // Handle query data
            size = 12;
            page = page == 0 ? 1 : page;
            var productList = await _productRepository.GetAllProductPaginationAdmin(page, size, search, categoryId, brandId, sizeId, orderBy);
            int productCount = await _productRepository.CountAllProductAdmin(search, categoryId, brandId, sizeId);
            int totalPages = (int)Math.Ceiling((double)productCount / size);
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

            // Get category list for filtering
            var categories = _categoryRepository.GetAll();

            // Get brand list for filtering
            var brands = _brandRepository.GetAll();

            // Get size list for filtering
            var sizes = _sizeRepository.GetAll();

            ProductListClientViewModel model = new()
            {
                ProductsPaginated = productList,
                Size = size,
                Page = page,
                TotalCount = productCount,
                TotalPage = totalPages,
                PageNumbers = pageNumbers,
                Search = search,
                Categories = categories.Result,
                Category = categoryId,
                Brands = brands.Result,
                Brand = brandId,
                Sizes = sizes.Result,
                SizeId = sizeId,
                OrderBy = orderBy,
            };

            return model;
        }

        public async Task<ProductDetailViewModel> GetById(long id)
        {
            var product = await _productRepository.GetById(id);
            if(product == null)
            {
                return null;
            }
            var relatedProducts = await _productRepository.GetRelatedProduct(id);
            ProductDetailViewModel productDetailViewModel = new ProductDetailViewModel()
            {
                Product = product,
                RelatedProducts = relatedProducts,
                ProductID = id
            };

            return productDetailViewModel;
        }

        public async Task<Product> GetByIdAllStatus(long id)
        {
            return await _productRepository.GetByIdAllStatus(id);
        }

        public async Task<ProductCreateViewModel> GetDataForCreatePage()
        {
            // Get category list for filtering
            var categories = await _categoryRepository.GetAll();

            // Get brand list for filtering
            var brands = await _brandRepository.GetAll();

            // Get size list for filtering
            var sizes = await _sizeRepository.GetAll();

            ProductCreateViewModel model = new ProductCreateViewModel()
            {
                CategoryList = categories,
                BrandList = brands,
                SizeList = sizes
            };

            return model;
        }

        public async Task<ProductUpdateViewModel> GetDataForUpdatePage(long id)
        {
            // Get current product
            var product = await _productRepository.GetByIdAllStatus(id);

            // Get category list for filtering
            var categories = await _categoryRepository.GetAll();

            // Get brand list for filtering
            var brands = await _brandRepository.GetAll();

            // Get size list for filtering
            var sizes = await _sizeRepository.GetAll();

            ProductUpdateViewModel model = new ProductUpdateViewModel()
            {
                Id = id,
                Description = product.Description,
                Name = product.Name,
                Image = product.Image,
                Price = product.Price,
                BrandId = product.BrandId,
                CategoryId = product.CategoryId,
                CategoryList = categories,
                BrandList = brands,
                SizeList = sizes,
                Sizes = product.ProductSizes.Select(p => p.SizeId).ToList()
            };

            return model;
        }

        public async Task<IEnumerable<Product>> GetMostPopularItem()
        {
            return await _productRepository.GetMostPopularItem();
        }

        public async Task<Product> UpdateProduct(ProductUpdateViewModel model)
        {
            if (model.Sizes?.Any() != true)
            {
                return null;
            }
            return await _productRepository.UpdateProduct(model.Id, model.Description, model.Name, model.Image, model.Price, model.BrandId, model.CategoryId, model.Sizes);
        }
    }
}
