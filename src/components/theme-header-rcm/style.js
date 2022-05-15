import styled from "styled-components";

export const ThemeHeaderRcmWrapper = styled.div`
  height: 33px;
  line-height: 33px;
  background-position: -225px -156px;

  border-bottom: 2px solid red;
  padding-bottom: 5px;
  display: flex;
  justify-content: space-between;

  .left {
    .title {
      display: inline-block;
      margin: 0 20px 0 30px;
      color: #333333;
    }
    .item {
      display: inline-block;
      padding-right: 20px;
      .item-a {
        padding-right: 20px;
      }
    }
  }

  .right {
    .icon {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 5px;
      background: url(${require("@/assets/img/sprite_02.png")}) no-repeat;
      background-position: 0 -240px;
    }
  }
`;
