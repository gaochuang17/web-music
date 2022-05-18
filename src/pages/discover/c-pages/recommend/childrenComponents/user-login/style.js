import styled from "styled-components";

export const UserLoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 248px;
  height: 126px;
  padding: 16px 22px;

  background-image: url(${require("@/assets/img/sprite_02.png")});

  p {
    line-height: 25px;
    color: #333333;
  }

  a {
    display: inline-block;
    width: 100px;
    height: 31px;
    margin-top: 15px;
    background-image: url(${require("@/assets/img/sprite_02.png")});
    background-position: 0 -195px;

    text-align: center;
    line-height: 31px;
    text-decoration: none;
    color: #ffffff;
  }
`;
