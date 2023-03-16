import React from 'react'

export default function ViewAllUser() {
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
                    <h5>All Users</h5>
                    <form class="theme-form theme-form-2 mega-form" id="form-select-sort" asp-controller="AdminUser" asp-action="ViewAll" method="GET">
                        <div class="d-flex justify-content-end">
                            <div class="input-group">
                                <input type="text" class="form-control" value="@Model.Search" asp-for="Search" placeholder="Search by Email"/>
                                <div class="input-group-append">
                                    <button class="btn btn-primary h-100" type="submit">
                                        <i class="fa fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                {/* @if (Model.UserList.Count() == 0)
                {
                    <div class="my-5">
                        <h3 class="text-center">No users to be shown</h3>
                    </div>
                }
                else
                { */}
                    <div class="table-responsive table-product">
                        <table class="table all-package theme-table" id="table_id">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Role</th>
                                    <th>Status</th>
                                    <th>Option</th>
                                </tr>
                            </thead>

                            <tbody>
                                {/* @foreach (var item in Model.UserList)
                                { */}
                                    <tr>
                                        <td class="text-center">@item.Id</td>

                                        <td>@item.Name</td>

                                        <td>@item.Email</td>

                                        <td>@item.Phone</td>

                                        <td>@(item.Admin == 1 ? "Admin" : "Customer")</td>

                                        {/* <td class="@(item.Active == 1 ? "status-close" : "status-danger")">
                                            <span>@(item.Active == 1 ? "Active" : "Inactive")</span>
                                        </td>

                                        <td>
                                            @if (item.Admin != 1)
                                            {
                                                <ul>
                                                    <li>
                                                        <a href="javascript:void(0)" data-bs-toggle="modal" data-userid="@item.Id"
                                               data-bs-target="#exampleModalToggle" onclick="deleteButtonClick(this)"
                                               data-mdb-toggle="tooltip" title="Change this User status">
                                                            <i class="ri-arrow-left-right-fill"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            }
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
                                   asp-action="ViewAll" asp-controller="AdminUser" asp-route-page="1"
                                   asp-route-search="@Model.Search">First</a>
                                    </li>

                                    @foreach (var Page in Model.PageNumbers)
                                    {
                                        <li class="page-item" class="@(@Model.Page == Page ? "disabled" : "")">
                                            <a class="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 @(@Model.Page == Page ? "active bg-primary" : "")"
                                   asp-action="ViewAll" asp-controller="AdminUser" asp-route-page="@Page"
                                   asp-route-search="@Model.Search">@Page</a>
                                        </li>
                                    }

                                    <li class="page-item next" class="@(@Model.Page == Model.TotalPage ? "disabled" : "")">
                                        <a class="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 @(@Model.Page == Model.TotalPage ? "active bg-primary" : "")"
                                   asp-action="ViewAll" asp-controller="AdminUser" asp-route-page="@Model.TotalPage"
                                   asp-route-search="@Model.Search">Last</a>
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
                        Are you sure to change this user's status?
                    </p>
                </div>
            </div>
            <div class="modal-footer">
                <form asp-action="Update" asp-controller="AdminUser" method="Get">
                    <input type="hidden" id="user-id-field" name="id" value="" />
                    <button type="submit" class="btn btn-animation btn-md fw-bold">Change</button>
                </form>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}
