import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Layout from "./components/layout/Layout";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux/Reducer";
import Basket from "./components/pages/basket/Basket";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <App/>
          </Layout>
        </BrowserRouter>
      </Provider>

  </React.StrictMode>
);
