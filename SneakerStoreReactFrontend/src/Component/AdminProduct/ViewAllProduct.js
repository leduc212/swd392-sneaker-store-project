import React from 'react'

export default function ViewAllProduct() {
  return (
    <div><div class="row">
    <div class="col-sm-12">
        {/* <!-- Success message -->
        @if (ViewBag.CreateProductSuccess != null)
        {
            <div class="alert alert-primary" role="alert">
                @ViewBag.CreateProductSuccess
            </div>
        } */}
        <div class="card card-table">
            <div class="card-body">
                <div class="title-header option-title d-sm-flex d-block">
                    <h5>Products List</h5>
                    <div class="right-options">
                        <ul>
                            <li>
                                <a class="btn btn-solid" href='/adminproduct/create'>Add Product</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <form class="theme-form theme-form-2 mega-form" id="form-select-sort" asp-controller="AdminProduct" asp-action="ViewAll" method="GET">
                    <div class="row">
                        <div class="col-md-5">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text h-100">Category</span>
                                </div>
                                <select id="cate-select" class="form-control" asp-for="Category" onchange="selectChangeHandler()">
                                    <option value="0">All</option>
                                    @foreach (var cate in Model.Categories)
                                    {
                                        <option value="@cate.Id">@cate.Name</option>
                                    }
                                </select>
                            </div>
                        </div>
                        <div class="col-md-5">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text h-100">Brand</span>
                                </div>
                                <select class="form-control" asp-for="Brand" onchange="selectChangeHandler()">
                                    <option value="0">All</option>
                                    @foreach (var brand in Model.Brands)
                                    {
                                        <option value="@brand.Id">@brand.Name</option>
                                    }
                                </select>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text h-100">Size</span>
                                </div>
                                <select class="form-control" asp-for="SizeId" onchange="selectChangeHandler()">
                                    <option value="0">All</option>
                                    @foreach (var size in Model.Sizes)
                                    {
                                        <option value="@size.Id">@size.Name</option>
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row pb-3 mt-3">
                        <div class="col-md-6">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text h-100">Order By</span>
                                </div>
                                <select class="form-control" asp-for="OrderBy" onchange="selectChangeHandler()">
                                    <option value="0">Newest</option>
                                    <option value="1">Oldest</option>
                                    <option value="2">Price: High-Low</option>
                                    <option value="3">Price: Low-High</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="input-group">
                                <input type="text" class="form-control" value="@Model.Search" asp-for="Search" placeholder="Search by Name"/>
                                <div class="input-group-append">
                                    <button class="btn btn-primary h-100" type="submit">
                                        <i class="fa fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                {/* @if (Model.TotalCount == 0)
                {
                    <div class="my-5">
                        <h3 class="text-center">No products to be shown</h3>
                    </div>
                }
                else
                { */}
                    <div>
                        <div class="table-responsive">
                            <table class="table all-package theme-table table-product" id="table_id">
                                <thead>
                                    <tr>
                                        <th>Product Image</th>
                                        <th>Product Name</th>
                                        <th>Category</th>
                                        <th>Brand</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                        <th>Option</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {/* @foreach (var item in Model.ProductsPaginated)
                                    { */}
                                        <tr>
                                            <td>
                                                <div class="table-image">
                                                    <img src="@item.Image" class="img-fluid"
                                                 alt=""/>
                                                </div>
                                            </td>

                                            <td><a href='/adminproduct/detail'>@item.Name</a></td>

                                            <td>@item.Category.Name</td>

                                            <td>@item.Brand.Name</td>

                                            <td class="td-price">$@item.Price</td>

                                            {/* <td class="@(item.Active == 1 ? "status-close" : "status-danger")">
                                                <span>@(item.Active == 1 ? "Available" : "Unavailable")</span>
                                            </td>

                                            <td>
                                                <ul>
                                                    <li>
                                                        <a asp-controller="AdminProduct" asp-action="Detail" asp-route-id="@item.Id"
                                                   data-mdb-toggle="tooltip" title="View this Product">
                                                            <i class="ri-eye-line"></i>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a asp-controller="AdminProduct" asp-action="Update" asp-route-id="@item.Id"
                                                   data-mdb-toggle="tooltip" title="Edit this Product">
                                                            <i class="ri-pencil-line"></i>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="javascript:void(0)" data-bs-toggle="modal" data-productid="@item.Id"
                                                   data-bs-target="#exampleModalToggle" onclick="deleteButtonClick(this)"
                                                   data-mdb-toggle="tooltip" title="Change this product status">
                                                            <i class="ri-arrow-left-right-fill"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </td> */}
                                        </tr>
                                    {/* } */}
                                </tbody>
                            </table>
                        </div>

                        {/* <div div="row">
                            @if (Model.TotalPage > 1)
                            {
                                <nav class="mt-4" aria-label="Page navigation">
                                    <ul class="pagination pagination-lg justify-content-end">
                                        <li class="page-item prev" class="@(@Model.Page == 1 ? "disabled" : "")">
                                            <a class="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 @(@Model.Page == 1 ? "active bg-primary" : "")"
                                       asp-action="ViewAll" asp-controller="AdminProduct" asp-route-page="1" asp-route-search="@Model.Search"
                                       asp-route-category="@Model.Category" asp-route-brand="@Model.Brand"
                                       asp-route-sizeid="@Model.SizeId" asp-route-orderby="@Model.OrderBy">First</a>
                                        </li>

                                        @foreach (var Page in Model.PageNumbers)
                                        {
                                            <li class="page-item" class="@(@Model.Page == Page ? "disabled" : "")">
                                                <a class="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 @(@Model.Page == Page ? "active bg-primary" : "")"
                                       asp-action="ViewAll" asp-controller="AdminProduct" asp-route-page="@Page" asp-route-search="@Model.Search"
                                       asp-route-category="@Model.Category" asp-route-brand="@Model.Brand"
                                       asp-route-sizeid="@Model.SizeId" asp-route-orderby="@Model.OrderBy">@Page</a>
                                            </li>
                                        }

                                        <li class="page-item next" class="@(@Model.Page == Model.TotalPage ? "disabled" : "")">
                                            <a class="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 @(@Model.Page == Model.TotalPage ? "active bg-primary" : "")"
                                       asp-action="ViewAll" asp-controller="AdminProduct" asp-route-page="@Model.TotalPage" asp-route-search="@Model.Search"
                                       asp-route-category="@Model.Category" asp-route-brand="@Model.Brand"
                                       asp-route-sizeid="@Model.SizeId" asp-route-orderby="@Model.OrderBy">Last</a>
                                        </li>
                                    </ul>
                                </nav>
                            }
                        </div> */}
                    </div>
                {/* } */}
            </div>
        </div>
    </div>
</div>

<div class="modal fade theme-modal remove-coupon" id="exampleModalToggle" aria-hidden="true" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header d-block text-center">
                <h5 class="modal-title w-100" id="exampleModalLabel22">Confirmation</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="remove-box">
                    <p>
                        Are you sure to change this product's status?
                    </p>
                </div>
            </div>
            <div class="modal-footer">
                <form asp-action="ChangeStatus" asp-controller="AdminProduct" method="Get">
                    <input type="hidden" id="product-id-field" name="id" value="" />
                    <button type="submit" class="btn btn-animation btn-md fw-bold">Change</button>
                </form>
            </div>
        </div>
    </div>
</div>
</div>
  )
}
