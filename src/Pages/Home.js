import React, { useState } from "react";
import { motion } from "framer-motion";
import Footer from "../Reusables/Footer";
import { SortIcon } from "../Reusables/Icons";
import NavBar from "../Reusables/NavBar";
import {
  BannerStyles,
  GlobalstatsStyles,
  HomeHeaderStyles,
  LoaderWrapper,
  NewsCard,
  NewsImage,
  NewsMainStyles,
  NewsStyles,
  TopCryptoStyles,
} from "../Reusables/Styles";
import { useSelector } from "react-redux";
import Loader from "../Reusables/Loader";
import millify from "millify";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { data: stats, status: statsStatus } = useSelector(
    (state) => state.stats
  );
  const { data: coins, status: coinsStatus } = useSelector(
    (state) => state.coins
  );
  const { data: news, status: newsStatus } = useSelector((state) => state.news);
  const [coinData, setCoinData] = useState([]);
  useEffect(() => {
    if (Object.keys(coins).length > 0) {
      const coinsSubarray = [];
      for (let i = 0; i < 10; i++) {
        coinsSubarray.push(coins[i]);
      }
      setCoinData([...coinsSubarray]);
    }
  }, [coins]);
  return (
    <motion.div
      key="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <NavBar />
      <BannerStyles>
        <div className="image"></div>
        <div className="text">
          <h1>CrypAdda, One stop for all your crypto research</h1>
          <p>
            Track your favourite coins, exchanges and get all the important news
            of the crypto news at one destination.
          </p>
        </div>
      </BannerStyles>
      <TopCryptoStyles>
        <HomeHeaderStyles>
          <h1>Top Crypto Currencies : </h1>
          <div className="headerButton" onClick={() => navigate("/crypto")}>
            <h4>Show More</h4>
          </div>
        </HomeHeaderStyles>
        <div className="gridWrapper">
          <div className="gridTabs">
            <div className="numberBlock"></div>
            <div className="nameBlock">
              <h4>Name</h4>
              <SortIcon size={21} />
            </div>
            <div className="priceBlock">
              <h4>Price</h4>
              <SortIcon size={21} />
            </div>
            <div className="capBlock">
              <h4>Market Cap</h4>
              <SortIcon size={21} />
            </div>
            <div className="changeBlock">
              <h4>%age Change</h4>
              <SortIcon size={21} />
            </div>
          </div>
          {coinsStatus === "loading" ? (
            <LoaderWrapper>
              <Loader height="200px" width="200px" />
            </LoaderWrapper>
          ) : (
            <>
              {coinData?.map((item, index) => (
                <div className="gridTabs" key={index}>
                  <div className="numberBlock">
                    <h4>{index + 1}</h4>
                  </div>
                  <div
                    className="nameBlock"
                    onClick={() => navigate(`/crypto/${item.uuid}`)}
                  >
                    <h4>{item.name}</h4>
                  </div>
                  <div className="priceBlock">
                    <h4>$ {millify(item.price)}</h4>
                  </div>
                  <div className="capBlock">
                    <h4>$ {millify(item.marketCap)}</h4>
                  </div>
                  <div className="changeBlock">
                    <h4>{item.change} %</h4>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </TopCryptoStyles>
      <GlobalstatsStyles>
        <div className="innerWrapper">
          {statsStatus === "loading" ? (
            <Loader height="200px" width="200px" />
          ) : (
            <>
              <div className="statsWrapper">
                <h3>Total Exchanges</h3>
                <h1>{stats.totalExchanges}</h1>
              </div>
              <div className="statsWrapper">
                <h3>Total Cryptocurrencies</h3>
                <h1>{millify(stats.totalCoins)}</h1>
              </div>
              <div className="statsWrapper">
                <h3>Total Market Cap</h3>
                <h1>$ {millify(stats.totalMarketCap)}</h1>
              </div>
              <div className="statsWrapper">
                <h3>Total 24h Volume</h3>
                <h1>$ {millify(stats.total24hVolume)}</h1>
              </div>
              <div className="statsWrapper">
                <h3>Total Markets</h3>
                <h1>{millify(stats.totalMarkets)}</h1>
              </div>
            </>
          )}
        </div>
      </GlobalstatsStyles>
      <NewsStyles>
        <HomeHeaderStyles>
          <h1>Top Crypto News : </h1>
          <div className="headerButton" onClick={() => navigate("/news")}>
            <h4>Show More</h4>
          </div>
        </HomeHeaderStyles>
        <NewsMainStyles>
          {newsStatus === "loading" ? (
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
        </NewsMainStyles>
      </NewsStyles>
      <Footer />
    </motion.div>
  );
};

export default Home;
