import { useState, useEffect } from "react";

import "./App.css";
import { fetchdatafromapi } from "./utils/api";

import { useSelector, useDispatch } from 'react-redux'

import { getapiconfiguration } from "./store/homeSlice";

function App() {
  const dispatch = useDispatch();
  const {url} = useSelector((state)=>
    state.home
  );
  console.log(url)
  useEffect(() => {
    apitesting();
  }, []);
  const apitesting = () => {
    fetchdatafromapi("/movie/popular").then((res) => {
      console.log(res);
      dispatch(getapiconfiguration(res));
    });
  };

  return (
    <>
      <div className="app">
        {url?.total_pages}
      </div>
    </>
  );
}

export default App;
