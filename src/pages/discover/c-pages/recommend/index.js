import React, { memo } from "react";
import { RecommendWrapper } from "./style";

import TopBanner from "./childrenComponents/top-banner";

const Recommend = memo(() => {
  return (
    <RecommendWrapper>
      <TopBanner></TopBanner>
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
