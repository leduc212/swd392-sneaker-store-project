import React from 'react'

export default function UpdateCategory() {
  return (
    <div>
        <div class="row">
    <div class="col-xxl-8 col-lg-10 m-auto">
        <div class="card">
            <div class="card-body">
                <div class="card-header-2">
                    <h5>Update Category</h5>
                </div>

                <form class="theme-form theme-form-2 mega-form" method="POST" asp-action="Update" asp-controller="AdminCategory">
                    <div class="mb-4 row align-items-center">
                        <label class="form-label-title col-sm-3 mb-0">
                            Category ID
                        </label>
                        <div class="col-sm-9">
                            <input class="form-control" type="text"
                                   placeholder="Category Name" asp-for="Id" value="@Model.Id" readonly/>
                        </div>
                    </div>
                    <div class="mb-4 row align-items-center">
                        <label class="form-label-title col-sm-3 mb-0">
                            Category Name
                        </label>
                        <div class="col-sm-9">
                            <input class="form-control" type="text"
                                   placeholder="Category Name" asp-for="Name" value="@Model.Name" required/>
                        </div>
                    </div>

                    <button type="submit" class="btn ms-auto theme-bg-color text-white">Update Category</button>
                </form>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}
