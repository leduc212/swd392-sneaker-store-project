import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function DetailProduct() {
  const [Product, setProduct] = useState({});
  const [SelectedSize, setSelectedSize] = useState("");
  const [RelatedProducts, setRelatedProducts] = useState([]);
  const [Quantity, setQuantity] = useState(1);
  const [User, setUser] = useState({});
  const [Success, setSuccess] = useState(false);

  const navigate = useNavigate();
  const currentIdObj = useParams();
  const basePostURL = "https://localhost:44320/api/Cart/Add";
  const baseGetURL = "https://localhost:44320/api/Product";

  let userString = localStorage.getItem("user");

  const handleChangeSize = (value) => {
    setSelectedSize(value);
  };

  const subQuantity = () => {
    setQuantity(Quantity - 1 < 1 ? 1 : Quantity - 1);
  };

  const addQuantity = () => {
    setQuantity(Quantity + 1);
  };

  const handleSubmit = () => {
    if (!User?.userId) {
      navigate("/login");
      return;
    }
    if (SelectedSize !== "") {
      const cartItem = {
        productId: Product?.id,
        sizeId: SelectedSize,
        quantity: Quantity,
      };
      axios
        .post(basePostURL + "?userId=" + User?.userId, cartItem)
        .then((response) => {
          setSuccess(true);
          localStorage.setItem("cartCount", response.data);
        })
        .catch((error) => {
          setSuccess(false);
          console.log(error);
        });
    }
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
        setProduct(response.data.product);
        setRelatedProducts(response.data.relatedProducts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentIdObj, userString]);
  return (
    <div>
      <section>
        <div className="container pb-5 pt-5">
          <div className="row">
            <div className="col-lg-7 mt-5">
              <div className="card" style={{ textAlign: "left" }}>
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <a
                      href="/product"
                      className="text-dark mr-2"
                      data-mdb-toggle="tooltip"
                      title="Back to Products"
                    >
                      <i className="fa fa-fw fa-chevron-left"></i>
                    </a>
                    <h2 className="mb-0">{Product?.name}</h2>
                  </div>
                  <p className="h3 py-2">${Product?.price}</p>
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                      <h6>Brand:</h6>
                    </li>
                    <li className="list-inline-item">
                      <p className="text-muted">
                        <strong>{Product?.brand?.name}</strong>
                      </p>
                    </li>
                  </ul>

                  <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                      <h6>Category:</h6>
                    </li>
                    <li className="list-inline-item">
                      <p className="text-muted">
                        <strong>{Product?.category?.name}</strong>
                      </p>
                    </li>
                  </ul>

                  <h6>Description:</h6>
                  <p>{Product?.description}</p>

                  <form id="add-to-cart-form">
                    <div className="row">
                      <div className="col-auto">
                        <p>Size</p>
                        <ul className="list-inline">
                          {Product?.productSizes?.map((data) => (
                            <li
                              key={data.sizeId}
                              className="list-inline-item mt-2"
                            >
                              <span
                                style={{ width: "8em" }}
                                className={
                                  SelectedSize === data.sizeId
                                    ? "btn btn-primary btn-size"
                                    : "btn btn-success btn-size"
                                }
                                onClick={() => handleChangeSize(data.sizeId)}
                              >
                                {data.size.name}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col d-grid">
                        <ul className="list-inline pb-3">
                          <li className="list-inline-item text-right">
                            Quantity
                          </li>
                          <li className="list-inline-item">
                            <span
                              className="btn btn-success"
                              id="btn-minus"
                              onClick={subQuantity}
                            >
                              -
                            </span>
                          </li>
                          <li className="list-inline-item">
                            <span
                              className="btn btn-outline-secondary"
                              style={{ cursor: "default" }}
                              id="var-value"
                            >
                              {Quantity}
                            </span>
                          </li>
                          <li className="list-inline-item">
                            <span
                              className="btn btn-success"
                              id="btn-plus"
                              onClick={addQuantity}
                            >
                              +
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {SelectedSize === "" && (
                      <p className="text-danger text-center" id="size-warning">
                        Select a size to add to cart
                      </p>
                    )}

                    {Success && (
                      <p className="text-success text-center" id="size-warning">
                        Add to cart successfully
                      </p>
                    )}

                    <div className="row pb-3">
                      <div className="col d-grid">
                        <button
                          type="button"
                          id="add-to-cart-btn"
                          onClick={handleSubmit}
                          className="btn btn-success btn-lg"
                        >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mt-5">
              <div className="card mb-3">
                <img
                  className="card-img img-fluid"
                  src={Product.image}
                  alt=""
                  id="product-detail"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row text-left p-2 pb-3">
            <h4>Related Products</h4>
          </div>

          <div className="row">
            {RelatedProducts?.map((data, index) => (
              <div className="col-md-3" key={data.id}>
                <div className="">
                  <div
                    className="product-wap card rounded-0"
                    style={{ height: "28em" }}
                  >
                    <a
                      href={"/product/" + data.id}
                      className="card rounded-0"
                      style={{ height: "18em" }}
                    >
                      <img
                        className="card-img rounded-0 img-fluid h-100"
                        src={data.image}
                        alt=""
                      />
                    </a>
                    <div className="card-body" style={{ textAlign: "left" }}>
                      <a
                        href={"/product/" + data.id}
                        className="h5 text-decoration-none text-black"
                        style={{
                          maxWidth: "100%",
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 2,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {data.name}
                      </a>
                      <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                        <li>{data.brand.name}</li>
                      </ul>
                      <p className="text-center mb-0">${data.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
