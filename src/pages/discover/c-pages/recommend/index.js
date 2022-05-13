import React, { memo, useEffect } from "react";
import { connect } from "react-redux";

import { getTopBannerAction } from "./store/actionCreators";

const Recommand = memo((props) => {
  const { getBanners } = props;

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

export default connect(mapStateToProps, mapDispatchToProps)(Recommand);
