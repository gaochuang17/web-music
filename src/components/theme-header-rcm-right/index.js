import React, { memo } from "react";

import { Link } from "react-router-dom";

import { ThemeHeaderRcmRightWrapper } from "./style";

const ThemeHeaderRcmRight = memo((props) => {
  const { title, moreLink } = props;
  return (
    <ThemeHeaderRcmRightWrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
      </div>
      <div className="right">
        <Link to={moreLink}>查看全部{`>`}</Link>
      </div>
    </ThemeHeaderRcmRightWrapper>
  );
});

export default ThemeHeaderRcmRight;
