import React, { memo, useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { PlayerBarWrapper, Control, PlayInfo, Operator } from "./style";

import { NavLink } from "react-router-dom";
import { Slider } from "antd";

// import { getSongDetail } from "@/services/player.js";
import { getSongDetailAction } from "../store/actionCreators";

const PlayerBar = memo(() => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongDetailAction(33894312));
  }, [dispatch]);

  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <PlayerBarWrapper>
      <div className="content">
        <Control isPlaying={isPlaying}>
          <button className="prev"></button>
          <button className="play"></button>
          <button className="next"></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/discover/player">
              <img
                src="https://p2.music.126.net/OVkXDNmbk2uj6wE1KTZIwQ==/109951165203334337.jpg?param=34y34"
                alt=""
              />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">000</span>
              <span className="singer-name">000</span>
            </div>
            <div className="progress">
              <Slider />
              <div className="time">
                <span className="now-time">000</span>
                <span className="divider">/</span>
                <span className="total-time">000</span>
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
    </PlayerBarWrapper>
  );
});

export default PlayerBar;
