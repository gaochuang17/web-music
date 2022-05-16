import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

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
      <div className="album-list">
        {newAlbum.slice(0, 8).map((item, index) => {
          return <div key={item.id}>{item.name}</div>;
        })}
      </div>
    </NewAlbumWrapper>
  );
});

export default NewAlbum;
