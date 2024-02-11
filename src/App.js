import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useDispatch,useSelector } from 'react-redux'
import Notification from "./components/Notification"
import { sendCartData, fetchData } from './store/cartAction'
function App() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);
  const notification = useSelector(state => state.noti.notification)

  return (
    <div className="App">
      <Notification type={notification.type} message={notification.message} />
      {console.log('notification.type', notification.type)}
      {isLoggedIn ? <Layout /> : <Auth />}
    </div>
  );
}

export default App;
