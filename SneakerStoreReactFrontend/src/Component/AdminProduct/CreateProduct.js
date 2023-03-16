import React from 'react'

export default function CreateProduct() {
  return (
    <div>
        <div class="row">
    <div class="col-12">
        <div class="row">
            <div class="col-sm-8 m-auto">
                <form class="theme-form theme-form-2 mega-form" asp-action="Create" asp-controller="AdminProduct" method="post" enctype="multipart/form-data">
                    {/* <!-- Fail message -->
                    @if (ViewBag.SizeEmptyMessage != null)
                    {
                        <div class="alert alert-warning" role="alert">
                            @ViewBag.SizeEmptyMessage
                        </div>
                    } */}
                    <div class="card">
                        <div class="card-body">
                            <div class="card-header-2">
                                <h5>Product Information</h5>
                            </div>

                            <div class="mb-4 row align-items-center">
                                <label class="form-label-title col-sm-3 mb-0">
                                    Product Name
                                </label>
                                <div class="col-sm-9">
                                    <input class="form-control" type="text" asp-for="Name" placeholder="Product Name" required/>
                                </div>
                            </div>

                            <div class="mb-4 row align-items-center">
                                <label class="col-sm-3 col-form-label form-label-title">
                                    Category
                                </label>
                                <div class="col-sm-9">
                                    <select class="js-example-basic-single w-100" asp-for="CategoryId">
                                        <option disabled>Choose a Category</option>
                                        {/* @foreach (var cate in Model.CategoryList)
                                        {
                                            <option value="@cate.Id">@cate.Name</option>
                                        } */}
                                    </select>
                                </div>
                            </div>

                            <div class="mb-4 row align-items-center">
                                <label class="col-sm-3 col-form-label form-label-title">
                                    Brand
                                </label>
                                <div class="col-sm-9">
                                    <select class="js-example-basic-single w-100" asp-for="BrandId">
                                        <option disabled>Choose a Brand</option>
                                        {/* @foreach (var brand in Model.BrandList)
                                        {
                                            <option value="@brand.Id">@brand.Name</option>
                                        } */}
                                    </select>
                                </div>
                            </div>

                            <div class="mb-4 row align-items-center">
                                <label class="col-sm-3 col-form-label form-label-title">
                                    Size
                                </label>
                                <div class="col-sm-9 row">
                                    {/* @foreach (var size in Model.SizeList)
                                    { */}
                                        <div class="form-check col-sm-2">
                                            <input class="form-check-input" type="checkbox" value="@size.Id" id="@size.Id" name="Sizes"/>
                                            <label class="form-check-label" for="@size.Id">
                                                @size.Name
                                            </label>
                                        </div>
                                     {/* } */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-body">
                            <div class="card-header-2">
                                <h5>Description</h5>
                            </div>

                            <div class="row">
                                <div class="col-12">
                                    <div class="row">
                                        <label class="form-label-title col-sm-3 mb-0">
                                            Product Description
                                        </label>
                                        <div class="col-sm-9">
                                            <textarea class="form-control textarea resize-ta" asp-for="Description" required></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div class="card">
                        <div class="card-body">
                            <div class="card-header-2">
                                <h5>Product Images</h5>
                            </div>
                            <div class="mb-4 row align-items-center">
                                <input type="hidden" asp-for="Image" value="@(!string.IsNullOrEmpty(Model.Image) ? Model.Image : "https://firebasestorage.googleapis.com/v0/b/sneaker-271f9.appspot.com/o/default.jpg?alt=media&token=6ae85766-edea-420b-a689-238077cc6ddb")">
                                <label class="col-sm-3 col-form-label form-label-title">Images</label>
                                <div class="col-sm-9">
                                    <input class="form-control" type="file" asp-for="UploadImage" onchange="chooseFile(this)" accept="image/*">
                                </div>
                            </div>
                            <div>
                                <img id="image-show" alt="" src="@(!string.IsNullOrEmpty(Model.Image) ? Model.Image : "https://firebasestorage.googleapis.com/v0/b/sneaker-271f9.appspot.com/o/default.jpg?alt=media&token=6ae85766-edea-420b-a689-238077cc6ddb")"
                                     class="img-fluid img-thumbnail rounded mx-auto d-block mt-3"
                                     style="width: 300px;" />
                            </div>
                        </div>
                    </div> */}

                    <div class="card">
                        <div class="card-body">
                            <div class="card-header-2">
                                <h5>Product Price</h5>
                            </div>
                            <div class="mb-4 row align-items-center">
                                <label class="col-sm-3 form-label-title">Price</label>
                                <div class="col-sm-9">
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text h-100">$</span>
                                        </div>
                                        <input class="form-control" type="number" required min="0" asp-for="Price"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="btn ms-auto theme-bg-color text-white">Add Product</button>
                </form>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}
