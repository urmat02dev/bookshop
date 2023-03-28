import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Layout from "./components/layout/Layout";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux";
import "./18n"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./components/pages/firebase/FireBase"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={<div></div>}>
  <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <App/>
          </Layout>
        </BrowserRouter>
      </Provider>
  </React.StrictMode>
   </Suspense>
);
