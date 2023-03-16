import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [User, setUser] = useState({});
  const [CartCount, setCartCount] = useState(0);
  const navigate = useNavigate();
  let userString = localStorage.getItem("user");
  let cartCountString = localStorage.getItem("cartCount");

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("cartCount");
    setUser({});
    navigate("/login");
  };

  useEffect(() => {
    if (userString) {
      const userObj = JSON.parse(userString);
      setUser(userObj);
      setCartCount(cartCountString);
    }
  }, [userString, cartCountString]);

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block"
        id="templatemo_nav_top"
      >
        <div className="container text-light">
          <div className="w-100 d-flex justify-content-between">
            <div>
              <i className="fa fa-envelope mx-2"></i>
              <a
                className="navbar-sm-brand text-light text-decoration-none"
                href="mailto:sneakysneaker@gmail.com"
              >
                sneakysneaker@gmail.com
              </a>
              <i className="fa fa-phone mx-2"></i>
              <a
                className="navbar-sm-brand text-light text-decoration-none"
                href="tel:010-020-0340"
              >
                010-020-0340
              </a>
            </div>
            {User?.name ? (
              <div>
                <span className="text-light">Hello, {User?.name}</span>
                <span className="text-light mx-2">|</span>
                <span
                  className="text-light"
                  onClick={handleLogout}
                  style={{ cursor: "pointer" }}
                >
                  Logout
                </span>
              </div>
            ) : (
              <div>
                <a className="text-light" href="/login">
                  Login
                </a>
                <span className="text-light mx-2">|</span>
                <a className="text-light" href="/register">
                  Register
                </a>
              </div>
            )}
          </div>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg navbar-light shadow">
        <div className="container d-flex justify-content-between align-items-center">
          <a
            className="navbar-brand text-success logo h1 align-self-center"
            href="/"
          >
            Sneaky
          </a>

          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#templatemo_main_nav"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <i className="fas fa-bars"></i>
            </span>
          </button>

          <div
            className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between"
            id="templatemo_main_nav"
          >
            <div className="flex-fill">
              <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/"
                    style={{ fontSize: "1.2em !important" }}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/product"
                    style={{ fontSize: "1.2em !important" }}
                  >
                    Products
                  </a>
                </li>
                {User?.name && (
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="/order"
                      style={{ fontSize: "1.2em !important" }}
                    >
                      My Orders
                    </a>
                  </li>
                )}
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/about"
                    style={{ fontSize: "1.2em !important" }}
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>
            {User?.name && (
              <div className="align-self-center d-flex">
                <a
                  className="nav-icon position-relative text-decoration-none ml-4"
                  href="/cart"
                >
                  <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                  {CartCount > 0 && (
                    <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-danger text-white font-weight-light">
                      {CartCount}
                    </span>
                  )}
                </a>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
