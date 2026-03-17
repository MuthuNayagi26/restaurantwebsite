import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import { AboutUs } from "./pages/AboutUs";
import { Briyani } from "./pages/Briyani";
import { NonVeg }  from "./pages/NonVeg";
import { Veg } from "./pages/Veg";
import { Desserts } from "./pages/Desserts";
import { Cart } from "./pages/Cart";
import { ContactUS } from "./pages/ContactUS";
import { PlaceOrder} from "./pages/PlaceOrder";
import { OrderSuccess } from "./pages/OrderSuccess";

function App() {
  return (
    <Router>
      <Navbar />  {/* Navbar stays on all pages */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/briyani" element={<Briyani />} />
        <Route path="/nonveg" element={<NonVeg />} />
        <Route path="/veg" element={<Veg />} />
        <Route path="/desserts" element={<Desserts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<ContactUS />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/order-success" element={<OrderSuccess />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
