import { css } from "styled-components";

export const center = css`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const rowCenter = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const columnCenter = css`
  display: flex;
  flex-direction: column;
  align-item: center;
`;

const arrange = {
  center,
  rowCenter,
  columnCenter
};

export default arrange;
