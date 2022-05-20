import React, { memo, useState, useRef, useEffect, useCallback } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getSizeImage, formatDate, getPlayUrl } from "@/utils/format-utils.js";

import { PlayerBarWrapper, Control, PlayInfo, Operator } from "./style";

import { NavLink } from "react-router-dom";
import { Slider } from "antd";

// import { getSongDetail } from "@/services/player.js";
import { getSongDetailAction } from "../store/actionCreators";

const PlayerBar = memo(() => {
  // props and state
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  // redux hooks
  const { currentSong } = useSelector((state) => {
    // console.log("----+++");
    return {
      currentSong: state.getIn(["player", "currentSong"]),
    };
  }, shallowEqual);
  const dispatch = useDispatch();

  // other hooks
  const audioRef = useRef();
  useEffect(() => {
    dispatch(getSongDetailAction(33894312));
    console.log("+++++");
  }, [dispatch]);
  useEffect(() => {
    audioRef.current.src = getPlayUrl(currentSong.id);
    console.log("-------");
    console.log(audioRef.current, currentSong.id);
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

  return (
    <PlayerBarWrapper>
      <div className="content">
        <Control isPlaying={isPlaying}>
          <button className="sprite_playbar btn prev"></button>
          <button
            className="sprite_playbar btn play"
            onClick={(e) => {
              playMusic();
            }}
          ></button>
          <button className="sprite_playbar btn next"></button>
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
        <Operator>
          <div className="left">
            <button className="sprite_playbar btn favor"></button>
            <button className="sprite_playbar btn share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="sprite_playbar btn volume"></button>
            <button className="sprite_playbar btn loop"></button>
            <button className="sprite_playbar btn playlist">000</button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={timeupdate}></audio>
    </PlayerBarWrapper>
  );
});

export default PlayerBar;
