import React from 'react'

export default function Index() {
  return (
    <div>
        <div class="row">
    <div class="col-sm-6 col-xxl-3 col-lg-6">
        <div class="main-tiles border-5 border-0  card-hover card o-hidden">
            <div class="custome-1-bg b-r-4 card-body">
                <div class="media align-items-center static-top-widget">
                    <div class="media-body p-0">
                        <span class="m-0">Pending Orders</span>
                        <h4 class="mb-0 counter">
                            @Model.PendingOrderCount
                        </h4>
                    </div>
                    <div class="align-self-center text-center">
                        <i class="ri-database-2-line"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="col-sm-6 col-xxl-3 col-lg-6">
        <div class="main-tiles border-5 card-hover border-0 card o-hidden">
            <div class="custome-2-bg b-r-4 card-body">
                <div class="media static-top-widget">
                    <div class="media-body p-0">
                        <span class="m-0">Total Orders</span>
                        <h4 class="mb-0 counter">
                            @Model.TotalOrderCount
                        </h4>
                    </div>
                    <div class="align-self-center text-center">
                        <i class="ri-shopping-bag-3-line"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="col-sm-6 col-xxl-3 col-lg-6">
        <div class="main-tiles border-5 card-hover border-0  card o-hidden">
            <div class="custome-3-bg b-r-4 card-body">
                <div class="media static-top-widget">
                    <div class="media-body p-0">
                        <span class="m-0">Total Products</span>
                        <h4 class="mb-0 counter">
                            @Model.TotalProductCount
                            <a href='/admin/product' class="badge badge-light-secondary grow">
                                ADD NEW
                            </a>
                        </h4>
                    </div>

                    <div class="align-self-center text-center">
                        <i class="ri-chat-3-line"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="col-sm-6 col-xxl-3 col-lg-6">
        <div class="main-tiles border-5 card-hover border-0 card o-hidden">
            <div class="custome-4-bg b-r-4 card-body">
                <div class="media static-top-widget">
                    <div class="media-body p-0">
                        <span class="m-0">Total Customers</span>
                        <h4 class="mb-0 counter">
                            @Model.TotalCustomerCount
                        </h4>
                    </div>

                    <div class="align-self-center text-center">
                        <i class="ri-user-add-line"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="col-xl-6 col-md-12">
        <div class="card o-hidden card-hover">
            <div class="card-header card-header-top card-header--2 px-0 pt-0">
                <div class="card-header-title">
                    <h4>Best Selling Product</h4>
                </div>
            </div>

            <div class="card-body p-0">
                <div>
                    <div class="table-responsive">
                        <table class="best-selling-table w-image
                                            w-image
                                            w-image table border-0">
                            <tbody>
                                @foreach (var product in Model.BestProducts)
                                {
                                    <tr>
                                        <td>
                                            <div class="best-product-box">
                                                <div class="product-image">
                                                    <img src="@product.Image"
                                                     class="img-fluid" alt=""/>
                                                </div>
                                                <div class="product-name">
                                                    <a class="text-dark" href='/admin/product'>@product.Name</a>
                                                    <h6>@(product.CreatedAt != null ? product.CreatedAt.Value.ToString("MMMM dd, yyyy") : "")</h6>
                                                </div>
                                            </div>
                                        </td>

                                        <td>
                                            <div class="product-detail-box">
                                                <h6>Price</h6>
                                                <h5>$@product.Price</h5>
                                            </div>
                                        </td>

                                        <td>
                                            <div class="product-detail-box">
                                                <h6>Category</h6>
                                                <h5>@product.Category.Name</h5>
                                            </div>
                                        </td>

                                        <td>
                                            <div class="product-detail-box">
                                                <h6>Brand</h6>
                                                <h5>@product.Brand.Name</h5>
                                            </div>
                                        </td>

                                        <td>
                                            <div class="product-detail-box">
                                                <h6>Status</h6>
                                                <h5>@(product.Active == 1 ? "Available" : "Unavailable")</h5>
                                            </div>
                                        </td>
                                    </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="col-xl-6">
        <div class="card o-hidden card-hover">
            <div class="card-header card-header-top card-header--2 px-0 pt-0">
                <div class="card-header-title">
                    <h4>Recent Orders</h4>
                </div>
            </div>

            <div class="card-body p-0">
                <div>
                    <div class="table-responsive">
                        <table class="best-selling-table table border-0">
                            <tbody>
                                {/* @foreach (var order in Model.RecentOrders)
                                {
                                    string status = "Pending";
                                    switch (order.Status)
                                    {
                                        case 1:
                                            status = "Pending";
                                            break;
                                        case 2:
                                            status = "Processing";
                                            break;
                                        case 3:
                                            status = "Rejected";
                                            break;
                                        case 4:
                                            status = "Completed";
                                            break;
                                        case 5:
                                            status = "Cancelled";
                                            break;
                                    } */}
                                    <tr>
                                        <td>
                                            <div class="best-product-box">
                                                <div class="product-name">
                                                    <a class="text-dark" href='/admin/order'>#@order.Id</a>
                                                </div>
                                            </div>
                                        </td>


                                        <td>
                                            <div class="product-detail-box">
                                                <h6>Order Date</h6>
                                                <h5>@order.CreatedAt.Value.ToString("MMMM dd, yyyy")</h5>
                                            </div>
                                        </td>

                                        <td>
                                            <div class="product-detail-box">
                                                <h6>Total Price</h6>
                                                <h5>$@order.TotalPrice</h5>
                                            </div>
                                        </td>

                                        <td>
                                            <div class="product-detail-box">
                                                <h6>Order Status</h6>
                                                <h5>@status</h5>
                                            </div>
                                        </td>

                                        <td>
                                            <div class="product-detail-box">
                                                <h6>Payment</h6>
                                                <h5 class="theme-color">@order.Payment</h5>
                                            </div>
                                        </td>
                                    </tr>
                                {/* } */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}
