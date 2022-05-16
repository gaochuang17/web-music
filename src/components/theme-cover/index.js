import React, { memo } from "react";

import { getSizeImage } from "@/utils/format-utils";

import { ThemeCoverWrapper } from "./style";

const ThemeCover = memo((props) => {
  const { info } = props;
  return (
    <ThemeCoverWrapper>
      <div className="cover-out">
        <img className="image" src={getSizeImage(info.picUrl, 100)}></img>
        <div className="cover-name">{info.name}</div>
        <div className="cover-source">by {info.copywriter}</div>
      </div>
    </ThemeCoverWrapper>
  );
});

export default ThemeCover;
