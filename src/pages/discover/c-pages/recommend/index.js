import React, { memo } from "react";
import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight,
} from "./style";

import TopBanner from "./childrenComponents/top-banner";
import HotRecommend from "./childrenComponents/hot-recommend";
import NewAlbum from "./childrenComponents/new-album";
import RecommendRanking from "./childrenComponents/recommend-ranking";
import UserLogin from "./childrenComponents/user-login";
import SettleSinger from "./childrenComponents/settle-singer";

const Recommend = memo(() => {
  return (
    <RecommendWrapper>
      <TopBanner></TopBanner>
      <Content>
        <RecommendLeft>
          <HotRecommend></HotRecommend>
          <NewAlbum></NewAlbum>
          <RecommendRanking></RecommendRanking>
        </RecommendLeft>
        <RecommendRight>
          <UserLogin></UserLogin>
          <SettleSinger></SettleSinger>
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  );
});

export default Recommend;

/* const Recommend = memo((props) => {
  const { getBanners, topBanners } = props;

  useEffect(() => {
    getBanners();
  }, [getBanners]);

  return <div>Recommand</div>;
});

const mapStateToProps = (state) => {
  return {
    topBanners: state.recommend.topBanners,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBanners: () => {
      dispatch(getTopBannerAction());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recommend);
 */
