import React, { memo, useState, useRef, useEffect } from "react";
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

  // redux hooks
  const { currentSong } = useSelector((state) => {
    return {
      currentSong: state.getIn(["player", "currentSong"]),
    };
  }, shallowEqual);
  const dispatch = useDispatch();

  // other hooks
  const audioRef = useRef();
  useEffect(() => {
    dispatch(getSongDetailAction(33894312));
  }, [dispatch]);

  const playMusic = () => {
    audioRef.current.src = getPlayUrl(currentSong.id);
    audioRef.current.play();
  };

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
              <Slider />
              <div className="time">
                <span className="now-time">000</span>
                <span className="divider">/</span>
                <span className="total-time">
                  {formatDate(currentSong.dt, "mm:ss")}
                </span>
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
      <audio ref={audioRef}></audio>
    </PlayerBarWrapper>
  );
});

export default PlayerBar;
