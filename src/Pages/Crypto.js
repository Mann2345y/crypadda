import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import NavBar from "../Reusables/NavBar";
import Footer from "../Reusables/Footer";
import {
  CryptoContentStyles,
  CryptoMainWrapperStyles,
  CryptoSidebarStyles,
  DropdownStyles,
  LoaderWrapper,
} from "../Reusables/Styles";
import { useDispatch, useSelector } from "react-redux";
import { getCoins } from "../Redux/coinsReducer";
import Loader from "../Reusables/Loader";
import millify from "millify";
import { useNavigate } from "react-router-dom";
import Pagination from "../Reusables/Pagination";

const Crypto = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data: coins, status } = useSelector((state) => state.coins);
  const [currentpage, setCurrentpage] = useState(0);
  const [filter, setFilter] = useState("marketCap");
  const [order, setOrder] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const [openOrder, setOpenOrder] = useState(false);
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const offsetvalue = currentpage * 100;
    dispatch(getCoins(100, offsetvalue, filter, order));
  }, [filter, order, dispatch, currentpage]);

  useEffect(() => {
    const resultsArray = [];
    if (Object.keys(coins).length > 0) {
      coins.forEach((item) => {
        if (item.name.includes(search)) {
          resultsArray.push(item);
        }
      });
      setResult(resultsArray);
    } else {
      setResult(coins);
    }
  }, [search, coins]);

  return (
    <motion.div
      key="crypto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <NavBar />
      <CryptoMainWrapperStyles>
        <CryptoSidebarStyles>
          <input
            className="searchbar"
            type="text"
            placeholder="Search for your coin"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <DropdownStyles open={openFilter}>
            <div
              className="dropdownHeader"
              onClick={() => setOpenFilter(!openFilter)}
            >
              {filter === "price" && <h3>Price</h3>}
              {filter === "marketCap" && <h3>Market Cap</h3>}
              {filter === "24hVolume" && <h3>24 Hour Volume</h3>}
              {filter === "change" && <h3>Change In Price</h3>}
            </div>
            <div className="dropdownContent">
              <div
                className="dropdownOption"
                onClick={() => {
                  setFilter("price");
                  setOpenFilter(false);
                }}
              >
                <h3>Price</h3>
              </div>
              <div
                className="dropdownOption"
                onClick={() => {
                  setFilter("marketCap");
                  setOpenFilter(false);
                }}
              >
                <h3>Market Cap</h3>
              </div>
              <div
                className="dropdownOption"
                onClick={() => {
                  setFilter("24hVolume");
                  setOpenFilter(false);
                }}
              >
                <h3>24 Hour Volume</h3>
              </div>
              <div
                className="dropdownOption"
                onClick={() => {
                  setFilter("change");
                  setOpenFilter(false);
                }}
              >
                <h3>Change In Price</h3>
              </div>
            </div>
          </DropdownStyles>
          <DropdownStyles open={openOrder}>
            <div
              className="dropdownHeader"
              onClick={() => setOpenOrder(!openOrder)}
            >
              <h3>{order ? "Ascending" : "Descending"}</h3>
            </div>
            <div className="dropdownContent">
              <div
                className="dropdownOption"
                onClick={() => {
                  setOrder(true);
                  setOpenOrder(false);
                }}
              >
                <h3>Ascending</h3>
              </div>
              <div
                className="dropdownOption"
                onClick={() => {
                  setOrder(false);
                  setOpenOrder(false);
                }}
              >
                <h3>Descending</h3>
              </div>
            </div>
          </DropdownStyles>
        </CryptoSidebarStyles>
        <CryptoContentStyles>
          {status === "loading" ? (
            <LoaderWrapper>
              <Loader height="200px" width="200px" />
            </LoaderWrapper>
          ) : (
            <>
              {Object.keys(result).length > 0 &&
                result.map((item, index) => (
                  <div className="cryptoCard" key={index}>
                    <div className="cryptoHeader">
                      <h4>{item.name}</h4>
                      <div
                        className="cryptoIcon"
                        style={{ backgroundImage: `url(${item.iconUrl})` }}
                      ></div>
                    </div>
                    <div className="cryptoContent">
                      <div>
                        <h5>Price : </h5>
                        <h4>$ {millify(item.price)}</h4>
                      </div>
                      <div>
                        <h5>Change in price : </h5>
                        <h4>{item.change} %</h4>
                      </div>
                      <div>
                        <h5>Market Cap : </h5>
                        <h4>$ {millify(item.marketCap)}</h4>
                      </div>
                      <div>
                        <h5>24 Hour Volume : </h5>
                        <h4>${millify(item["24hVolume"])} </h4>
                      </div>
                      <h5 onClick={() => navigate(`/crypto/${item.uuid}`)}>
                        More Details
                      </h5>
                    </div>
                  </div>
                ))}
            </>
          )}
          <Pagination
            setCurrentpage={setCurrentpage}
            currentpage={currentpage}
          />
        </CryptoContentStyles>
      </CryptoMainWrapperStyles>
      <Footer />
    </motion.div>
  );
};

export default Crypto;
