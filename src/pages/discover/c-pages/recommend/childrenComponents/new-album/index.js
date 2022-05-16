import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { Carousel } from "antd";

import ThemeHeaderRcm from "@/components/theme-header-rcm";

import { getNewAlbumAction } from "../../store/actionCreators";

import { NewAlbumWrapper } from "./style";

const NewAlbum = memo(() => {
  const { newAlbum } = useSelector(
    (state) => ({
      newAlbum: state.getIn(["recommend", "newAlbum"]),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewAlbumAction(10, 0));
  }, [dispatch]);

  return (
    <NewAlbumWrapper>
      <ThemeHeaderRcm
        title="新碟上架"
        moreLink="/discover/album"
      ></ThemeHeaderRcm>
      <div className="content">
        <button className="btn left"></button>
        <div className="album">
          <Carousel>
            {[0, 1].map((item) => {
              return (
                <div key={item} className="page">
                  {newAlbum &&
                    newAlbum.slice(item * 5, (item + 1) * 5).map((item) => {
                      return <div key={item.id}>{item.name}</div>;
                    })}
                </div>
              );
            })}
          </Carousel>
        </div>
        <button className="btn right"></button>
      </div>
    </NewAlbumWrapper>
  );
});

export default NewAlbum;
