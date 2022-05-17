import styled from "styled-components";

export const AlbumCoverWrapper = styled.div`
  margin-top: 10px;
  .album-image {
    position: relative;
    width: ${(props) => props.width};
    height: ${(props) => props.size};
  }

  img {
    width: ${(props) => props.size};
    height: ${(props) => props.size};
  }
  a {
    position: absolute;
    top: 0;
    left: 0;
    /* display: block; */
    width: 100%;
    height: 100%;
    background: url(${require("@/assets/img/sprite_cover.png")}) no-repeat 0
      9999px;
    background-position: 0 ${(props) => props.bgp};
  }

  .album-info {
    width: 100px;
    font-size: 12px;

    .name {
      color: #000;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .artist {
      color: #666;
    }
  }
`;
