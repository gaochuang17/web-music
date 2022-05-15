import React, { memo } from "react";

import ThemeHeaderRcm from "@/components/theme-header-rcm";

import { NewAlbumWrapper } from "./style";

const NewAlbum = memo(() => {
  return (
    <NewAlbumWrapper>
      <ThemeHeaderRcm
        title="新碟上架"
        moreLink="/discover/album"
      ></ThemeHeaderRcm>
    </NewAlbumWrapper>
  );
});

export default NewAlbum;
