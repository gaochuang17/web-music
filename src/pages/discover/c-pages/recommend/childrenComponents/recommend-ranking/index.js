import React, { useEffect, memo } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getTopData } from "../../store/actionCreators";

import ThemeHeaderRcm from "@/components/theme-header-rcm";
import TopRanking from "@/components/top-ranking";

import { RankingWrapper } from "./style";
// import bgImage from "@/assets/img/recommend-top-bg.png";

const RecommendRanking = memo(() => {
  // redux
  const dispatch = useDispatch();
  const state = useSelector(
    (state) => ({
      topUpList: state.getIn(["recommend", "topUpList"]),
      topNewList: state.getIn(["recommend", "topNewList"]),
      topOriginList: state.getIn(["recommend", "topOriginList"]),
    }),
    shallowEqual
  );

  // hooks
  useEffect(() => {
    dispatch(getTopData());
  }, [dispatch]);

  return (
    <RankingWrapper>
      <ThemeHeaderRcm
        title="榜单"
        moreLink="/discover/ranking"
      ></ThemeHeaderRcm>
      <div className="tops">
        <TopRanking info={state.topUpList} />
        <TopRanking info={state.topNewList} />
        <TopRanking info={state.topOriginList} />
      </div>
      {/* <div className="tops" style={{backgroundImage:`url(${require("@/assets/img/recommend-top-bg.png")})`}}></div> */}
      {/* <div className="tops" style={{ backgroundImage: `url("@/assets/img/recommend-top-bg.png")` }}></div> */}
      {/* <div className="tops" style={{ backgroundImage: `url(${bgImage})` }}></div> */}
    </RankingWrapper>
  );
});

export default RecommendRanking;
