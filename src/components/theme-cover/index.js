import React, { memo } from "react";

import { ThemeCoverWrapper } from "./style";

const ThemeCover = memo((props) => {
  const { info } = props;
  return (
    <ThemeCoverWrapper>
      <div className="cover-out">
        <img className="image" src={info.picUrl}></img>
        <div className="cover-name">{info.name}</div>
        <div className="cover-source">by {info.copywriter}</div>
      </div>
    </ThemeCoverWrapper>
  );
});

export default ThemeCover;
