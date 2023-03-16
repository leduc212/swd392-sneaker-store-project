import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Cart() {
  const [CartItems, setCartItems] = useState([]);
  const [TotalItems, setTotalItems] = useState(0);
  const [TotalPrice, setTotalPrice] = useState(0);
  const [User, setUser] = useState({});

  let userString = localStorage.getItem("user");
  const baseURL = "https://localhost:44320/api/Cart";

  const handleDelete = (userId, prodId, sizeId) => {
    let removeUrl =
      baseURL + `/Remove?userId=${userId}&productId=${prodId}&sizeId=${sizeId}`;
    axios
      .get(removeUrl)
      .then((response) => {
        localStorage.setItem("cartCount", response.data);
        fetchCart(User);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const quantityDown = (userId, prodId, sizeId, quantity) => {
    if (quantity - 1 >= 1) {
      let removeUrl =
        baseURL +
        `/Update?userId=${userId}&productId=${prodId}&sizeId=${sizeId}&newQuantity=${
          quantity - 1
        }`;
      axios
        .get(removeUrl)
        .then((response) => {
          localStorage.setItem("cartCount", response.data);
          fetchCart(User);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const quantityUp = (userId, prodId, sizeId, quantity) => {
    let removeUrl =
      baseURL +
      `/Update?userId=${userId}&productId=${prodId}&sizeId=${sizeId}&newQuantity=${
        quantity + 1
      }`;
    axios
      .get(removeUrl)
      .then((response) => {
        localStorage.setItem("cartCount", response.data);
        fetchCart(User);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchCart = (userObj) => {
    let actualUrl = baseURL + "?userId=" + userObj?.userId;
    axios
      .get(actualUrl)
      .then((response) => {
        setCartItems(response.data.cartItems);
        setTotalItems(response.data.totalItems);
        setTotalPrice(response.data.totalPrice);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (userString) {
      const userObj = JSON.parse(userString);
      setUser(userObj);
      fetchCart(userObj);
    }
  }, [userString]);

  return (
    <div>
      <section className="h-100">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5
                    className="mb-0"
                    style={{
                      textAlign: "left",
                    }}
                  >
                    Cart - {TotalItems} items
                  </h5>
                </div>
                <div
                  className="card-body"
                  style={{
                    textAlign: "left",
                  }}
                >
                  {CartItems?.length === 0 ? (
                    <div
                      className="d-flex align-items-center"
                      style={{ height: "12.4em" }}
                    >
                      <h5 className="text-center m-auto">Your cart is empty</h5>
                    </div>
                  ) : (
                    CartItems.map((data) => (
                      <div
                        className="row"
                        key={
                          "c" +
                          data.cartId +
                          "p" +
                          data.productId +
                          "s" +
                          data.sizeId
                        }
                      >
                        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                          <div
                            className="bg-image hover-overlay hover-zoom ripple rounded"
                            data-mdb-ripple-color="light"
                          >
                            <img
                              src={data.product.image}
                              className="w-100"
                              alt=""
                            />
                            <a href="#!">
                              <div
                                className="mask"
                                style={{
                                  backgroundColor: "rgba(251, 251, 251, 0.2)",
                                }}
                              ></div>
                            </a>
                          </div>
                        </div>

                        <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                          <p>
                            <strong>{data.product.name}</strong>
                          </p>
                          <p>Brand: {data.product.brand.name}</p>
                          <p>Size: {data.size.name}</p>
                          <p>
                            Price: $
                            {(
                              Math.round(data.product.price * 100) / 100
                            ).toFixed(2)}
                          </p>
                          <div
                            onClick={() =>
                              handleDelete(
                                User.userId,
                                data.product.id,
                                data.size.id
                              )
                            }
                          >
                            <button
                              type="button"
                              className="btn btn-secondary text-white btn-sm me-1 mb-2"
                              title="Remove item"
                            >
                              <i className="fas fa-trash"></i>
                            </button>
                          </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                          <div
                            className="d-flex mb-4"
                            style={{ maxWidth: "300px" }}
                          >
                            <button
                              type="button"
                              className="btn btn-success px-3 me-2"
                              onClick={() =>
                                quantityDown(
                                  User.userId,
                                  data.product.id,
                                  data.size.id,
                                  data.quantity
                                )
                              }
                            >
                              <i className="fas fa-minus"></i>
                            </button>

                            <div className="form-outline">
                              <input
                                min="1"
                                name="newQuantity"
                                value={data.quantity}
                                type="number"
                                className="form-control"
                              />
                            </div>

                            <button
                              type="button"
                              className="btn btn-success px-3 ms-2"
                              onClick={() =>
                                quantityUp(
                                  User.userId,
                                  data.product.id,
                                  data.size.id,
                                  data.quantity
                                )
                              }
                            >
                              <i className="fas fa-plus"></i>
                            </button>
                          </div>
                          <p className="text-start text-md-center">
                            <strong>
                              Total: $
                              {(
                                Math.round(
                                  data.quantity * data.product.price * 100
                                ) / 100
                              ).toFixed(2)}
                            </strong>
                          </p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products
                      <span>
                        ${(Math.round(TotalPrice * 100) / 100).toFixed(2)}
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>Free of Charge</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                      </div>
                      <span>
                        <strong>
                          ${(Math.round(TotalPrice * 100) / 100).toFixed(2)}
                        </strong>
                      </span>
                    </li>
                  </ul>
                  <a
                    href="/cart/checkout"
                    className={
                      TotalItems === 0
                        ? "disabled btn btn-success btn-lg btn-block"
                        : "btn btn-success btn-lg btn-block"
                    }
                  >
                    Go to checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
