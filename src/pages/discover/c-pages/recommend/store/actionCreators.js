import * as actionTypes from "./constants.js";

import { getTopBanners, getHotRecommend } from "@/services/recommend";

const changeBannerAction = (res) => {
  return {
    type: actionTypes.CHANGE_TOP_BANNERS,
    topBanners: res.banners,
  };
};

const changeHotRecommendAction = (res) => {
  return {
    type: actionTypes.CHANGE_HOT_RECOMMEND,
    hotRecommend: res.result,
  };
};

export const getTopBannerAction = () => {
  return (dispatch) => {
    getTopBanners().then((res) => {
      dispatch(changeBannerAction(res));
    });
  };
};

export const getHotRecommendAction = () => {
  return (dispatch) => {
    getHotRecommend().then((res) => {
      console.log("hotRecommend数据：", res);
      dispatch(changeHotRecommendAction(res));
    });
  };
};
