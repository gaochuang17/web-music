import styled from "styled-components";

export const NewAlbumWrapper = styled.div`
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 690px;
    height: 186px;
    margin: 20px 0;
    background-color: #f5f5f5;
    border: 1px solid #d3d3d3;
  }

  .btn {
    width: 25px;
    height: 25px;
    background-image: url(${require("@/assets/img/sprite_02.png")});
  }
  .left {
    background-position: -260px -75px;
  }
  .right {
    background-position: -300px -75px;
  }

  .album {
    width: 640px;
    height: 150px;
  }
  .page {
    display: flex !important;
    justify-content: space-between;
    align-items: center;
  }
`;
