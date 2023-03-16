import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function DetailOrder() {
  const [Order, setOrder] = useState({});
  const [OrderItems, setOrderItems] = useState([]);
  const [User, setUser] = useState({});

  const currentIdObj = useParams();
  let userString = localStorage.getItem("user");

  const baseGetURL = "https://localhost:44320/api/Order";

  const statusText = (statusInput) => {
    let statusText = "Pending";
    switch (statusInput) {
      case 2:
        statusText = "Processing";
        break;
      case 3:
        statusText = "Rejected";
        break;
      case 4:
        statusText = "Completed";
        break;
      case 5:
        statusText = "Cancelled";
        break;
      default:
        break;
    }
    return statusText;
  };

  const statusColor = (statusInput) => {
    let statusColor = "bg-warning";
    switch (statusInput) {
      case 2:
        statusColor = "bg-info";
        break;
      case 3:
        statusColor = "bg-danger";
        break;
      case 4:
        statusColor = "bg-success";
        break;
      case 5:
        statusColor = "bg-danger";
        break;
      default:
        break;
    }
    return statusColor;
  };

  const handleCancelOrder = () => {
    let updateUrl = baseGetURL + `/Update/${Order?.id}?status=${5}`
    axios
      .get(updateUrl)
      .then((response) => {
        setOrder(response.data);
        setOrderItems(response.data.orderItems);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const dateString = (timestamp) => {
    const date = new Date(timestamp);
    const formattedTime =
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    return formattedTime;
  };

  useEffect(() => {
    if (userString) {
      const userObj = JSON.parse(userString);
      setUser(userObj);
    }
    let actualUrl = baseGetURL + "/" + currentIdObj.id;
    axios
      .get(actualUrl)
      .then((response) => {
        setOrder(response.data);
        setOrderItems(response.data.orderItems);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentIdObj, userString]);

  return (
    <div>
      <section className="h-100">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8" style={{
                      textAlign: "left",
                    }}>
              <div className="card mb-4">
                <div className="card-header py-3 pl-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <h5 className="mb-0">
                      <a href="/order" className="text-dark mr-1">
                        <i className="fa fa-fw fa-chevron-left"></i>
                      </a>
                      Order #{Order?.id} - {Order?.totalItem} items
                      <span className={"ml-3 fs-6 p-1 rounded-2 text-white " + statusColor(Order?.status)}>
                        Order {statusText(Order?.status)}
                      </span>
                    </h5>
                    {(Order?.status === 1 || Order?.status === 2) &&
                      Order?.userId === User.userId && (
                        <button className="btn btn-outline-danger" onClick={handleCancelOrder}>
                          Cancel order
                        </button>
                      )}
                  </div>
                  <div className="card-body">
                    {OrderItems.map((data) => (
                      <div
                        className="row"
                        key={"p" + data.productId + "s" + data.sizeId}
                      >
                        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                          <div className="bg-image hover-overlay hover-zoom ripple rounded">
                            <img src={data.product?.image} className="w-100" alt="" />
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
                            <strong>{data.product?.name}</strong>
                          </p>
                          <p>Brand: {data.product?.brand?.name}</p>
                          <p>Size: {data.size?.name}</p>
                          <p>
                            Price: $
                            {(Math.round(data.product?.price * 100) / 100).toFixed(2)}
                          </p>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                          <p className="text-start text-md-center">
                            <strong>Quantity: {data.quantity}</strong>
                          </p>

                          <p className="text-start text-md-center">
                            <strong>
                              Total: $
                              {(
                                Math.round(
                                  data.quantity * data.product?.price * 100
                                ) / 100
                              ).toFixed(2)}
                            </strong>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Price Details</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products
                      <span>${(Math.round(Order?.totalPrice * 100) / 100).toFixed(2)}</span>
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
                        <strong>${(Math.round(Order?.totalPrice * 100) / 100).toFixed(2)}</strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Shipping Address</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Receiver
                      <span>{Order?.user?.name}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Contact Email
                      <span>{Order?.user?.email}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0 pb-0">
                      Contact Number
                      <span>{Order?.phone}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Order Date
                      <span>
                      {dateString(Date.parse(Order?.createdAt))}
                      </span>
                    </li>
                    <li className="list-group-item d-flex text-left align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Address</strong>
                        <strong>
                          <p className="mb-0">{Order?.address}</p>
                        </strong>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
