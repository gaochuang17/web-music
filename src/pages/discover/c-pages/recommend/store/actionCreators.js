import * as actionTypes from "./constants.js";

import { getTopBanners } from "@/services/recommend";

const changeBannerAction = (res) => {
  return {
    type: actionTypes.CHANGE_TOP_BANNERS,
    topBanners: res.banners,
  };
};

export const getTopBannerAction = () => {
  return (dispatch) => {
    getTopBanners().then((res) => {
      dispatch(changeBannerAction(res));
    });
  };
};
