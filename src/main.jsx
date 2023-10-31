import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App";
import "../src/scss/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "react-loading-skeleton/dist/skeleton.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
// import store from "./redux/store";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <BrowserRouter>
      <Provider store={store}>
      <App />
      </Provider>
    </BrowserRouter>
    </>
  </React.StrictMode>,
)
