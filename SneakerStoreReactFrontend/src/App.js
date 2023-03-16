import "./App.css";
import Index from "./Component/Home/Index";
import FooterUser from "./Component/FooterUser";
import HeaderUser from "./Component/HeaderUser";
import { Route, Routes } from "react-router-dom";

import Login from "./Component/Home/Login";
import Register from "./Component/Home/Register";
import About from "./Component/Home/About";
import ChangePassword from "./Component/Home/ChangePassword";
import Denied from "./Component/Home/Denied";
import Error from "./Component/Home/Error";
import UpdateInformation from "./Component/Home/UpdateInformation";
import Admin from "./Component/Admin/Admin";

import CreateBrand from "./Component/AdminBrand/CreateBrand";
import UpdateBrand from "./Component/AdminBrand/UpdateBrand";
import ViewAllBrand from "./Component/AdminBrand/ViewAllBrand";

import CreateCategory from "./Component/AdminCategory/CreateCategory";
import UpdateCategory from "./Component/AdminCategory/UpdateCategory";
import ViewAllCategory from "./Component/AdminCategory/ViewAllCategory";

import DetailOrder from "./Component/AdminOrder/DetailOrder";
import ViewAllOrder from "./Component/AdminOrder/ViewAllOrder";

import CreateProduct from "./Component/AdminProduct/CreateProduct";
import DetailProductAdmin from "./Component/AdminProduct/DetailProductAdmin";
import UpdateProduct from "./Component/AdminProduct/UpdateProduct";
import ViewAllProduct from "./Component/AdminProduct/ViewAllProduct";

import ViewAllUser from "./Component/AdminUser/ViewAllUser";

import Cart from "./Component/Cart/Cart";
import Checkout from "./Component/Cart/Checkout";

import Order from "./Component/Order/Order";
import Detail from "./Component/Order/Detail";

import Product from "./Component/Product/Product";
import DetailProduct from "./Component/Product/DetailProduct";

function App() {
  return (
    <div className="App">
      <HeaderUser />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/about" element={<About />} />
        <Route path="/denied" element={<Denied />} />
        <Route path="/error" element={<Error />} />
        <Route path="/updateinformation" element={<UpdateInformation />} />

        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/brand/create" element={<CreateBrand />} />
        <Route path="/admin/brand/update/:id" element={<UpdateBrand />} />
        <Route path="/admin/brand" element={<ViewAllBrand />} />

        <Route path="/admin/category/create" element={<CreateCategory />} />
        <Route path="/admin/category/update/:id" element={<UpdateCategory />} />
        <Route path="/admin/category" element={<ViewAllCategory />} />

        <Route path="/admin/order/:id" element={<DetailOrder />} />
        <Route path="/admin/order" element={<ViewAllOrder />} />

        <Route path="/admin/product/create" element={<CreateProduct />} />
        <Route path="/admin/product/update/:id" element={<UpdateProduct />} />
        <Route path="/admin/product/:id" element={<DetailProductAdmin />} />
        <Route path="/admin/product" element={<ViewAllProduct />} />

        <Route path="/admin/user" element={<ViewAllUser />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/checkout" element={<Checkout />} />

        <Route path="/order" element={<Order />} />
        <Route path="/order/:id" element={<Detail />} />

        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<DetailProduct />} />
      </Routes>
      <FooterUser />
    </div>
  );
}

export default App;
