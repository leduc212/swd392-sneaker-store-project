import React from 'react'

export default function DetailOrder() {
  return (
    <div>
        <div class="row">
    <div class="col-sm-12">
        <div class="card">
            <div class="card-body">
                <div class="title-header title-header-block package-card">
                    <div class="d-flex align-items-center justify-content-between">
                        <div class="d-flex align-items-center">
                            <a href='/adminorder/viewall' class="text-dark mr-4" data-mdb-toggle="tooltip" title="Back to Order List"><i class="fa fa-fw fa-chevron-left"></i></a>
                            <h5 class="align-middle">
                                Order #@Model.Id  <span class="fs-6 p-1 rounded-2 text-white">Order @status</span>
                            </h5>
                        </div>
                        {/* @if ((Model.Status == 1))
                        {
                            <div class="d-flex gap-3">
                                <button data-bs-toggle="modal" data-bs-target="#approveModal" class="btn btn-primary">
                                    Approve order
                                </button>
                                <button data-bs-toggle="modal" data-bs-target="#rejectModal" class="btn btn-danger">
                                    Reject order
                                </button>
                            </div>

                        }
                        @if ((Model.Status == 2))
                        {
                            <button data-bs-toggle="modal" data-bs-target="#completeModal" class="btn btn-primary">
                                Complete order
                            </button>
                        } */}
                    </div>
                    <div class="card-order-section">
                        <ul>
                            <li>Order at @Model.CreatedAt.Value.ToString("MMMM dd, yyyy")</li>
                            <li>Total $@Model.TotalPrice</li>
                        </ul>
                    </div>
                </div>
                <div class="bg-inner cart-section order-details-table">
                    <div class="row g-4">
                        <div class="col-xl-8">
                            <div class="table-responsive table-details">
                                <table class="table cart-table table-borderless">
                                    <thead>
                                        <tr>
                                            <th colspan="7">Items</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {/* @foreach (var item in Model.OrderItems)
                                        { */}
                                            <tr class="table-order">
                                                <td>
                                                    <img src="@item.Product.Image"
                                                     class="img-fluid blur-up lazyload" alt=""/>
                                                </td>
                                                <td>
                                                    <h5><a class="text-wrap text-dark" href='/adminproduct/detail'>@item.Product.Name</a></h5>
                                                </td>
                                                <td>
                                                    <p>Category</p>
                                                    <h5>@item.Product.Category.Name</h5>
                                                </td>
                                                <td>
                                                    <p>Brand</p>
                                                    <h5>@item.Product.Brand.Name</h5>
                                                </td>
                                                <td>
                                                    <p>Quantity</p>
                                                    <h5>@item.Quantity</h5>
                                                </td>
                                                <td>
                                                    <p>Unit Price</p>
                                                    <h5>$@item.Product.Price</h5>
                                                </td>
                                                <td>
                                                    <p>Total Price</p>
                                                    <h5>$@(item.Quantity * item.Product.Price)</h5>
                                                </td>
                                            </tr>
                                        {/* } */}
                                    </tbody>

                                    <tfoot>
                                        <tr class="table-order">
                                            <td colspan="3">
                                                <h5>Subtotal :</h5>
                                            </td>
                                            <td>
                                                <h4>$@Model.TotalPrice</h4>
                                            </td>
                                        </tr>

                                        <tr class="table-order">
                                            <td colspan="3">
                                                <h5>Shipping :</h5>
                                            </td>
                                            <td>
                                                <h4>Free of Charge</h4>
                                            </td>
                                        </tr>

                                        <tr class="table-order">
                                            <td colspan="3">
                                                <h4 class="theme-color fw-bold">Total Price :</h4>
                                            </td>
                                            <td>
                                                <h4 class="theme-color fw-bold">$@Model.TotalPrice</h4>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>

                        <div class="col-xl-4">
                            <div class="order-success">
                                <div class="row g-4">
                                    <h4>Summary</h4>
                                    <ul class="order-details">
                                        <li>Order ID: #@Model.Id</li>
                                        <li>Order Status: @status</li>
                                        <li>Order Date: @Model.CreatedAt.Value.ToString("MMMM dd, yyyy")</li>
                                        <li>Order Total: $@Model.TotalPrice</li>
                                    </ul>

                                    <h4>Shipping address</h4>
                                    <ul class="order-details">
                                        <li>Receiver: @Model.User.Name</li>
                                        <li>Email: @Model.User.Email</li>
                                        <li>Phone: @Model.Phone</li>
                                        <li>Address: @Model.Address</li>
                                    </ul>

                                    <div class="payment-mode">
                                        <h4>Payment Method</h4>
                                        <p>
                                            @Model.Payment
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="modal fade theme-modal remove-coupon" id="rejectModal" aria-hidden="true" tabindex="-1">
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
                        Are you sure to reject this order?
                    </p>
                </div>
            </div>
            <div class="modal-footer">
                <form asp-action="Reject" asp-controller="AdminOrder" method="Get">
                    <input type="hidden" name="id" value="@Model.Id" />
                    <button type="submit" class="btn btn-animation btn-md fw-bold">Reject</button>
                </form>
            </div>
        </div>
    </div>
</div>

<div class="modal fade theme-modal remove-coupon" id="approveModal" aria-hidden="true" tabindex="-1">
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
                        Are you sure to approve this order?
                    </p>
                </div>
            </div>
            <div class="modal-footer">
                <form asp-action="Approve" asp-controller="AdminOrder" method="Get">
                    <input type="hidden" name="id" value="@Model.Id" />
                    <button type="submit" class="btn btn-animation btn-md fw-bold">Approve</button>
                </form>
            </div>
        </div>
    </div>
</div>

<div class="modal fade theme-modal remove-coupon" id="completeModal" aria-hidden="true" tabindex="-1">
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
                        Are you sure to complete this order?
                    </p>
                </div>
            </div>
            <div class="modal-footer">
                <form asp-action="Complete" asp-controller="AdminOrder" method="Get">
                    <input type="hidden" name="id" value="@Model.Id" />
                    <button type="submit" class="btn btn-animation btn-md fw-bold">Complete</button>
                </form>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}
