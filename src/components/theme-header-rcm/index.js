import React, { memo } from "react";

import { Link } from "react-router-dom";

import { ThemeHeaderRcmWrapper } from "./style";

const ThemeHeaderRcm = memo((props) => {
  const { title, keywords, moreLink } = props;
  return (
    <ThemeHeaderRcmWrapper className="sprite_02">
      <div className="left">
        <h2 className="title">{title}</h2>
        {keywords &&
          keywords.map((item, index) => {
            return (
              <div className="item" key={index}>
                <a className="item-a" href="#/">
                  {item}
                </a>
                |
              </div>
            );
          })}
      </div>
      <div className="right">
        <Link to={moreLink}>更多</Link>
        <div className="icon"></div>
      </div>
    </ThemeHeaderRcmWrapper>
  );
});

export default ThemeHeaderRcm;
