import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 200) {
        setScroll(true);
      } else {
        setScroll(false);
      }
      window.removeEventListener("scroll", () => {});
    });
  }, []);

  return (
    <div className={`nav ${scroll && "nav__black"}`}>
      <img
        className="nav__logo"
        src="http://pngimg.com/uploads/netflix/netflix_PNG32.png"
        alt="Netflix Logo"
      />
      <img
        className="nav__profilePlaceholder"
        src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
        alt="Profile"
      />
    </div>
  );
}

export default Nav;
