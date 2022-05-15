import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import ThemeCover from "@/components/theme-cover";
import ThemeHeaderRcm from "@/components/theme-header-rcm";

import { RecommendWrapper } from "./style";

import { getHotRecommendAction } from "../../store/actionCreators";

const HotRecommend = memo(() => {
  const { hotRecommend } = useSelector(
    (state) => ({
      hotRecommend: state.getIn(["recommend", "hotRecommend"]),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHotRecommendAction());
  }, [dispatch]);

  return (
    <RecommendWrapper>
      <ThemeHeaderRcm
        title="热门推荐"
        keywords={["华语", "流行", "摇滚", "民谣", "电子"]}
        moreLink="/discover/songs"
      ></ThemeHeaderRcm>
      <div className="recommend-list">
        {hotRecommend.slice(0, 8).map((item, index) => {
          return <ThemeCover info={item} key={item.id}></ThemeCover>;
        })}
      </div>
    </RecommendWrapper>
  );
});

export default HotRecommend;
