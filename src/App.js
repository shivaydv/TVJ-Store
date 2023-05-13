import "./Styles/App.css"

import Header from "./Components/Header";
import Home from "./Components/Home";
import Products from "./Components/Products";
import Footer from "./Components/Footer";
import Notfound from "./Components/Notfound"

import { BrowserRouter as Router ,Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>

      <Header/>

      <Routes>
        <Route path="/" element={<><Home/><Products/><Footer/></>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="*" element={<Notfound/>}/>
      </Routes>
      
      

    </Router>
  );
}

export default App;
