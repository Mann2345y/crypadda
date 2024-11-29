import React, { useState } from "react";
import { motion } from "framer-motion";
import NavBar from "../Reusables/NavBar";
import Footer from "../Reusables/Footer";
import Loader from "../Reusables/Loader";
import {
  NewsMainStyles,
  NewsImage,
  NewsCard,
  LoaderWrapper,
} from "../Reusables/Styles";
import { useEffect } from "react";
import { getNews } from "../Redux/newsReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const News = () => {
  const dispatch = useDispatch();
  const [optionsArray, setOptionsArray] = useState([]);
  const [openOptions, setOpenOptions] = useState(false);
  const [searchstr, setSearchstr] = useState("crypto");
  const { data: coins } = useSelector((state) => state.coins);
  const { data: news, status } = useSelector((state) => state.news);
  useEffect(() => {
    if (Object.keys(coins).length > 0) {
      const nameArray = [];
      coins.forEach((item) => {
        return nameArray.push(item.name);
      });
      setOptionsArray(nameArray);
    }
  }, [coins]);
  useEffect(() => {
    dispatch(getNews(searchstr, 10));
  }, [dispatch, searchstr]);
  return (
    <motion.div
      key="news"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <NavBar />
      <NewsMainStyles open={openOptions}>
        <div className="newsHeader">
          <h1>Top Crypto News This Week</h1>
          <div className="searchDD">
            <div
              className="searchHeader"
              onClick={() => setOpenOptions(!openOptions)}
            >
              <h4>{searchstr}</h4>
            </div>
            <div className="searchList">
              {Object.keys(optionsArray).length > 0 &&
                optionsArray.map((item, index) => (
                  <div
                    className="searchelement"
                    key={index}
                    onClick={() => {
                      setOpenOptions(false);
                      setSearchstr(item);
                    }}
                  >
                    <h4>{item}</h4>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <>
          {status === "loading" ? (
            <LoaderWrapper>
              <Loader height="200px" width="200px" />
            </LoaderWrapper>
          ) : (
            <div className="newsgrid">
              {news?.map((item, index) => (
                <NewsCard key={index}>
                  <a href={item?.url}>
                    <div className="cardHeader">
                      <h4>
                        {item?.title?.slice(0, 50)}
                        ...
                      </h4>
                      <NewsImage url={item?.imageurl} />
                    </div>
                    <p>{item?.body?.slice(0, 100)} ...</p>
                    <div className="cardFooter">
                      <div className="newslink">
                        <div
                          className="sourceIcon"
                          style={{
                            backgroundImage: `url(${item?.source_info?.img})`,
                          }}
                        />
                        <h5>{item?.source_info?.name}</h5>
                      </div>
                      <h4>7 hours ago</h4>
                    </div>
                  </a>
                </NewsCard>
              ))}
            </div>
          )}
        </>
      </NewsMainStyles>
      <Footer />
    </motion.div>
  );
};

export default News;
