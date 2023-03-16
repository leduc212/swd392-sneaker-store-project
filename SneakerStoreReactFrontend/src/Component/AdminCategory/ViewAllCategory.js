import React from 'react'

export default function ViewAllCategory() {
  return (
    <div>
        <div class="row">
    <div class="col-sm-12">
        {/* <!-- Success message -->
        @if (ViewBag.CreateCategorySuccess != null)
        {
            <div class="alert alert-primary" role="alert">
                @ViewBag.CreateCategorySuccess
            </div>
        } */}
        <div class="card card-table">
            <div class="card-body">
                <div class="title-header option-title">
                    <h5>All Categories</h5>
                    <form class="d-inline-flex">
                        <a href='/admincategory/create' class="align-items-center btn btn-theme d-flex">
                            <i data-feather="plus-square"></i>Add New
                        </a>
                    </form>
                </div>
                {/* @if (Model.Count() == 0)
                {
                    <div class="my-5">
                        <h3 class="text-center">No categories to be shown</h3>
                    </div>
                }
                else
                { */}
                    <div class="table-responsive category-table">
                        <table class="table all-package theme-table" id="table_id">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Option</th>
                                </tr>
                            </thead>

                            <tbody>
                                {/* @foreach (var item in Model)
                                { */}
                                    <tr>
                                        <td>@item.Id</td>
                                        <td>@item.Name</td>
                                        <td>
                                            <ul>
                                                <li>
                                                    <a href='/admincategory/update'
                                               data-mdb-toggle="tooltip" title="Edit this category">
                                                        <i class="ri-pencil-line"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                 {/* } */}
                            </tbody>
                        </table>
                    </div>
                 {/* } */}
            </div>
        </div>
    </div>
</div>
    </div>
  )
}
