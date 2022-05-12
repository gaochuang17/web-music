import styled from "styled-components";

export const FooterWrapper = styled.div`
  height: 172px;
  /* background-color: blue; */
  background-color: #f2f2f2;
  color: #666;
  border-top: 1px solid #d3d3d3;

  .content {
    height: 172px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const FooterLeft = styled.div`
  .link {
    display: inline-block;
    color: #999;
    padding: 4px 4px;
  }

  .footeritem {
    padding: 4px 0;
  }
`;

export const FooterRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  .a-link {
    display: block;
    width: 50px;
    height: 50px;
    background: url(${require("@/assets/img/sprite_footer_02.png")});
    background-repeat: no-repeat;
    background-position: 0 0;
  }
`;
