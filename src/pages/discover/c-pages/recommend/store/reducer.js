import { Map } from "immutable";

import * as actionTypes from "./constants";

const defaultState = Map({
  topBanners: [],
  hotRecommend: [],
  newAlbum: [],
  topUpList: [],
  topNewList: [],
  topOriginList: [],

  settleSinger: [],
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return state.set("topBanners", action.topBanners);
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return state.set("hotRecommend", action.hotRecommend);
    case actionTypes.CHANGE_NEW_ALBUM:
      return state.set("newAlbum", action.newAlbum);
    case actionTypes.CHANGE_UP_LIST:
      return state.set("topUpList", action.topUpList);
    case actionTypes.CHANGE_NEW_LIST:
      return state.set("topNewList", action.topNewList);
    case actionTypes.CHANGE_ORIGIN_LIST:
      return state.set("topOriginList", action.topOriginList);
    case actionTypes.CHANGE_SETTLE_SINGER:
      return state.set("settleSinger", action.settleSinger);
    default:
      return state;
  }
}

export default reducer;

//未使用immutable
/* 
const defaultState = {
  topBanners: [],
};

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return { ...state, topBanners: action.topBanners };
    default:
      return state;
  }
}

export default reducer;
 */
