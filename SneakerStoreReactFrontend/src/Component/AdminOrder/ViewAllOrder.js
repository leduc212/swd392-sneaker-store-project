import React from 'react'

export default function ViewAllOrder() {
  return (
    <div>
        <div class="row">
    <div class="col-sm-12">
        {/* <!-- Success message -->
        @if (ViewBag.ChangeStatusSuccess != null)
        {
            <div class="alert alert-primary" role="alert">
                @ViewBag.ChangeStatusSuccess
            </div>
        } */}
        <div class="card card-table">
            <div class="card-body">
                <div class="title-header option-title d-flex justify-content-between">
                    <h5>All Orders</h5>
                    <form class="theme-form theme-form-2 mega-form" id="select-form" asp-controller="AdminOrder" asp-action="ViewAll" method="GET">
                        <div class="d-flex justify-content-end gap-3">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text h-100">Status</span>
                                </div>
                                <select class="form-control" id="selectList" asp-for="Status" style={{width:'12em'}} onchange="selectChangeHandler()">
                                    <option value="" disabled>Choose your option</option>
                                    <option value="0">All</option>
                                    <option value="1">Pending</option>
                                    <option value="2">Processing</option>
                                    <option value="3">Rejected</option>
                                    <option value="4">Completed</option>
                                    <option value="5">Cancelled</option>
                                </select>
                            </div>
                            <div class="input-group">
                                <input type="text" class="form-control" value="@Model.Search" asp-for="Search" placeholder="Search by Id"/>
                                <div class="input-group-append">
                                    <button class="btn btn-primary h-100" type="submit">
                                        <i class="fa fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                {/* @if (Model.OrdersPaginated.Count() == 0)
                {
                    <div class="my-5">
                        <h3 class="text-center">No orders to be shown</h3>
                    </div>
                }
                else
                { */}
                    <div class="table-responsive table-product">
                        <table class="table all-package theme-table" id="table_id">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Order Date</th>
                                    <th>Contact Email</th>
                                    <th>Price</th>
                                    <th>Status</th>
                                    <th>Option</th>
                                </tr>
                            </thead>

                            <tbody>
                                {/* @foreach (var item in Model.OrdersPaginated)
                                {
                                    string status = "Pending";
                                    string statusColor = "background-color: #ffc107";
                                    switch (item.Status)
                                    {
                                        case 1:
                                            status = "Pending";
                                            statusColor = "background-color: #ffc107";
                                            break;
                                        case 2:
                                            status = "Processing";
                                            statusColor = "background-color: #17a2b8";
                                            break;
                                        case 3:
                                            status = "Rejected";
                                            statusColor = "background-color: #dc3545";
                                            break;
                                        case 4:
                                            status = "Completed";
                                            statusColor = "background-color: #28a745";
                                            break;
                                        case 5:
                                            status = "Cancelled";
                                            statusColor = "background-color: #dc3545";
                                            break;
                                    } */}
                                    <tr>

                                        <td class="text-center">Order #@item.Id</td>

                                        <td>@item.CreatedAt.Value.ToString("MMMM dd, yyyy")</td>

                                        <td>@item.User.Email</td>

                                        <td class="td-price">$@item.TotalPrice</td>

                                        <td>
                                            <span class="mx-auto py-1 font-weight-bold w-75 fs-6 text-center rounded-2 text-white">@status</span>
                                        </td>

                                        <td>
                                            <ul>
                                                <li>
                                                    <a href='/adminorder/detail'
                                               data-mdb-toggle="tooltip" title="View this Order">
                                                        <i class="ri-eye-line"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </td>
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
                                   asp-action="ViewAll" asp-controller="AdminOrder" asp-route-page="1"
                                   asp-route-status="@Model.Status" asp-route-search="@Model.Search">First</a>
                                    </li>

                                    @foreach (var Page in Model.PageNumbers)
                                    {
                                        <li class="page-item" class="@(@Model.Page == Page ? "disabled" : "")">
                                            <a class="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 @(@Model.Page == Page ? "active bg-primary" : "")"
                                   asp-action="ViewAll" asp-controller="AdminOrder" asp-route-page="@Page"
                                   asp-route-status="@Model.Status" asp-route-search="@Model.Search">@Page</a>
                                        </li>
                                    }

                                    <li class="page-item next" class="@(@Model.Page == Model.TotalPage ? "disabled" : "")">
                                        <a class="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 @(@Model.Page == Model.TotalPage ? "active bg-primary" : "")"
                                   asp-action="ViewAll" asp-controller="AdminOrder" asp-route-page="@Model.TotalPage"
                                   asp-route-status="@Model.Status" asp-route-search="@Model.Search">Last</a>
                                    </li>
                                </ul>
                            </nav>
                        }
                    </div>
                } */}
            </div>
        </div>
    </div>
</div>
    </div>
  )
}
