import styled from "styled-components";

export const ThemeCoverWrapper = styled.div`
  width: 140px;
  margin: 20px 10px;
  .cover-out {
    margin: 20px 0;

    .image {
      /* display: block; */
      width: 100%;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1),
        0 6px 20px 0 rgba(0, 0, 0, 0.09);
    }

    .cover-name {
      font-size: 14px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      margin-top: 5px;
    }
  }
`;
