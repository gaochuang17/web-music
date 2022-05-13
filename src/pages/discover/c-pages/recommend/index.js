import React, { memo, useEffect } from "react";
import { connect, useDispatch, useSelector, shallowEqual } from "react-redux";

import { getTopBannerAction } from "./store/actionCreators";

const Recommend = memo((props) => {
  //组件和redux关联：获取数据和进行操作
  const { topBanners } = useSelector(
    (state) => ({
      topBanners: state.recommend.topBanners,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);

  return <div>Recommand{topBanners.length}</div>;
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
