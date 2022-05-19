import * as actionTypes from "./constant";

import { getSongDetail } from "@/services/player.js";

export const changeCurrentSong = (currentSong) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong: currentSong,
});

export const getSongDetailAction = (ids) => {
  return (dispatch) => {
    getSongDetail(ids).then((res) => {
      console.log("歌曲详情:", res.songs[0]);
      dispatch(changeCurrentSong(res.songs[0]));
    });
  };
};
