import React from "react";
import { NavStyles } from "./Styles";
import { HomeIcon, CoinIcon, NewsIcon } from "./Icons";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavStyles>
        <div className="logoWrapper" onClick={() => navigate("/")}>
          <div className="logoImage"></div>
          <h3 className="logoName">CrypAdda...</h3>
        </div>
        <div className="linksWrapper">
          <div className="links" onClick={() => navigate("/")}>
            <HomeIcon size={28} />
            <h4>Home</h4>
          </div>
          <div className="links" onClick={() => navigate("/crypto")}>
            <CoinIcon size={28} />
            <h4>CryptoCoins</h4>
          </div>
          <div className="links" onClick={() => navigate("/news")}>
            <NewsIcon size={28} />
            <h4>News</h4>
          </div>
        </div>
      </NavStyles>
    </>
  );
};

export default NavBar;
