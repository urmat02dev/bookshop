import './App.scss';
import MainPage from "./components/main-page/MainPage";
import {Routes,Route} from "react-router-dom";
import Catalog from "./components/pages/catalog/Catalog";
import Contacts from "./components/pages/contacts/Contacts";
import Delivery from "./components/pages/delivery/Delivery";
import Search from "./components/header/search/Search";
import DetailPage from "./components/pages/detail-page/DetailPage";
import Payments from "./components/pages/payments/Payments";
import Autographed from "./components/pages/catalog/Autographed/Autographed";
import Sports from "./components/pages/catalog/Sports/Sports";
import Fantasy from "./components/pages/catalog/Fantasy/Fantasy";
import ChildrenSBooks from "./components/pages/catalog/Children's books/Children's books";
import BusinessLiterature from "./components/pages/catalog/Business literature/Business literature";
import HobbiesAndLeisure from "./components/pages/catalog/Hobbies and leisure/Hobbies and leisure";
import Religion from "./components/pages/catalog/Religion/Religion";
import Pedagogy from "./components/pages/catalog/Pedagogy/Pedagogy";
import SelfDevelopment from "./components/pages/catalog/Self-development/Self-development";
import Publicism from "./components/pages/catalog/Publicism/Publicism";
import Result from "./components/pages/result/Result";
import RegisterForm from "./components/pages/sign-up/RegisterForm";
import LoginForm from "./components/pages/sign-up/LoginForm";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/search-result" element={<Result/>}/>
        <Route path="/catalog" element={<Catalog/>}/>
        <Route path="/catalog/autographed" element={<Autographed/>}/>
        <Route path="/catalog/fantasy" element={<Fantasy/>}/>
        <Route path="/catalog/childrens-books" element={<ChildrenSBooks/>}/>
        <Route path="/catalog/business-literature" element={<BusinessLiterature/>}/>
        <Route path="/catalog/hobbies-leiture" element={<HobbiesAndLeisure/>}/>
        <Route path="/catalog/religion" element={<Religion/>}/>
        <Route path="/catalog/pedagogy" element={<Pedagogy/>}/>
        <Route path="/catalog/self-development" element={<SelfDevelopment/>}/>
        <Route path="/catalog/publicism" element={<Publicism/>}/>
        <Route path="/catalog/sports" element={<Sports/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/delivery" element={<Delivery/>}/>
        <Route path="/payments" element={<Payments/>}/>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/sign-up" element={<RegisterForm/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path={"/detail-page/:id"} element={<DetailPage/>}/>
      </Routes>
    </>
  );
}

export default App;
