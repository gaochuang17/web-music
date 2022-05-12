import React, { memo } from "react";
import { FooterWrapper, FooterLeft, FooterRight } from "./style";

import { footerLinks } from "@/services/local-data.js";

export default memo(function AppFooter() {
  return (
    <FooterWrapper>
      <div className="content wrap-v2">
        <FooterLeft className="left">
          <div className="container">
            {footerLinks.map((item, index) => {
              return (
                <a key={index} href={item.link} className="link">
                  {item.title} |
                </a>
              );
            })}
          </div>
          <div className="footeritem">
            <span>网易公司版权所有©1997-2020</span>
            <span>
              杭州乐读科技有限公司运营：
              <a
                href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png"
                rel="noopener noreferrer"
                target="_blank"
              >
                浙网文[2018]3506-263号
              </a>
            </span>
          </div>
          <div className="footeritem">
            <span>违法和不良信息举报电话：0571-89853516</span>
            <span>
              举报邮箱：
              <a
                href="mailto:ncm5990@163.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                ncm5990@163.com
              </a>
            </span>
          </div>
          <div className="footeritem">
            <span>粤B2-20090191-18</span>
            <a
              href="http://www.beian.miit.gov.cn/publish/query/indexFirst.action"
              rel="noopener noreferrer"
              target="_blank"
            >
              工业和信息化部备案管理系统网站
            </a>
          </div>
        </FooterLeft>
        <FooterRight>
          {/* {footerImages.map((item, index) => {
            return (
              <div>
                <a href={item.link} className="a-link"></a>
                <span>认证</span>
              </div>
            );
          })} */}
        </FooterRight>
      </div>
    </FooterWrapper>
  );
});
