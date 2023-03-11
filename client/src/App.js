import React from "react";
import "./App.css";
import Navbar from "./componenets/Navbar";
import Form from "./componenets/Form";
import Footer from "./componenets/Footer";
import Home from "./componenets/Home";
import DateForm from "./componenets/DateForm";
import ReferenceKey from "./componenets/Reference_keyCompenents/HeaderReference_Key";
import Status from "./componenets/status/Status";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/dateform" element={<DateForm />} />
        <Route path="/Reference_Key" element={<ReferenceKey />} />
        <Route path="/Status" element={<Status />} />
      </Routes>

      {/* <Navbar /> */}
      {/* <Header /> */}
      {/* <Form /> */}
      {/* <Body /> */}
      <Footer />
    </div>
  );
}

export default App;
