import { useState, useEffect } from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import "./App.css";
import { fetchdatafromapi } from "./utils/api";

import { useSelector, useDispatch } from "react-redux";

import { getapiconfiguration } from "./store/homeSlice";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home/Home";
import Details from "./pages/details/Details";
import searchResult from "./pages/searchResult/searchResult";
import Explore from "./pages/explore/Explore";
import Pagenotfound from "./pages/404/Pagenotfound";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  console.log(url);
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
    <BrowserRouter>
    <Routes>
      <Route>
        
      </Route>
    </Routes>
    
    </BrowserRouter>
   
  );
}

export default App;
