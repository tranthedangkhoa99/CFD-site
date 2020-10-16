import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './screens/home/Home';
import Shop from './screens/shop/Shop';
import ShopCart from './screens/shop-cart/ShopCart';
import ProductsDetails from './screens/products-detail/ProductsDetails';
import Contact from './screens/contact/Contact';
import CheckOut from './screens/checkout/CheckOut';
import Blog from './screens/blog/Blog';
import BlogDetail from './screens/blog-detail/BlogDetail';



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/shopcart">
          <ShopCart />
        </Route>
        <Route path="/productdetail">
          <ProductsDetails />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/checkout">
          <CheckOut />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/blogdetail">
          <BlogDetail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
