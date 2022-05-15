import React, { memo, useEffect, useState, useRef } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { Carousel } from "antd";

import {
  TopBannerWrapper,
  BannerLeft,
  BannerRight,
  BannerControl,
} from "./style";

import { getTopBannerAction } from "../../store/actionCreators";

const TopBanner = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const bannerRef = useRef();

  //组件和redux关联：获取数据和进行操作
  const { topBanners } = useSelector(
    (state) => ({
      // topBanners: state.recommend.topBanners,
      // topBanners: state.get("recommend").get("topBanners"),
      topBanners: state.getIn(["recommend", "topBanners"]),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  //发送网络请求
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);

  const bannerChange = (from, to) => {
    setCurrentIndex(to);
    // console.log(currentIndex);
  };

  const bgImage =
    topBanners[currentIndex] &&
    topBanners[currentIndex].imageUrl + "?imageView&blur=40x20";

  const style1 = {
    backgroundImage: `url(${bgImage})`,
  };

  return (
    <TopBannerWrapper style={style1}>
      <div className="banner">
        <BannerLeft>
          <Carousel
            autoplay
            effect="fade"
            ref={bannerRef}
            beforeChange={bannerChange}
          >
            {topBanners.map((item, index) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img
                    className="image"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  ></img>
                </div>
              );
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight>
          <a href="https://music.163.com/#/download" target="_blank"></a>
        </BannerRight>
        <BannerControl className="control">
          <button
            className="btn left"
            onClick={(e) => bannerRef.current.prev()}
          ></button>
          <button
            className="btn right"
            onClick={(e) => bannerRef.current.next()}
          ></button>
        </BannerControl>
      </div>
    </TopBannerWrapper>
  );
});

export default TopBanner;
