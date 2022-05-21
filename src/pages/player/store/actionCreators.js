import * as actionTypes from "./constant";

import { getSongDetail } from "@/services/player.js";

export const changeCurrentSong = (currentSong) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong: currentSong,
});

export const changePlayListAction = (playList) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList: playList,
});

export const changeCurrentSongIndexAction = (index) => ({
  type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
  index,
});

export const changeIsDefaultAction = (isDefault) => ({
  type: actionTypes.CHANGE_IS_DEFAULT,
  isDefault,
});

export const changeSequenceAction = (sequence) => ({
  type: actionTypes.CHANGE_SEQUENCE,
  sequence,
});

export const getSongDetailAction = (ids) => {
  return (dispatch, getState) => {
    //1.根据id查找playlist中是否已经有了该歌曲
    const playList = getState().getIn(["player", "playList"]);
    const songIndex = playList.findIndex((song) => song.id == ids);

    //2.判断是否找到歌曲
    if (songIndex !== -1) {
      console.log("歌曲已存在播放列表");
      dispatch(changeCurrentSongIndexAction(songIndex));
      const song = playList[songIndex];
      dispatch(changeCurrentSong(song));
    } else {
      getSongDetail(ids).then((res) => {
        console.log("新歌曲详情:", res);
        let newPlayList = [...playList];
        newPlayList.push(res.songs[0]);
        dispatch(changePlayListAction(newPlayList));
        dispatch(changeCurrentSong(res.songs[0]));
        dispatch(changeCurrentSongIndexAction(playList.length));
      });
    }
    // getSongDetail(ids).then((res) => {
    //   console.log("歌曲详情:", res.songs[0]);
    //   dispatch(changeCurrentSong(res.songs[0]));
    // });
  };
};
