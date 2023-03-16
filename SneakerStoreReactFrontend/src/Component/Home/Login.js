import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const baseURL = "https://localhost:44320/api/User/Login";
  const navigate = useNavigate();

  const [error, setError] = useState(false);

  const handleChangeEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handleChangePassword = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const loginUser = {
      email: email,
      password: password,
    };
    axios
      .post(baseURL, loginUser)
      .then((response) => {
        setError(false);
        localStorage.setItem('user', JSON.stringify(response.data));
        localStorage.setItem('cartCount', response.data.cartCount);
        if(response.data.isAdmin){
          navigate("/admin");
        } else {
          navigate("/");
        }
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <div>
      <section className="vh-100 bg-light">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img src="./img/about-hero.svg" className="img-fluid" alt="" />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form onSubmit={handleSubmit}>
                <p className="navbar-brand text-success logo h1 align-self-center">
                  Sneaky
                </p>

                <h5 className="fw-normal mb-3" style={{ letterSpacing: "1px" }}>
                  Sign into your account
                </h5>
                {error && (
                  <div className="alert alert-warning" role="alert">
                    Wrong email or password
                  </div>
                )}

                <div
                  className="form-group mb-4 mt-4"
                  style={{ textAlign: "left" }}
                >
                  <label className="form-label">Email address</label>
                  <input
                    type="email"
                    onChange={handleChangeEmail}
                    className="form-control form-control-lg"
                    required
                  />
                </div>

                <div className="form-group mb-4" style={{ textAlign: "left" }}>
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    onChange={handleChangePassword}
                    className="form-control form-control-lg"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block mb-3"
                  style={{ backgroundColor: "#59ab6e" }}
                >
                  Sign in
                </button>

                <p className="mb-5 pb-lg-2 text-black">
                  Don't have an account?{" "}
                  <a href="/register" style={{ color: "#59ab6e" }}>
                    Register here
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
