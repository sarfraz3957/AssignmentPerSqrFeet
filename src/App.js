import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import ApiData from "./ApiData";

export default function App() {
  const [listData, setListData] = useState([{}]);
  //   {
  //     activity: "",
  //     type: "",
  //     participants: "",
  //     price: "",
  //     link: "",
  //     key: "",
  //     accessibility: ""
  //   }
  // ]);

  const listHandler = (item) => {
    setListData([...listData, item]);
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          exact
          element={<Home list={listData} setListData={setListData} />}
        />
        <Route path="/Api" element={<ApiData listHandler={listHandler} />} />
      </Routes>
    </div>
  );
}
