import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "./Header.scss";

import ContentWrapper from "../contentWrapper/contentWrapper";
import logo from "../../assets/FilMio-logo.png";

const Header = () => {
    const [show, setShow] = useState("top");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [query, setQuery] = useState("");
    const [showSearch, setShowSearch] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
      const openSearch = () => {
        setMobileMenu(false)
        setShowSearch(true)

      }
      const openMobileMenu = () =>{
        setMobileMenu(true)
        setShowSearch(false)
      }

    return (
     <header className={`header ${mobileMenu ? "mobileView":""}${show}`}>
        <ContentWrapper>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <ul className="menu-items">
            <l1 className="menu-item">Movies</l1>
            <l1 className="menu-item">Tv shows </l1>
            <l1 className="menu-item">
              <HiOutlineSearch/>
            </l1>
          </ul>
          <div className="mobile-menu-items">
            <HiOutlineSearch/>
            {mobileMenu ? (
              <VscChromeClose onClick={()=>setMobileMenu(false)}/>
              // when is is on mobile view

            ) : (
              <SlMenu onClick={openMobileMenu}/>
              // when it is on desktop menu(hamburger menu)
            )}
           
            

          </div>
        </ContentWrapper>
        </header>
      
    );
};

export default Header;