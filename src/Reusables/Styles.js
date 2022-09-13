import styled from "styled-components";

export const NavStyles = styled.div`
  height: 100px;
  width: 100%;
  z-index: 5;
  display: flex;
  justify-content: space-between;
  padding: 0 5%;
  position: sticky;
  top: 0;
  background: white;
  .logoWrapper {
    height: 100%;
    width: 250px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .logoImage {
    height: 70px;
    width: 70px;
    background: url("/logo.svg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
  }
  .logoName {
    font-family: Poiret One, sans-serif;
    font-size: 2em;
    font-weight: 600;
    margin-left: 25px;
  }
  .linksWrapper {
    height: 100%;
    display: flex;
    align-items: center;
  }
  .links {
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 60px;
    cursor: pointer;
    transition: all 0.25s ease-in;
    h4 {
      font-family: Montserrat, sans-serif;
      font-size: 0.8em;
      font-weight: 600;
      margin-top: 5px;
    }
    &:hover {
      color: #3e2b97;
    }
  }
`;
export const BannerStyles = styled.div`
  height: calc(100vh - 100px);
  width: 100%;
  display: flex;
  margin-bottom: 100px;
  align-items: center;
  justify-content: center;
  .image {
    height: 80%;
    width: 40%;
    background: url("banner.svg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    margin-right: 25px;
  }
  .text {
    height: 100%;
    width: 40%;
    padding-top: 200px;
    padding-right: 250px;
    h1 {
      font-family: Poiret One, sans-serif;
      letter-spacing: 1px;
      font-size: 3em;
      font-weight: 600;
      margin-bottom: 25px;
    }
    p {
      font-family: Montserrat, sans-serif;
      font-size: 1.2em;
    }
  }
  @media (max-width: 1366px) {
    .text {
      padding: 0;
      padding-right: 50px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      h1 {
        font-size: 2.5em;
      }
      p {
        font-size: 1.2em;
      }
    }
  }
  @media (max-width: 1080px) {
    height: 600px;
  }
`;
export const TopCryptoStyles = styled.div`
  height: fit-content;
  width: 100%;
  margin-bottom: 100px;
  padding: 0 5%;
  .gridWrapper {
    height: fit-content;
    width: 100%;
    margin-top: 25px;
  }
  .gridTabs {
    height: 80px;
    width: 100%;
    border-bottom: 1px solid #d3d3d3;
    display: flex;
    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      h4 {
        margin-right: 10px;
      }
    }
  }
  .numberBlock {
    width: 10%;
  }
  .nameBlock {
    cursor: pointer;
    width: 30%;
  }
  .priceBlock {
    width: 20%;
  }
  .capBlock {
    width: 20%;
  }
  .changeBlock {
    width: 20%;
  }
`;
export const HomeHeaderStyles = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-family: Poiret One, sans-serif;
    font-size: 2.5em;
  }
  .headerButton {
    height: 60px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid #3e2b97;
    cursor: pointer;
    transition: all 0.25s ease-in;
    h4 {
      font-family: Montserrat, sans-serif;
      font-weight: 600;
      font-size: 1em;
    }
    &:hover {
      background: #3e2b97;
      color: rgb(230, 230, 230);
    }
  }
`;
export const GlobalstatsStyles = styled.div`
  height: fit-content;
  width: 100%;
  margin-bottom: 50px;
  background: url("/statsbg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  .innerWrapper {
    height: 100%;
    width: 100%;
    padding: 0 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background: rgba(62, 43, 151, 0.7);
    color: white;
  }
  .statsWrapper {
    height: 150px;
    width: 600px;
    margin: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    letter-spacing: 2px;
    h3 {
      margin-bottom: 10px;
    }
  }
`;
export const NewsStyles = styled.div`
  height: fit-content;
  width: 100%;
  padding: 0 5%;
  margin-bottom: 50px;
  .gridWrapper {
    height: fit-content;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-gap: 2rem;
    margin-top: 50px;
  }
  .gridTab {
    height: 400px;
    width: 500px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;
export const FooterStyles = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #3e2b97;
  color: white;
  margin-top: 100px;
`;
export const CryptoMainWrapperStyles = styled.div`
  height: fit-content;
  width: 100%;
`;
export const CryptoSidebarStyles = styled.div`
  height: 100px;
  width: 100%;
  position: sticky;
  top: 100px;
  display: flex;
  align-items: center;
  background: white;
  padding: 0 5%;
  .searchbar {
    height: 60px;
    width: 250;
    border: 2px solid #3e2b97;
    padding: 0 25px;
    font-family: Montserrat, sans-serif;
    font-weight: 600;
    font-size: 0.9em;
    letter-spacing: 0.8px;
    &::placeholder {
      font-family: Montserrat, sans-serif;
      color: #3e2b97;
      font-weight: 600;
    }
    &:focus {
      outline: none;
    }
  }
`;
export const CryptoContentStyles = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 5%;
  margin-top: 25px;
  .cryptoCard {
    height: 300px;
    width: 300px;
    margin-right: 50px;
    margin-bottom: 50px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border: 1px solid rgb(240, 240, 240);
  }
  .cryptoHeader {
    height: 60px;
    width: 100%;
    border-bottom: 1px solid rgb(180, 180, 180);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 25px;
    font-size: 0.8em;
    font-weight: 800;
  }
  .cryptoIcon {
    height: 40px;
    width: 40px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .cryptoContent {
    padding: 10px 25px;
    > div {
      display: flex;
      align-items: center;
      margin: 10px 0;
      height: 25px;
      width: 100%;
      h4,
      h5 {
        margin: 0;
      }
      h4 {
        margin-left: 15px;
      }
    }
    > h5 {
      font-size: 1.1em;
      margin-top: 25px;
      cursor: pointer;
      transition: all 0.2s ease-in;
      &:hover {
        color: #3e2b97;
      }
    }
  }
`;
export const NewsMainStyles = styled.div`
  height: 100%;
  width: 100%;
  padding: 50px 5%;
  .newsHeader {
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .searchDD {
    height: 50px;
    width: 250px;
    position: relative;
  }
  .searchHeader {
    height: 50px;
    width: 100%;
    border-radius: 5px;
    border: 2px solid #3e2b97;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .searchList {
    height: 250px;
    width: 100%;
    background: white;
    overflow-y: auto;
    position: absolute;
    top: 65px;
    border-radius: 5px;
    border: 2px solid #3e2b97;
    transition: all 0.2s ease-in;
    transform-origin: top;
    transform: ${({ open }) => (open ? "scaleY(1)" : "scaleY(0)")};
  }
  .searchelement {
    height: 40px;
    width: 100%;
    border-bottom: 1px solid #3e2b97;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .newsgrid {
    height: fit-content;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-gap: 2rem;
    margin-top: 100px;
  }
`;
export const NewsCard = styled.div`
  height: 300px;
  width: 400px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin: 0 30px 50px 0;
  padding: 25px;
  .cardHeader {
    height: 120px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    h4 {
      width: 250px;
    }
  }
  .cardFooter {
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .newslink {
    cursor: pointer;
    display: flex;
    height: 25px;
    width: fit-content;
    align-items: center;
  }
  .sourceIcon {
    height: 25px;
    width: 25px;
    margin-right: 10px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }
  p {
    font-family: Roboto Slab, sans-serif;
  }
`;
export const NewsImage = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 5px;
  background: url(${(props) => props.url});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;
export const DropdownStyles = styled.div`
  height: 60px;
  width: 250px;
  position: relative;
  margin-left: 25px;
  .dropdownHeader {
    height: 60px;
    width: 100%;
    border: 2px solid #3e2b97;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #3e2b97;
  }
  .dropdownContent {
    height: fit-content;
    width: 100%;
    position: absolute;
    top: 65px;
    border: 2px solid #3e2b97;
    text-align: center;
    transition: all 0.2s ease-in;
    transform: ${(props) => (props.open ? "scaleY(1)" : "scaleY(0)")};
    transform-origin: top;
    background: white;
    color: #3e2b97;
  }
  .dropdownOption {
    height: 50px;
    width: 100%;
    border-bottom: 2px solid #3e2b97;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;
export const LoaderWrapper = styled.div`
  height: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SingleCryptoStyles = styled.div`
  height: fit-content;
  width: 100%;
  padding: 0 5%;
  margin-top: 50px;
  .cryptodetailsHeader {
    height: 200px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      letter-spacing: 1px;
      color: #3e2b97;
    }
    p {
      margin-top: 10px;
    }
  }
  .chartWrapper {
    height: fit-content;
    width: 100%;
    border-top: 1px solid #d3d3d3;
    border-bottom: 1px solid #d3d3d3;
    padding: 50px 0;
  }
  .linechartWrapper {
    height: fit-content;
  }
  .detailsWrapper {
    height: fit-content;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    > div {
      height: 600px;
      width: 400px;
      margin-top: 100px;
      h1 {
        margin-bottom: 10px;
      }
    }
  }
  .detailsBlock {
    height: 100px;
    width: 100%;
    padding: 0 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #3e2b97;
    > div {
      height: 100%;
      width: 70%;
      display: flex;
      align-items: center;
      h4 {
        font-weight: 500;
        margin-left: 20px;
      }
    }
    > h4 {
      font-weight: 800;
    }
  }
  .descriptionWrapper {
    height: fit-content;
    width: 100%;
    padding: 0 5%;
    margin-top: 100px;
    h1,
    h3 {
      color: #3e2b97;
      margin: 25px 0;
    }
    p {
      font-family: Roboto Slab, sans-serif;
      margin: 10px 0;
    }
  }
  .linksWrapper {
    height: fit-content;
    width: 100%;
    padding: 0 5%;
    margin-top: 100px;
    h1 {
      margin-bottom: 25px;
    }
  }
  .linksBlock {
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #3e2b97;
    a {
      font-family: Montserrat, sans-serif;
      font-weight: 600;
    }
  }
`;
export const ChartStyles = styled.div`
  height: fit-content;
  width: 100%;
  padding: 0 5%;
  .chartHeader {
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    letter-spacing: 1px;
  }
  .price-container {
    display: flex;
    width: 40%;
    justify-content: space-between;
  }
`;
