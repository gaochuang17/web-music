import styled from "styled-components";

export const SettleSingerWrapper = styled.div`
  padding: 20px;

  .singer-list {
    .singer-item {
      display: flex;
      height: 62px;
      margin-top: 20px;
      text-decoration: none;

      &:hover {
        background-color: #f4f4f4;
      }
    }

    /* .item-image {
      width: 62px;
      height: 62px;
    } */

    .item-info {
      margin: 8px 0 0 10px;
      .item-alias {
        font-size: 13px;
        font-weight: 700;
        color: #333;
        white-space: nowrap;
      }
    }
  }

  .apply-for {
    margin-top: 12px;
    a {
      color: #333;
      font-weight: 700;
      text-align: center;
      display: block;
      height: 31px;
      line-height: 31px;
      border-radius: 4px;
      background-color: #fafafa;
      border: 1px solid #c3c3c3;
      text-decoration: none;
    }
  }
`;
