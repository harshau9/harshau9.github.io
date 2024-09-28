// import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaReact, FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { navMenus } from "./config";
import "./style.scss";
//extras
import { useState, useEffect } from "react";
// import { Navbar, Nav, Container } from "react-bootstrap";
// import { HashLink } from "react-router-hash-link";
// import { BrowserRouter as Router } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  //extra
  window.addEventListener("scroll",function(){
    const header=document.querySelector(".navbar")
    header.classList.toggle("active",window.scrollY>100)
  })

// let navResume= document.querySelector(".name")
// navResume.onClick=() =>{
//   window.open(
//     "https://drive.google.com/file/d/1BMgL5AkZSlz8vUt8TJQWapNgxfD8o4u0/view?usp=share_link",
//     "_blank"
//   )
// }

  // const [activeLink, setActiveLink] = useState("home");
  // const [scrolled, setScrolled] = useState(false);
  // useEffect(() => {
  //   const onScroll = () => {
  //     if (window.scrollY > 50) {
  //       setScrolled(true);
  //     } else {
  //       setScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", onScroll);
  // }, []);

  // const onUpdateActiveLink = (value) => {
  //   setActiveLink(value);
  // };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to={"/"} className="navbar__container__logo">
            <h3 className="myname">Harsha Umesh</h3>
          </Link>
          <ul
            className={
              click
                ? "navbar__container__menu active"
                : "navbar__container__menu"
            }
          >
            {navMenus.map((item, key) => (
              <li key={key} className="navbar__container__menu__item">
                <a href={item.to}
                  // to={item.to}
                  className="navbar__container__menu__item__links"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="https://drive.google.com/uc?export=download&id=1QJg5fEi7JfRjQqGmsfSedrpDvCx33Ufb"
            
            // style={{fontSize:"1.25em", cursor: "pointer"}}
          >
            <button
            // style={{fontSize:"1.25em", cursor: "pointer"}}
            className="name"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1QJg5fEi7JfRjQqGmsfSedrpDvCx33Ufb/view?usp=share_link",
                "_blank"
              )
            }>Resume</button>
          </a>
          <div className="nav-icon" onClick={handleClick}>
            {click ? <HiX size={30} /> : <FaBars size={30} />}
          </div>
        </div>
      </nav>
      {/* <nav className="navbar">
        <div className="navbar__container">
          <Link to={"/"} className="navbar__container__logo">
            <h3 className="name">Harsha Umesh</h3>
          </Link>
          <ul
            className={
              click
                ? "navbar__container__menu active"
                : "navbar__container__menu"
            }
          >
            {navMenus.map((item, key) => (
              <li key={key} className="navbar__container__menu__item">
                <Link
                  to={item.to}
                  className="navbar__container__menu__item__links"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <a
            href="https://drive.google.com/uc?export=download&id=1BMgL5AkZSlz8vUt8TJQWapNgxfD8o4u0"
            className="name"
            style={{fontSize:"1.25em", cursor: "pointer"}}
          >
            Resume
          </a>
          <div className="nav-icon" onClick={handleClick}>
            {click ? <HiX size={30} /> : <FaBars size={30} />}
          </div>
        </div>
      </nav> */}
      
    </div>
  );
};

export default Navbar;
