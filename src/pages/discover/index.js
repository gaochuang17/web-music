import React, { memo } from "react";
import { Outlet } from "react-router-dom";

import { NavLink } from "react-router-dom";

import { DiscoverWrapper, TopMenu } from "./style";

import { dicoverMenu } from "@/services/local-data.js";
// import request from "@/services/request.js";

const Discover = memo((props) => {
  // const { route } = props;
  // console.log(props);
  // useEffect(() => {
  //   request({
  //     url: "/banner",
  //   }).then((res) => {
  //     console.log(res);
  //   });
  // }, []);

  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu>
          {dicoverMenu.map((item, index) => {
            return (
              // <div className="item" key={item.title}>
              <NavLink to={item.link} key={index}>
                {item.title}
              </NavLink>
              // </div>
            );
          })}
        </TopMenu>
      </div>
      <Outlet></Outlet>
    </DiscoverWrapper>
  );
});

export default Discover;
