import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import ThemeHeaderRcmRight from "@/components/theme-header-rcm-right";

import { getSizeImage } from "@/utils/format-utils";

import { SettleSingerWrapper } from "./style";

import { getSettleSingerAction } from "../../store/actionCreators";

const SettleSinger = memo(() => {
  const { settleSinger } = useSelector(
    (state) => ({
      settleSinger: state.getIn(["recommend", "settleSinger"]),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSettleSingerAction());
  }, [dispatch]);

  return (
    <SettleSingerWrapper>
      <ThemeHeaderRcmRight
        title="入驻歌手"
        moreLink="/abc"
      ></ThemeHeaderRcmRight>
      <div className="singer-list">
        {settleSinger &&
          settleSinger.slice(0, 5).map((item, index) => {
            return (
              <a className="singer-item" href="/artist">
                <img
                  className="item-image"
                  src={getSizeImage(item.picUrl, 62)}
                  alt=""
                ></img>
                <div className="item-info">
                  <div className="item-alias">
                    {item.alias[0] ? item.alias[0] : item.name}
                  </div>
                  <div className="item-name">{item.name}</div>
                </div>
              </a>
            );
          })}
      </div>
      <div className="apply-for">
        <a href="/abc">申请成为网易音乐人</a>
      </div>
    </SettleSingerWrapper>
  );
});

export default SettleSinger;
