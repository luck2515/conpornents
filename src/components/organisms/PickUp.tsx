import React, { memo } from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import Card from "../molecules/Card";
import { useWindowDimensions } from "../../utils/useWindowDimensions";

interface Props {
  className?: string;
  isMobile?: boolean;
}
const PickUpComponent: React.FC<Props> = memo(({ className, isMobile }) => {
  const array = [...Array(4)];
  const { width } = useWindowDimensions();

  return (
    <PickUp className={className}>
      <SectionTitle isMobile={isMobile}>〇〇〇一覧</SectionTitle>
      <CardList isMobile={isMobile}>
        {(550 <= width && width < 700
          ? array.slice(0, 3)
          : 467 < width && width < 550
          ? array.slice(0, 2)
          : array
        ).map(() => {
          return <Card isMobile={isMobile} />;
        })}
      </CardList>
      <MoreLinkWrapper isMobile={isMobile}>
        <Link
          href={{
            pathname: "/search",
            query: {
              keyword: "keyword",
            },
          }}
        >
          <MoreLink>もっと見る</MoreLink>
        </Link>
      </MoreLinkWrapper>
    </PickUp>
  );
});

const PickUp = styled.div``;
const SectionTitle = styled.div<{ isMobile: boolean }>`
  margin-bottom: 8px;
  color: ${({ theme }) => theme.default.palette.typography.main};
  ${({ isMobile }) =>
    isMobile &&
    css`
      margin: initial;
    `}
`;

const CardList = styled.div<{ isMobile: boolean }>`
  ${({ isMobile }) =>
    !isMobile &&
    css`
      display: flex;
      flex-wrap: nowrap;
      overflow: hidden;
      justify-content: space-between;
      & > * {
        &:not(:last-child) {
          margin-right: 12px;
        }
      }
    `}
`;

const MoreLinkWrapper = styled.div<{ isMobile: boolean }>`
  display: flex;
  justify-content: right;
  margin-top: 8px;
  ${({ isMobile }) =>
    isMobile &&
    css`
      margin-top: 8px;
      margin-right: initial;
    `}
`;

const MoreLink = styled.a`
  margin-left: auto;
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.default.palette.typography.main};
`;

export default PickUpComponent;
