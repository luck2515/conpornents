import React, { memo } from "react";
import styled, { css } from "styled-components";

interface Props {
  className?: string;
  isMobile?: boolean;
}
const CardComponent: React.FC<Props> = memo(({ className, isMobile }) => {
  return (
    <Card
      className={className}
      isMobile={isMobile}
      onClick={() => console.log("click")}
    >
      <CardImage isMobile={isMobile} />
      <CardText isMobile={isMobile} />
    </Card>
  );
});

const Card = styled.div<{ isMobile: boolean }>`
  height: 240px;
  width: 100%;
  max-width: 200px;
  min-width: 150px;
  border: solid 1px ${({ theme }) => theme.default.palette.grey};
  cursor: pointer;
  ${({ isMobile }) =>
    isMobile &&
    css`
      transition: 0.5s;
      box-shadow: 0.5px 0.5px 1px rgba(0, 0, 0, 0.1);
      max-width: initial;
      margin-left: initial;
      margin-top: 8px;
      height: 120px;
      display: flex;
      width: 100%;
      &:hover {
        box-shadow: #ddd 2px 4px 4px;
      }
    `}
`;

const CardImage = styled.div<{ isMobile: boolean }>`
  height: 55%;
  width: 100%;
  background: ${({ theme }) => theme.default.palette.grey};
  ${({ isMobile }) =>
    isMobile &&
    css`
      width: 200px;
      height: 100%;
    `}
`;

const CardText = styled.div<{ isMobile: boolean }>`
  height: 45%;
  width: 100%;
  background: ${({ theme }) => theme.default.palette.background.white};
  ${({ isMobile }) =>
    isMobile &&
    css`
      height: 100%;
    `}
`;

export default CardComponent;
