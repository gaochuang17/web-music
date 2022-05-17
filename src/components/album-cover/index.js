import React, { memo } from "react";

import { AlbumCoverWrapper } from "./style";

import { getSizeImage } from "@/utils/format-utils.js";

const AlbumCover = memo((props) => {
  const { info, size = "100px", width = "118px", bgp = "-570px" } = props;
  return (
    <AlbumCoverWrapper size={size} width={width} bgp={bgp}>
      <div className="album-image">
        <img src={getSizeImage(info.picUrl, 100)} alt="" />
        <a href="/abc"></a>
      </div>
      <div className="album-info">
        <div className="name">{info.name}</div>
        <div className="artist">{info.artist.name}</div>
      </div>
    </AlbumCoverWrapper>
  );
});

export default AlbumCover;
