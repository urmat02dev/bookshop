import './App.scss';
import MainPage from "./components/main-page/MainPage";
import {Routes,Route} from "react-router-dom";
import Basket from "./components/pages/basket/Basket";
import Catalog from "./components/pages/catalog/Catalog";
import Contacts from "./components/pages/contacts/Contacts";
import Delivery from "./components/pages/delivery/Delivery";
import Search from "./components/header/search/Search";
import DetailPage from "./components/pages/detail-page/DetailPage";
import Payments from "./components/pages/payments/Payments";

import Login from "./components/pages/Sign-in/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/basket" element={<Basket/>}/>
        <Route path="/catalog" element={<Catalog/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/delivery" element={<Delivery/>}/>
        <Route path="/payments" element={<Payments/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path={"/detail-page/:id"} element={<DetailPage/>}/>
      </Routes>
    </>
  );
}

export default App;
