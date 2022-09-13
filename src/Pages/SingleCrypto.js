import HTMLReactParser from "html-react-parser";
import millify from "millify";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCoinDetails } from "../Redux/coinReducer";
import Footer from "../Reusables/Footer";
import Loader from "../Reusables/Loader";
import LineChart from "../Reusables/LineChart";

import {
  CheckIcon,
  CoinIcon,
  ExchangeIcon,
  ExclamationCircleIcon,
  FundIcon,
  RankIcon,
  StopIcon,
  TrophyIcon,
  VolumeIcon,
} from "../Reusables/Icons";
import NavBar from "../Reusables/NavBar";
import {
  DropdownStyles,
  LoaderWrapper,
  SingleCryptoStyles,
} from "../Reusables/Styles";
import { getCoinHistory } from "../Redux/coinhistoryReducer";

const SingleCrypto = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [openTimeselect, setOpenTimeselect] = useState(false);
  const [selectTime, setSelectTime] = useState("7d");
  const { data: cryptoDetails, status: coinStatus } = useSelector(
    (state) => state.coinDetail
  );
  const { data: coinHistory, status: historyStatus } = useSelector(
    (state) => state.coinHistory
  );
  useEffect(() => {
    dispatch(getCoinDetails(id));
    dispatch(getCoinHistory(id, selectTime));
  }, [dispatch, id, selectTime]);
  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];
  const stats = [
    {
      title: "Price to USD",
      value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
      icon: <CoinIcon size={28} />,
    },
    { title: "Rank", value: cryptoDetails?.rank, icon: <RankIcon size={28} /> },
    {
      title: "24h Volume",
      value: `$ ${
        cryptoDetails?.["24hVolume"] && millify(cryptoDetails?.["24hVolume"])
      }`,
      icon: <VolumeIcon size={28} />,
    },
    {
      title: "Market Cap",
      value: `$ ${
        cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
      }`,
      icon: <CoinIcon size={28} />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${
        cryptoDetails?.allTimeHigh?.price &&
        millify(cryptoDetails?.allTimeHigh?.price)
      }`,
      icon: <TrophyIcon size={28} />,
    },
  ];
  const genericStats = [
    {
      title: "Number Of Markets",
      value: cryptoDetails?.numberOfMarkets,
      icon: <FundIcon size={28} />,
    },
    {
      title: "Number Of Exchanges",
      value: cryptoDetails?.numberOfExchanges,
      icon: <ExchangeIcon size={28} />,
    },
    {
      title: "Aprroved Supply",
      value: cryptoDetails?.supply?.confirmed ? (
        <CheckIcon size={28} />
      ) : (
        <StopIcon size={28} />
      ),
      icon: <ExclamationCircleIcon size={28} />,
    },
    {
      title: "Total Supply",
      value: `$ ${
        cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)
      }`,
      icon: <ExclamationCircleIcon size={28} />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        cryptoDetails?.supply?.circulating &&
        millify(cryptoDetails?.supply?.circulating)
      }`,
      icon: <ExclamationCircleIcon size={28} />,
    },
  ];
  return (
    <>
      <NavBar />
      {coinStatus === "loading" || historyStatus === "loading" ? (
        <LoaderWrapper>
          <Loader height="200px" width="200px" />
        </LoaderWrapper>
      ) : (
        <SingleCryptoStyles>
          <div className="cryptodetailsHeader">
            <h1>
              {cryptoDetails.name}, ({cryptoDetails.symbol}) Price
            </h1>
            <p>
              {cryptoDetails.name} live price in US Dollar (USD). View value
              statistics, market cap and supply.
            </p>
          </div>
          <div className="chartWrapper">
            <DropdownStyles open={openTimeselect}>
              <div
                className="dropdownHeader"
                onClick={() => setOpenTimeselect(true)}
              >
                <h4>{selectTime}</h4>
              </div>
              <div className="dropdownContent">
                {time.map((item, index) => (
                  <div
                    className="dropdownOption"
                    key={index}
                    onClick={() => {
                      setSelectTime(item);
                      setOpenTimeselect(false);
                    }}
                  >
                    <h4>{item}</h4>
                  </div>
                ))}
              </div>
            </DropdownStyles>
            {Object.keys(coinHistory).length > 0 && (
              <LineChart
                coinHistory={coinHistory}
                currentPrice={millify(cryptoDetails?.price)}
                coinName={cryptoDetails?.name}
              />
            )}
          </div>
          <div className="detailsWrapper">
            <div>
              <div className="detailsHeader">
                <h1>{cryptoDetails.name} Value Statistics</h1>
                <p>
                  An overview showing the statistics of {cryptoDetails.name},
                  such as the base and quote currency, the rank, and trading
                  volume.
                </p>
              </div>
              {stats.map((item, index) => (
                <div className="detailsBlock" key={index}>
                  <div>
                    {item.icon}
                    <h4>{item.title}</h4>
                  </div>
                  <h4>{item.value}</h4>
                </div>
              ))}
            </div>
            <div>
              <div className="detailsHeader">
                <h1>{cryptoDetails.name} Other Stats Info</h1>
                <p>
                  An overview showing the statistics of {cryptoDetails.name},
                  such as the base and quote currency, the rank, and trading
                  volume.
                </p>
              </div>
              {genericStats.map((item, index) => (
                <div className="detailsBlock" key={index}>
                  <div>
                    {item.icon}
                    <h4>{item.title}</h4>
                  </div>
                  <h4>{item.value}</h4>
                </div>
              ))}
            </div>
          </div>
          <div className="descriptionWrapper">
            <h1>What is {cryptoDetails.name}?</h1>
            {cryptoDetails.description &&
              HTMLReactParser(cryptoDetails.description)}
          </div>
          <div className="linksWrapper">
            <h1>{cryptoDetails.name} Links</h1>
            {cryptoDetails.links?.map((link, index) => (
              <div className="linksBlock" key={index}>
                <h2>{link.type}</h2>
                <a href={link.url} target="_blank" rel="noreferrer">
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </SingleCryptoStyles>
      )}

      <Footer />
    </>
  );
};

export default SingleCrypto;
