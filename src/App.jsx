import { Route } from "react-router";
import { BrowserRouter, Routes } from "react-router";
import RootLayout from "./pages/rootlayout";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Shop from "./pages/shop";
import Cart from "./pages/cart";
import ProductDetail from "./pages/product/[id]";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Orders from "./pages/orders";
import Wishlist from "./pages/wishlist";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="shop" element={<Shop />} />
          <Route path="orders" element={<Orders />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="cart" element={<Cart />} />
          <Route path="product/:id" element={<ProductDetail />} />
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
