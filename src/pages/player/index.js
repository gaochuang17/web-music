import React, { memo } from "react";

import { PlayerWrapper, PlayerLeft, PlayerRight } from "./style";

const Player = memo(() => {
  return (
    <PlayerWrapper className="content wrap-v2">
      <PlayerLeft></PlayerLeft>
      <PlayerRight></PlayerRight>
    </PlayerWrapper>
  );
});

export default Player;
