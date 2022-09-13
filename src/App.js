import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./scrollToTop";
import Home from "./Pages/Home";
import Crypto from "./Pages/Crypto";
import SingleCrypto from "./Pages/SingleCrypto";
import News from "./Pages/News";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getStats } from "./Redux/statsReducer";
import { getCoins } from "./Redux/coinsReducer";
import { getNews } from "./Redux/newsReducer";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStats());
    dispatch(getCoins(100));
    dispatch(getNews("crypto", 6));
  }, [dispatch]);
  return (
    <AnimatePresence>
      <ScrollToTop>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/News" element={<News />} />
          <Route exact path="/crypto" element={<Crypto />} />
          <Route path="/crypto/:id" element={<SingleCrypto />} />
        </Routes>
      </ScrollToTop>
    </AnimatePresence>
  );
};

export default App;
