import React, { memo } from "react";

import ThemeHeaderRcm from "@/components/theme-header-rcm";

import { RankingWrapper } from "./style";

const RecommendRanking = memo(() => {
  return (
    <RankingWrapper>
      <ThemeHeaderRcm
        title="榜单"
        moreLink="/discover/ranking"
      ></ThemeHeaderRcm>
    </RankingWrapper>
  );
});

export default RecommendRanking;
