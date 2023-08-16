import React, { useState, useEffect } from "react";
import "./HeroBanner.scss";
import { useNavigate } from "react-router-dom";



import useFetch from "../../../hooks/useFetch";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { data, loading } = useFetch("/movie/upcoming");
  useEffect(() => {
    const bg = data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  const searchqueryhandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="hero-banner">
      <div className="wrapper">
        <div className="hero-banner-content">
          <span className="title">Welcome</span>
          <span className="sub-title">
            Millions of movies,TV shows and people to discover . Explore Now{" "}
          </span>
          <div className="search-input">
            <input
              type="text"
              placeholder="search for movies and TV shows..... "
              onChange={(e) => setQuery(e.target.value)}
              onKeyup={searchqueryhandler}
            />
            <button> Search </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
