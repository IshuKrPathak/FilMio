import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { fetchdatafromapi } from "./utils/api";

import { useSelector, useDispatch } from "react-redux";

import { getapiconfiguration } from "./store/homeSlice";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home/Home";
import Details from "./pages/details/Details";
import SearchResult from "./pages/searchResult/SearchResult";
import Explore from "./pages/explore/Explore";
import Pagenotfound from "./pages/404/Pagenotfound";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  console.log(url);
  useEffect(() => {
    fetchapiconfig();
  }, []);
  const fetchapiconfig = () => {
    fetchdatafromapi("/configuration").then((res) => {
      console.log(res);
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",

      }
      dispatch(getapiconfiguration(url));
    });
  };

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType/:id" element={<Explore />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
