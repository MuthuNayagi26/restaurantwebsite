import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'boxicons/css/boxicons.min.css';
import Login from './components/Login';
import MainPage from './components/MainPage';
import { OrderDetail } from './components/OrderDetail';
import { CustomerDetail } from './components/CustomerDetail';
import { Analytics } from './components/Analytics';
import { Briyani } from './components/Briyani';
import { NonVeg } from './components/NonVeg';
import { Veg } from './components/Veg';
import { Desserts } from './components/Desserts';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/MainPage" element={<MainPage />} />
      <Route path="/order-detail" element={<OrderDetail />} />
      <Route path="/customer-detail" element={<CustomerDetail />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/biryani" element={<Briyani />} />
      <Route path="/non-veg" element={<NonVeg />} />
      <Route path="/veg" element={<Veg />} />
      <Route path="/desserts" element={<Desserts />} />
    </Routes>
  );
};

export default App;
