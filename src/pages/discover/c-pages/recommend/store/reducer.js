import { CHANGE_TOP_BANNERS } from "./constants";

const defaultState = {
  topBanners: [],
};

function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_TOP_BANNERS:
      return { ...state, topBanners: [] };
    default:
      return state;
  }
}

export default reducer;
