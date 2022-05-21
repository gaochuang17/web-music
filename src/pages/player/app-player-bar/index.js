import React, { memo, useState, useRef, useEffect, useCallback } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getSizeImage, formatDate, getPlayUrl } from "@/utils/format-utils.js";

import { PlayerBarWrapper, Control, PlayInfo, Operator } from "./style";

import { NavLink } from "react-router-dom";
import { Slider } from "antd";

// import { getSongDetail } from "@/services/player.js";
import {
  getSongDetailAction,
  changeCurrentSong,
  changeCurrentSongIndexAction,
  changeSequenceAction,
} from "../store/actionCreators";

const PlayerBar = memo(() => {
  // props and state
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  // redux hooks
  const { currentSong, currentSongIndex, playList, isDefault, sequence } =
    useSelector((state) => {
      // console.log("----+++");
      return {
        currentSong: state.getIn(["player", "currentSong"]),
        currentSongIndex: state.getIn(["player", "currentSongIndex"]),
        playList: state.getIn(["player", "playList"]),
        isDefault: state.getIn(["player", "isDefault"]),
        sequence: state.getIn(["player", "sequence"]),
      };
    }, shallowEqual);
  const dispatch = useDispatch();

  // other hooks
  const audioRef = useRef();

  useEffect(() => {
    dispatch(getSongDetailAction(33894312));
  }, [dispatch]);

  useEffect(() => {
    audioRef.current.src = getPlayUrl(currentSong.id);
    if (isDefault == false) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [currentSong]);

  //其他操作
  const showTotalTime = formatDate(currentSong.dt, "mm:ss");
  const showCurrentTime = formatDate(currentTime, "mm:ss");
  //   let progress = (currentTime / currentSong.dt) * 100;

  const playMusic = useCallback(() => {
    if (isPlaying === false) {
      setIsPlaying(true);
      audioRef.current.play();
    } else {
      setIsPlaying(false);
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const playPreMusic = () => {
    if (currentSongIndex !== 0) {
      dispatch(changeCurrentSong(playList[currentSongIndex - 1]));
      dispatch(changeCurrentSongIndexAction(currentSongIndex - 1));
      setIsPlaying(true);
      audioRef.current.play();
    } else {
      dispatch(changeCurrentSong(playList[playList.length - 1]));
      dispatch(changeCurrentSongIndexAction(playList.length - 1));
      setIsPlaying(true);
      audioRef.current.play();
    }
  };

  const playNextMusic = () => {
    if (currentSongIndex !== playList.length - 1) {
      dispatch(changeCurrentSong(playList[currentSongIndex + 1]));
      dispatch(changeCurrentSongIndexAction(currentSongIndex + 1));
      setIsPlaying(true);
      audioRef.current.play();
    } else {
      dispatch(changeCurrentSong(playList[0]));
      dispatch(changeCurrentSongIndexAction(0));
      setIsPlaying(true);
      audioRef.current.play();
    }
  };

  const timeupdate = (e) => {
    // console.log(e.target.currentTime);
    if (!isChanging) {
      setCurrentTime(e.target.currentTime * 1000);
      setProgress((currentTime / currentSong.dt) * 100);
    }
  };

  const SliderChange = useCallback(
    (value) => {
      // console.log("SliderChange", value);
      setIsChanging(true);
      const time = ((value / 100) * currentSong.dt) / 1000;
      setCurrentTime(time * 1000);
      setProgress(value);
    },
    [currentSong.dt]
  );

  const SliderAfterChange = useCallback(
    (value) => {
      console.log("SliderAfterChange", value);
      const time = ((value / 100) * currentSong.dt) / 1000;
      audioRef.current.currentTime = time;
      //   setCurrentTime(time);
      setIsChanging(false);

      if (!isPlaying) {
        playMusic();
      }
    },
    [currentSong.dt, isPlaying, playMusic]
  );

  const changeSequence = () => {
    let currentSequence = sequence + 1;
    if (currentSequence > 2) {
      currentSequence = 0;
    }
    dispatch(changeSequenceAction(currentSequence));
  };

  return (
    <PlayerBarWrapper>
      <div className="content">
        <Control isPlaying={isPlaying}>
          <button
            className="sprite_playbar btn prev"
            onClick={(e) => {
              playPreMusic();
            }}
          ></button>
          <button
            className="sprite_playbar btn play"
            onClick={(e) => {
              playMusic();
            }}
          ></button>
          <button
            className="sprite_playbar btn next"
            onClick={(e) => {
              playNextMusic();
            }}
          ></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/discover/player">
              <img
                src={getSizeImage(currentSong.al && currentSong.al.picUrl, 34)}
                alt=""
              />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <span className="singer-name">
                {currentSong.ar && currentSong.ar[0].name}
              </span>
            </div>
            <div className="progress">
              <Slider
                value={progress}
                onChange={SliderChange}
                onAfterChange={SliderAfterChange}
              />
              <div className="time">
                <span className="now-time">{showCurrentTime}</span>
                <span className="divider">/</span>
                <span className="total-time">{showTotalTime}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator sequence={sequence}>
          <div className="left">
            <button className="sprite_playbar btn favor"></button>
            <button className="sprite_playbar btn share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="sprite_playbar btn volume"></button>
            <button
              className="sprite_playbar btn loop"
              onClick={(e) => changeSequence()}
            ></button>
            <button className="sprite_playbar btn playlist">000</button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={timeupdate}></audio>
    </PlayerBarWrapper>
  );
});

export default PlayerBar;
