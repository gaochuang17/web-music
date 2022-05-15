import styled from "styled-components";

export const TopBannerWrapper = styled.div`
  /* background: url(${(props) => props.bgImage}) center center/6000px; */

  .banner {
    height: 270px;
    width: 980px;
    margin: 0 auto;
    background-color: red;

    display: flex;
    justify-content: center;
    position: relative;
  }
`;

export const BannerLeft = styled.div`
  width: 730px;

  .banner-item {
    height: 270px;
    width: 100%;

    .image {
      width: 100%;
    }
  }
`;

export const BannerRight = styled.div`
  //   width: 370px;

  a {
    display: block;
    width: 250px;
    height: 270px;
    background: url(${require("@/assets/img/download.png")}) no-repeat;
    background-position: 0 0;
  }
`;

export const BannerControl = styled.div`
  .btn {
    width: 37px;
    height: 63px;
    background-image: url(${require("@/assets/img/banner_sprite.png")});
    background-position: 0 -360px;
    background-color: transparent;
    position: absolute;
  }

  .left {
    top: 50%;
    left: -68px;
    transform: translate(0, -50%);
    // margin-top: -18.5px;
    background-position: 0 -360px;
  }
  .right {
    top: 50%;
    right: -68px;
    transform: translate(0, -50%);

    background-position: 0 -508px;
  }
  .btn:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
