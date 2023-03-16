import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pagination } from "@mui/material";

export default function Product() {
  const [Products, setProducts] = useState([]);
  const [Categories, setCategories] = useState([]);
  const [Brands, setBrands] = useState([]);
  const [Sizes, setSizes] = useState([]);

  const [page, setpage] = useState(0);
  const [search, setsearch] = useState("");
  const [cateId, setcateId] = useState(0);
  const [brandId, setbrandId] = useState(0);
  const [sizeId, setsizeId] = useState(0);
  const [orderBy, setorderBy] = useState(0);

  const [selectedValue, setSelectedValue] = useState("");
  const baseURL = "https://localhost:44320/api/Product";

  const handleChangeCate = (event) => {
    const value = event.target.value;
    setcateId(value);
  };

  const handleChangeBrand = (event) => {
    const value = event.target.value;
    setbrandId(value);
  };

  const handleChangeSize = (event) => {
    const value = event.target.value;
    setsizeId(value);
  };

  const handleChangeSearch = (event) => {
    const value = event.target.value;
    setsearch(value);
  };

  const handleChangeOrderBy = (event) => {
    setSelectedValue(event.target.value);
    const value = selectedValue;
    setorderBy(value);
  };

  const handleChangePage = (event, value) => {
    console.log(value);
    setpage(value);
  };

  useEffect(() => {
    let actualUrl =
      baseURL +
      `?page=${page}&search=${search}&categoryId=${cateId}&brandId=${brandId}&sizeId=${sizeId}&orderBy=${orderBy}`;
    axios
      .get(actualUrl)
      .then((response) => {
        setProducts(response.data.productsPaginated);
        setCategories(response.data.categories);
        setBrands(response.data.brands);
        setSizes(response.data.sizes);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page, search, cateId, brandId, sizeId, orderBy]);

  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-3">
            <h1 className="h2 pb-4">All Products</h1>
            <ul className="list-unstyled templatemo-accordion">
              <li className="pb-3">
                <a
                  className="d-flex justify-content-between h3 text-decoration-none text-black"
                  href="/"
                >
                  Categories
                  <i className="fa fa-fw fa-chevron-circle-up mt-1"></i>
                </a>
                <li
                  className={cateId === 0 ? "font-weight-bold" : ""}
                  style={{
                    textAlign: "left",
                    cursor: "pointer",
                  }}
                  onClick={handleChangeCate}
                  value="0"
                >
                  All
                </li>
                {Categories.map((data, index) => (
                  <li
                    key={data.id}
                    className={cateId === data.id ? "font-weight-bold" : ""}
                    style={{
                      textAlign: "left",
                      cursor: "pointer",
                    }}
                    onClick={handleChangeCate}
                    value={data.id}
                  >
                    {data.name}
                  </li>
                ))}
              </li>
              <li className="pb-3">
                <a
                  className="d-flex justify-content-between h3 text-decoration-none text-black"
                  href="/"
                >
                  Brand
                  <i className="pull-right fa fa-fw fa-chevron-circle-up mt-1"></i>
                </a>
                <li
                  className={brandId === 0 ? "font-weight-bold" : ""}
                  style={{
                    textAlign: "left",
                    cursor: "pointer",
                  }}
                  onClick={handleChangeBrand}
                  value="0"
                >
                  All
                </li>
                {Brands.map((data) => (
                  <li
                    key={data.id}
                    className={brandId === data.id ? "font-weight-bold" : ""}
                    style={{
                      textAlign: "left",
                      cursor: "pointer",
                    }}
                    onClick={handleChangeBrand}
                    value={data.id}
                  >
                    {data.name}
                  </li>
                ))}
              </li>
              <li className="pb-3">
                <a
                  className="d-flex justify-content-between h3 text-decoration-none text-black"
                  href="/"
                >
                  Size
                  <i className="pull-right fa fa-fw fa-chevron-circle-up mt-1"></i>
                </a>
                <li
                  className={sizeId === 0 ? "font-weight-bold" : ""}
                  style={{
                    textAlign: "left",
                    cursor: "pointer",
                  }}
                  onClick={handleChangeSize}
                  value="0"
                >
                  All
                </li>
                {Sizes.map((data) => (
                  <li
                    key={data.id}
                    className={sizeId === data.id ? "font-weight-bold" : ""}
                    style={{
                      textAlign: "left",
                      cursor: "pointer",
                    }}
                    onClick={handleChangeSize}
                    value={data.id}
                  >
                    {data.name}
                  </li>
                ))}
              </li>
            </ul>
          </div>

          <div className="col-lg-9">
            <div className="row mb-4">
              <div className="col-md-6">
                <div className="input-group">
                  <select
                    className="form-control"
                    value={selectedValue}
                    onChange={handleChangeOrderBy}
                  >
                    <option value="0">Newest</option>
                    <option value="1">Oldest</option>
                    <option value="2">Price: High-Low</option>
                    <option value="3">Price: Low-High</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    onChange={handleChangeSearch}
                    placeholder="Search by Name"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              {Products.map((data) => (
                <div className="col-md-4" key={data.id}>
                  <div
                    className="card mb-4 product-wap rounded-0"
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
              ))}
            </div>

            <Pagination
              count={10}
              color="primary"
              size="large"
              page={page}
              onChange={handleChangePage}
              style={{ display: "flex", justifyContent: "right" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
