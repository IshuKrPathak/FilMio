import { useState, useEffect } from "react";

import "./App.css";
import { fetchdatafromapi } from "./utils/api";

function App() {
  useEffect(() => {
    apitesting();
  }, []);
  const apitesting = () => {
    fetchdatafromapi("/movie/popular").then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      <div className="app">app</div>
    </>
  );
}

export default App;
