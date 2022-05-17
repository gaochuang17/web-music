import React, { memo } from "react";

import ThemeHeaderRcm from "@/components/theme-header-rcm";

import { RankingWrapper } from "./style";
// import bgImage from "@/assets/img/recommend-top-bg.png";

const RecommendRanking = memo(() => {
  return (
    <RankingWrapper>
      <ThemeHeaderRcm
        title="榜单"
        moreLink="/discover/ranking"
      ></ThemeHeaderRcm>
      <div className="tops"></div>
      {/* <div className="tops" style={{backgroundImage:`url(${require("@/assets/img/recommend-top-bg.png")})`}}></div> */}
      {/* <div className="tops" style={{ backgroundImage: `url("@/assets/img/recommend-top-bg.png")` }}></div> */}
      {/* <div className="tops" style={{ backgroundImage: `url(${bgImage})` }}></div> */}
    </RankingWrapper>
  );
});

export default RecommendRanking;
