import styled from "styled-components";

export const DiscoverWrapper = styled.div`
  .top {
    height: 30px;
    background-color: red;
    line-height: 29px;
  }
`;

export const TopMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 600px;
  margin-left: 430px;

  .item {
    width: 50px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    margin-top: 2px;
    /* padding: 0 10px; */

    a {
      display: block;
      width: 100%;
      height: 100%;
      color: #ffffff;
      text-decoration: none;
    }
  }

  /* .item {
    &:hover {
      border: 0px solid transparent;
      border-radius: 10px;
      background-color: #333;
    }
  } */

  .item:hover,
  .item .active {
    border: 0px solid transparent;
    border-radius: 10px;
    background-color: #333;
  }
`;
