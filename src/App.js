import "./App.css";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Products from "./components/Home/Products/Products";
import About from "./components/Home/About/About";
import Contact from "./components/Home/Contact/Contact";
import Cart from "./components/Home/Cart/Cart";
import Admin from "./components/Home/Admin/Admin";
import AddTeaVariant from "./components/Home/Admin/AddTeaVariant";
import OrderList from "./components/Home/Admin/OrderList";
import MakeAdmin from "./components/Home/Admin/MakeAdmin";
import LoginForm from "./components/LoginForm/LoginForm";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AddReview from "./components/Home/Admin/AddReview/AddReview";

//user context
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/products">
            <Products></Products>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <Route path="/tea_variant">
            <AddTeaVariant></AddTeaVariant>
          </Route>
          <Route path="/add_review">
            <AddReview></AddReview>
          </Route>
          <Route path="/orderList">
            <OrderList></OrderList>
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>
          <PrivateRoute path="/cart">
            <Cart></Cart>
          </PrivateRoute>
          <Route path="/login">
            <LoginForm></LoginForm>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
