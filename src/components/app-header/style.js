import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;
  font-size: 14px;

  .content {
    height: 70px;
    /* background-color: blue; */
    display: flex;
    justify-content: space-between;
  }

  .divider {
    height: 5px;
    background-color: red;
  }
`;

export const HeaderLeft = styled.div`
  display: felx;
  .logo {
    display: block;
    width: 176px;
    height: 70px;
    /* background: url(${require("@/assets/img/sprite_01.png")}); */
    /* background-repeat: no-repeat; */
    background-position: 0 0;
    text-indent: -9999px;
  }

  .linkContainer {
    display: flex;
    justify-content: space-between;

    .link {
      width: 96px;
      height: 70px;
      line-height: 70px;
      text-align: center;
      position: relative;

      a {
        display: block;
        color: #ccc;
        text-decoration: none;
      }

      a:hover,
      .active {
        color: #fff;
        background-color: #000;
      }

      .active .icon {
        display: block;
        width: 12px;
        height: 7px;
        background-image: url(${require("@/assets/img/sprite_01.png")});
        background-repeat: no-repeat;
        background-position: -226px 0;
        position: absolute;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 0);
      }
    }
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  color: #ccc;
  font-size: 12px;

  .search {
    width: 158px;
    height: 32px;
    border-radius: 16px;

    input::placeholder {
      font-size: 12px;
    }
  }

  .center {
    width: 90px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border: 1px solid #666;
    border-radius: 16px;
    margin: 0 16px;
  }
`;
