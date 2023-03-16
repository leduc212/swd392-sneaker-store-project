import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Index() {
  const [APIData, setAPIData] = useState([]);
  const baseURL = "https://localhost:44320/api/Product/TopProducts";

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setAPIData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div
        id="template-mo-zay-hero-carousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-bs-target="#template-mo-zay-hero-carousel"
            data-bs-slide-to="0"
            className="active"
          ></li>
          <li
            data-bs-target="#template-mo-zay-hero-carousel"
            data-bs-slide-to="1"
          ></li>
          <li
            data-bs-target="#template-mo-zay-hero-carousel"
            data-bs-slide-to="2"
          ></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="row p-5">
                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                  <img
                    className="img-fluid"
                    src="./img/banner_img_01.jpg"
                    alt=""
                  />
                </div>
                <div className="col-lg-6 mb-0 d-flex align-items-center">
                  <div className="text-align-left align-self-center">
                    <h1 className="h1 text-success">
                      <b>Sneaky</b> Sneaker Store
                    </h1>
                    <h3 className="h2">Step up your sneaker game</h3>
                    <p>
                      Whether you're looking for the latest trends or classic
                      styles, we have everything you need to step up your
                      sneaker game. Shop with us today and experience the Sneaky
                      difference!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row p-5">
                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                  <img
                    className="img-fluid"
                    src="./img/banner_img_02.jpg"
                    alt=""
                  />
                </div>
                <div className="col-lg-6 mb-0 d-flex align-items-center">
                  <div className="text-align-left">
                    <h1 className="h1">Fast Shipping & Easy Returns</h1>
                    <h3 className="h2">
                      Get your kicks quickly and hassle-free
                    </h3>
                    <p>
                      Enjoy fast and reliable shipping, as well as easy returns
                      and exchanges, when you shop with Sneaky. Shop with us
                      today and experience the Sneaky difference!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row p-5">
                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                  <img
                    className="img-fluid"
                    src="./img/banner_img_03.jpg"
                    alt=""
                  />
                </div>
                <div className="col-lg-6 mb-0 d-flex align-items-center">
                  <div className="text-align-left">
                    <h1 className="h1">Sneaker Collections</h1>
                    <h3 className="h2">Find your perfect pair</h3>
                    <p>
                      Discover our vast collection of sneakers, curated with the
                      latest and greatest styles from the most sought-after
                      brands. From classic styles to limited editions, we have
                      something for every sneakerhead.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev text-decoration-none w-auto ps-3"
          href="#template-mo-zay-hero-carousel"
          role="button"
          data-bs-slide="prev"
        >
          <i className="fas fa-chevron-left"></i>
        </a>
        <a
          className="carousel-control-next text-decoration-none w-auto pe-3"
          href="#template-mo-zay-hero-carousel"
          role="button"
          data-bs-slide="next"
        >
          <i className="fas fa-chevron-right"></i>
        </a>
      </div>

      <section className="container py-5">
        <div className="row text-center pt-3">
          <div className="col-lg-6 m-auto">
            <h1 className="h1">Categories of The Month</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4 p-5 mt-3">
            <a href="/#">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1575456456278-936c89ccdb7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                className="img-thumbnail img-fluid border"
              />
            </a>
            <h5 className="text-center mt-3 mb-3">Running</h5>
            <p className="text-center">
              <a className="btn btn-success" href="/product">
                Go Shop
              </a>
            </p>
          </div>
          <div className="col-12 col-md-4 p-5 mt-3">
            <a href="/#">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1528701800487-ba01fea498c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                className="img-thumbnail img-fluid border"
              />
            </a>
            <h2 className="h5 text-center mt-3 mb-3">Lifestyle</h2>
            <p className="text-center">
              <a className="btn btn-success" href="/product">
                Go Shop
              </a>
            </p>
          </div>
          <div className="col-12 col-md-4 p-5 mt-3">
            <a href="/#">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1555378322-a8e1515568e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                className="img-thumbnail img-fluid border"
              />
            </a>
            <h2 className="h5 text-center mt-3 mb-3">Basketball</h2>
            <p className="text-center">
              <a className="btn btn-success" href="/product">
                Go Shop
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-light">
        <div className="container py-5">
          <div className="row text-center py-3">
            <div className="col-lg-6 m-auto">
              <h1 className="h1">Featured Product</h1>
            </div>
          </div>
          <div className="row">
            {APIData.map((data) => (
              <div className="col-12 col-md-4 mb-4" key={data.id}>
                <div className="card h-100 text-left">
                  <a href={"/product/" + data.id} style={{ height: "20em" }}>
                    <img
                      src={data.image}
                      className="card-img-top img-fluid h-100"
                      alt=""
                    />
                  </a>
                  <div className="card-body">
                    <ul className="list-unstyled d-flex justify-content-between">
                      <li className="text-muted text-right">${data.price}</li>
                    </ul>
                    <a
                      href={"/product/" + data.id}
                      className="h2 text-decoration-none text-dark"
                    >
                      {data.name}
                    </a>
                    <p className="card-text mt-2 text-black">
                      {data.description}
                    </p>
                    <p className="text-muted">{data.brand.name}</p>
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
