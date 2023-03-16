import React from 'react'

export default function ChangePassword() {
  return (
    <div>
        <section class="vh-100 bg-image" style={{backgroundImage: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp'}} >
    <div class="mask d-flex align-items-center h-100 gradient-custom-3">
        <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                    <div class="card" style={{borderRadius:'15px'}}>
                        <div class="card-body p-5">
                            <h2 class="text-uppercase text-center mb-5">Change password</h2>
                            {/* @if (ViewBag.UpdateFailMessage != null)
                            {
                                <div class="d-flex justify-content-center text-danger mb-4" role="alert">
                                    @ViewBag.UpdateFailMessage
                                </div>
                            }
                            <!-- Success message -->
                            @if (ViewBag.UpdateSuccessMessage != null)
                            {
                                <div class="d-flex justify-content-center text-success mb-4" role="alert">
                                    @ViewBag.UpdateSuccessMessage
                                </div>
                            } */}
                            <form asp-action="ChangePassword" asp-controller="Home" method="POST">
                                <input type="hidden" value="@Model.Id" asp-for="Id" />

                                <div class="form-outline mb-4">
                                    <input type="email" value="@Model.Email" id="email" class="form-control form-control-lg" required readonly />
                                    <label class="form-label" for="email">Email</label>
                                </div>

                                <div class="form-outline mb-4">
                                    <input type="password" id="oldPassword" class="form-control form-control-lg" asp-for="OldPassword" min="8" required />
                                    <label class="form-label" for="oldPassword">Current Password</label>
                                </div>

                                <div class="form-outline mb-4">
                                    <input type="password" id="newPassword" class="form-control form-control-lg" asp-for="NewPassword" min="8" required />
                                    <label class="form-label" for="newPassword">New Password</label>
                                </div>

                                <div class="form-outline mb-4">
                                    <input type="password" id="confirmPassword" class="form-control form-control-lg" asp-for="ConfirmPassword" min="8" required />
                                    <label class="form-label" for="confirmPassword">Confirm New Password</label>
                                </div>

                                <div class="d-flex justify-content-center">
                                    <button type="submit"
                                            class="btn btn-success btn-block btn-lg text-body text-white">
                                        Change Password
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    </div>
  )
}
