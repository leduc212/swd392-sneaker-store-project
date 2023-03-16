import React, { useState } from "react";
import axios from "axios";

export default function Register() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const baseURL = "https://localhost:44320/api/User/Register";

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleChangeName = (event) => {
    const value = event.target.value;
    setFullName(value);
  };

  const handleChangePhone = (event) => {
    const value = event.target.value;
    setPhone(value);
  };

  const handleChangeEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handleChangePassword = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleChangeConfirmPassword = (event) => {
    const value = event.target.value;
    setConfirmPassword(value);
  };

  const handleCheckClick = (event) => {
    setChecked(!checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const registeredUser = {
      fullName: fullName,
      phone: phone,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
    axios
      .post(baseURL, registeredUser)
      .then((response) => {
        setSuccess(true);
        setError(false);
      })
      .catch((error) => {
        setError(true);
        setSuccess(false);
      });
  };

  return (
    <div>
      <section className="text-center text-lg-start">
        <div className="container py-4">
          <div className="row g-0 align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div
                className="card"
                style={{
                  zIndex: "5",
                  marginRight: "-50px",
                  background: "hsla(0, 0%, 100%, 0.55)",
                  backdropFilter: " blur(30px)",
                }}
              >
                <div className="card-body p-5 shadow-5 text-center">
                  <h2 className="fw-bold mb-3">Sign up</h2>
                  {error && (
                    <div
                      class="d-flex justify-content-center text-danger mb-4"
                      role="alert"
                    >
                      Can't registered this account
                    </div>
                  )}

                  {success && (
                    <div
                      class="d-flex justify-content-center text-success mb-4"
                      role="alert"
                    >
                      Account registered successfully
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div
                          className="form-group"
                          style={{ textAlign: "left" }}
                        >
                          <label className="form-label">Full Name</label>
                          <input
                            type="text"
                            onChange={handleChangeName}
                            className="form-control"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div
                          className="form-group"
                          style={{ textAlign: "left" }}
                        >
                          <label className="form-label">Phone number</label>
                          <input
                            type="text"
                            onChange={handleChangePhone}
                            className="form-control"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      className="form-group mb-4"
                      style={{ textAlign: "left" }}
                    >
                      <label className="form-label">Email address</label>
                      <input
                        type="email"
                        onChange={handleChangeEmail}
                        className="form-control"
                        required
                      />
                    </div>

                    <div
                      className="form-group mb-4"
                      style={{ textAlign: "left" }}
                    >
                      <label className="form-label">Password</label>
                      <input
                        type="password"
                        onChange={handleChangePassword}
                        className="form-control"
                        minlength="8"
                        required
                      />
                    </div>

                    <div
                      className="form-group mb-4"
                      style={{ textAlign: "left" }}
                    >
                      <label className="form-label">Confirm Password</label>
                      <input
                        type="password"
                        onChange={handleChangeConfirmPassword}
                        className="form-control"
                        minlength="8"
                        required
                      />
                    </div>

                    <div className="form-check d-flex justify-content-center mb-4">
                      <input
                        className="form-check-input me-2"
                        id="confirm-check-box"
                        type="checkbox"
                        onClick={handleCheckClick}
                        value=""
                      />
                      <label className="form-check-label">
                        By checking this box, you are agreeing to our terms of
                        service
                      </label>
                    </div>

                    <button
                      type="submit"
                      id="submit-button"
                      className="btn btn-primary btn-lg btn-block mb-4"
                      style={{ backgroundColor: " #59ab6e" }}
                      disabled={!checked}
                    >
                      Sign up
                    </button>
                    <p className="mb-5 pb-lg-2">
                      Already have an account?{" "}
                      <a href="/login" style={{ color: "#59ab6e" }}>
                        Login here
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mb-5 mb-lg-0">
              <img
                src="./img/register_banner.jpg"
                className="w-100 rounded-4 shadow-4"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
