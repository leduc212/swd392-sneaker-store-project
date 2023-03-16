import React from 'react'

export default function DetailProduct() {
  return (
    <div>
        <section>
    <div class="row">

        <div class="col-lg-7 mt-3">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                        <div class="d-flex align-items-center">
                            <a href='/adminproduct/viewall' class="text-dark mr-4" data-mdb-toggle="tooltip" title="Back to Products"><i class="fa fa-fw fa-chevron-left"></i></a>
                            <h2 class="mb-2">@Model.Name</h2>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <a href='/adminproduct/update'
                                       data-mdb-toggle="tooltip" title="Edit this product">
                                        <i class="ri-pencil-line"></i>
                                    </a>
                                </li>

                                <li>
                                    {/* <a href="javascript:void(0)" data-bs-toggle="modal" data-productid="@Model.Id"
                                       data-bs-target="#exampleModalToggle" onclick="deleteButtonClick(this)"
                                       data-mdb-toggle="tooltip" title="Change this product status">
                                        <i class="ri-arrow-left-right-fill"></i>
                                    </a> */}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <p class="h3 py-2">$@Model.Price</p>
                    <ul class="list-inline mb-2">
                        <li class="list-inline-item">
                            <h4>Brand:</h4>
                        </li>
                        <li class="list-inline-item mb-2">
                            <h4 class="text-muted"><strong>@Model.Brand.Name</strong></h4>
                        </li>
                    </ul>

                    <ul class="list-inline mb-2">
                        <li class="list-inline-item">
                            <h4>Category:</h4>
                        </li>
                        <li class="list-inline-item mb-2">
                            <h4 class="text-muted"><strong>@Model.Category.Name</strong></h4>
                        </li>
                    </ul>

                    <ul class="list-inline mb-2">
                        <li class="list-inline-item">
                            <h4>Status:</h4>
                        </li>
                        <li class="list-inline-item mb-2">
                            <h4 class="text-muted"><strong>@(Model.Active == 1 ? "Available" : "Unavailable")</strong></h4>
                        </li>
                    </ul>

                    <h4 class="mb-2">Description:</h4>
                    <h4 class="mb-4">@Model.Description</h4>
                    <div class="row">
                        <div class="col-auto mt-2">
                            <h4>Size</h4>
                            <ul class="list-inline">
                                @foreach (var item in Model.ProductSizes)
                                {
                                    <li class="list-inline-item mt-2"><span style={{width:'8rem'}} class="btn btn-primary btn-size" data-id="@item.SizeId">@item.Size.Name</span></li>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-5 mt-3">
            <div class="card mb-3">
                <img class="card-img img-fluid" src="@Model.Image" alt="" id="product-detail"/>
            </div>
        </div>
    </div>
</section>

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
                    <input type="hidden" id="product-id-field" name="id" value="@Model.Id" />
                    <button type="submit" class="btn btn-animation btn-md fw-bold">Change</button>
                </form>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}
