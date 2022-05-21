import { Map } from "immutable";

import * as actionTypes from "./constant";

const defaultState = Map({
  playList: [],
  currentSongIndex: 0,
  currentSong: {},
  //isDefault用于初次加载页面时加载歌曲，对播放按钮实现暂停状态，
  //若后来手动播放榜单歌曲，将isDefault设为false，直接播放歌曲，并将播放按钮设为播放状态
  isDefault: true,
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set("currentSong", action.currentSong);
    case actionTypes.CHANGE_PLAY_LIST:
      return state.set("playList", action.playList);
    case actionTypes.CHANGE_CURRENT_SONG_INDEX:
      return state.set("currentSongIndex", action.index);
    case actionTypes.CHANGE_IS_DEFAULT:
      return state.set("isDefault", action.isDefault);
    default:
      return state;
  }
}

export default reducer;
