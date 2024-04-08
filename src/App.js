import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import HeaderComp from "./components/header/HeaderComp";
import Footer from "./components/footer/Footer";

function App() {

  return (
    <div className="wrapper">
      <Router>
        <HeaderComp />
        <Routes>
          <Route path="/" Component={MainPage} />
          <Route path="/privacy-policy" Component={PrivacyPolicy} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App;