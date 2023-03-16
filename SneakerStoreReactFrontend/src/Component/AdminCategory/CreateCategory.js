import React from 'react'

export default function CreateCategory() {
  return (
    <div>
        <div class="row">
    <div class="col-xxl-8 col-lg-10 m-auto">
        <div class="card">
            <div class="card-body">
                <div class="card-header-2">
                    <h5>Add Category</h5>
                </div>

                <form class="theme-form theme-form-2 mega-form" method="POST" asp-action="Create" asp-controller="AdminCategory">
                    <div class="mb-4 row align-items-center">
                        <label class="form-label-title col-sm-3 mb-0">
                            Category Name
                        </label>
                        <div class="col-sm-9">
                            <input class="form-control" type="text"
                                   placeholder="Category Name" asp-for="Name" required/>
                        </div>
                    </div>

                    <button type="submit" class="btn ms-auto theme-bg-color text-white">Add Category</button>
                </form>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}
