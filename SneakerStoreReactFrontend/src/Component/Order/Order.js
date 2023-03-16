import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pagination } from "@mui/material";

export default function Order() {
  const [Orders, setOrders] = useState([]);
  const [page, setpage] = useState(0);
  const [totalPage, settotalPage] = useState(0);
  const [status, setstatus] = useState(0);

  let userString = localStorage.getItem("user");

  const baseURL = "https://localhost:44320/api/Order";

  const dateString = (timestamp) => {
    const date = new Date(timestamp);
    const formattedTime =
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    return formattedTime;
  };

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

  const handleChangePage = (event, value) => {
    setpage(value);
  };

  const handleChangeStatus = (event) => {
    setpage(1);
    const value = event.target.value;
    setstatus(value);
  };

  const fetchOrder = (userObj, page, status) => {
    let actualUrl =
      baseURL +
      `?page=${page}&status=${status}&role=${userObj?.isAdmin ? 1 : 0}&userId=${
        userObj?.userId
      }`;
    axios
      .get(actualUrl)
      .then((response) => {
        setOrders(response.data.ordersPaginated);
        settotalPage(response.data.totalPage);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (userString) {
      const userObj = JSON.parse(userString);
      fetchOrder(userObj, page, status);
    }
  }, [page, status, userString]);
  return (
    <div>
      <section className="h-100">
        <div className="container py-5">
          <div className="row">
            <div className="col-12">
              <div className="card mb-4">
                <div className="card-header pb-0 d-flex justify-content-between">
                  <h5 className="my-4">My Orders</h5>

                  <form
                    className="mb-3"
                    id="select-form"
                    method="get"
                    asp-action="Index"
                    asp-controller="Order"
                  >
                    <label className="form-label mb-0" for="selectList">
                      Status
                    </label>
                    <select
                      className="form-control"
                      id="selectList"
                      value={status}
                      onChange={handleChangeStatus}
                      style={{ width: "12em" }}
                    >
                      <option value="" disabled>
                        Choose your option
                      </option>
                      <option value="0">All</option>
                      <option value="1">Pending</option>
                      <option value="2">Processing</option>
                      <option value="3">Rejected</option>
                      <option value="4">Completed</option>
                      <option value="5">Cancelled</option>
                    </select>
                  </form>
                </div>
                <div className="card-body px-0 pt-0 pb-2">
                  <div className="table-responsive p-0">
                    <table className="table align-items-center mb-0">
                      <thead>
                        <tr>
                          <th className="text-uppercase text-secondary text-xs font-weight-bolder">
                            Order ID
                          </th>
                          <th className="text-uppercase text-secondary text-xs font-weight-bolder">
                            Order Date
                          </th>
                          <th className="text-center text-uppercase text-secondary text-xs font-weight-bolder">
                            Status
                          </th>
                          <th className="text-center text-uppercase text-secondary text-xs font-weight-bolder">
                            Total Price
                          </th>
                          <th className="text-secondary opacity-7"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {Orders.map((data) => (
                          <tr key={data.id}>
                            <td>
                              <a
                                href="/order/detail"
                                className="text-dark text-xs font-weight-bold mb-0"
                              >
                                Order #{data.id}
                              </a>
                            </td>
                            <td>
                              <p className="text-xs mb-0">
                                {dateString(Date.parse(data.createdAt))}
                              </p>
                            </td>
                            <td className="text-center text-sm">
                              <p
                                className={
                                  "mx-auto py-1 font-weight-bold w-75 fs-6 text-center rounded-2 text-white " +
                                  statusColor(data.status)
                                }
                              >
                                {statusText(data.status)}
                              </p>
                            </td>
                            <td className="align-middle text-center">
                              <p className="text-xs mb-0">
                                $
                                {(
                                  Math.round(data.totalPrice * 100) / 100
                                ).toFixed(2)}
                              </p>
                            </td>
                            <td className="align-middle">
                              <a
                                href={"/order/" + data.id}
                                className="text-secondary font-weight-bold text-xs"
                              >
                                View
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                {totalPage > 1 && (
                  <Pagination
                  count={totalPage}
                  color="primary"
                  size="large"
                  page={page}
                  onChange={handleChangePage}
                  style={{ display: "flex", justifyContent: "right" }}
                />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
