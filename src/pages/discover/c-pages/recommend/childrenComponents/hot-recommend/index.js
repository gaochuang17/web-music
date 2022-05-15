import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import ThemeCover from "@/components/theme-cover";

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
      <div className="recommend-list">
        {hotRecommend.slice(0, 8).map((item, index) => {
          return <ThemeCover info={item} key={item.id}></ThemeCover>;
        })}
      </div>
    </RecommendWrapper>
  );
});

export default HotRecommend;
