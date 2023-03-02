import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Layout from "./components/layout/Layout";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux/Reducer";
import "./18n"


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
