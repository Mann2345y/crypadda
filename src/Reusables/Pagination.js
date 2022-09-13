import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;
const NumbersBlock = styled.div`
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: ${(props) => (props.active ? "#3e2b97" : "white")};
  color: ${(props) => (props.active ? "white" : "black")};
  margin: 0 25px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Pagination = ({ currentpage, setCurrentpage }) => {
  const pageNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <Wrapper>
      {pageNumbers.map((item, index) => (
        <NumbersBlock
          key={index}
          onClick={() => {
            setCurrentpage(item);
          }}
          active={currentpage === item}
        >
          <h6>{item + 1}</h6>
        </NumbersBlock>
      ))}
    </Wrapper>
  );
};

export default Pagination;
