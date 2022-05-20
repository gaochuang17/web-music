import * as actionTypes from "./constants.js";

import {
  getTopBanners,
  getHotRecommend,
  getNewAlbum,
  getTopList,
  getSettleSinger,
} from "@/services/recommend";

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

export const changeNewAlbumAction = (res) => {
  return {
    type: actionTypes.CHANGE_NEW_ALBUM,
    newAlbum: res.weekData,
  };
};

const changeUpListAction = (res) => ({
  type: actionTypes.CHANGE_UP_LIST,
  topUpList: res.result,
});

const changeNewListAction = (res) => ({
  type: actionTypes.CHANGE_NEW_LIST,
  topNewList: res.result,
});

const changeOriginListAction = (res) => ({
  type: actionTypes.CHANGE_ORIGIN_LIST,
  topOriginList: res.result,
});

export const ChangeSettleSingerAction = (res) => {
  return {
    type: actionTypes.CHANGE_SETTLE_SINGER,
    settleSinger: res.artists,
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

export const getNewAlbumAction = (limit, offset) => {
  return (dispatch) => {
    getNewAlbum(limit, offset).then((res) => {
      console.log("NewAlbum:", res);
      dispatch(changeNewAlbumAction(res));
    });
  };
};

export const getTopData = () => {
  return (dispatch) => {
    getTopList().then((res) => {
      dispatch(changeNewListAction(res));

      dispatch(changeOriginListAction(res));

      dispatch(changeUpListAction(res));
    });
  };
};

export const getSettleSingerAction = () => {
  return (dispatch) => {
    getSettleSinger().then((res) => {
      console.log("SettleSinger:", res);
      dispatch(ChangeSettleSingerAction(res));
    });
  };
};
