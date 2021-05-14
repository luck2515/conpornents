import React, { memo } from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import Card from "../molecules/Card";

interface Props {
  className?: string;
  isMobile?: boolean;
}
const PickUpComponent: React.FC<Props> = memo(({ className, isMobile }) => {
  return (
    <PickUp className={className}>
      <SectionTitle isMobile={isMobile}>〇〇〇一覧</SectionTitle>
      <CardList isMobile={isMobile}>
        {[...Array(4)].map(() => {
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
  margin-left: 30px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.default.palette.typography.main};
  ${({ isMobile }) =>
    isMobile &&
    css`
      margin: initial;
    `}
`;

const CardList = styled.div<{ isMobile: boolean }>`
  padding: 0 24px;
  margin-left: -16px;
  margin-top: -40px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  ${({ isMobile }) =>
    isMobile &&
    css`
      padding: 0;
      margin-left: initial;
      margin-top: -8px;
    `}
`;

const MoreLinkWrapper = styled.div<{ isMobile: boolean }>`
  display: flex;
  justify-content: right;
  margin-right: 30px;
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
