import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../Home";
import Header from "../Header/Header";
import Error from "../404";
import DetailPage from "../DetailPage/DetailPage";
import Login from "../Login/Login";

const Navigation = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
        <Route path="/workshops/:id" element={<DetailPage />} />
      </Routes>
    </Router>
  );
};

export default Navigation;
