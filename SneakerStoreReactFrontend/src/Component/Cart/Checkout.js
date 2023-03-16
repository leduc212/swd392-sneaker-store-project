import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const [TotalItems, setTotalItems] = useState(0);
  const [TotalPrice, setTotalPrice] = useState(0);
  const [User, setUser] = useState({});
  const [Phone, setPhone] = useState("");
  const [Address, setAddress] = useState("");

  const navigate = useNavigate();
  let userString = localStorage.getItem("user");
  const baseURL = "https://localhost:44320/api/Cart";

  const handleChangePhone = (event) => {
    const value = event.target.value;
    setPhone(value);
  };

  const handleChangeAddress = (event) => {
    const value = event.target.value;
    setAddress(value);
  };

  const handlePlaceOrder = () => {
    const order = {
        email: User?.email,
        phone: Phone,
        address: Address,
        paymentMethod: "Cash On Delivery",
        totalPrice: TotalPrice
      };
      axios
        .post(baseURL + "/Checkout?userId=" + User?.userId, order)
        .then((response) => {
          localStorage.setItem('cartCount', 0);
          navigate("/order/" + response.data);
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
        <div
          className="container py-5"
          style={{
            textAlign: "left",
          }}
        >
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4 p-4">
                <h5 className="text-uppercase">Delivery Address</h5>
                <div className="row mt-2">
                  <div className="col">
                    <div className="inputbox mt-3 mr-2">
                      {" "}
                      <input
                        type="text"
                        className="form-control"
                        required="required"
                        onChange={handleChangePhone}
                      />{" "}
                      <span>Contact Number</span>{" "}
                    </div>
                  </div>
                </div>
                <div className="row mt-1">
                  <div className="col">
                    <div className="inputbox mt-3 mr-2">
                      {" "}
                      <input
                        type="text"
                        className="form-control"
                        required="required"
                        onChange={handleChangeAddress}
                      />{" "}
                      <span>Delivery Address</span>{" "}
                    </div>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <h5 className="text-uppercase">Payment details</h5>
                  <div>
                    <div className="form-check mt-4">
                      <input
                        className="form-check-input"
                        value="Cash On Delivery"
                        type="radio"
                        id="cod-radio"
                        defaultChecked
                      />
                      <label className="form-check-label" for="cod-radio">
                        Cash On Delivery
                      </label>
                    </div>

                    <div className="form-check mt-4">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="credit-card-radio"
                        disabled
                      />
                      <label
                        className="form-check-label"
                        for="credit-card-radio"
                      >
                        Credit or Debit Card
                      </label>
                    </div>

                    <div className="form-check mt-4">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="wallet-radio"
                        disabled
                      />
                      <label className="form-check-label" for="wallet-radio">
                        My Wallet
                      </label>
                    </div>
                  </div>
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
                          {" "}
                          ${(Math.round(TotalPrice * 100) / 100).toFixed(2)}
                        </strong>
                      </span>
                    </li>
                  </ul>

                  <button
                    type="button"
                    onClick={handlePlaceOrder}
                    className={
                      TotalItems === 0
                        ? "disabled btn btn-success btn-lg btn-block"
                        : "btn btn-success btn-lg btn-block"
                    }
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
