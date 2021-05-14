import React, { memo } from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import Slider from "react-slick";
import Card from "../molecules/Card";

interface Props {
  className?: string;
  isMobile?: boolean;
}
const PickUpComponent: React.FC<Props> = memo(({ className, isMobile }) => {
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <PickUp className={className}>
      <SectionTitle isMobile={isMobile}>〇〇〇一覧</SectionTitle>
      {isMobile ? (
        <MobileCardList isMobile={isMobile}>
          {[...Array(4)].map(() => {
            return <Card isMobile={isMobile} />;
          })}
        </MobileCardList>
      ) : (
        <PcCardList {...sliderSettings}>
          {[...Array(8)].map(() => {
            return <Card isMobile={isMobile} />;
          })}
        </PcCardList>
      )}
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

const MobileCardList = styled.div<{ isMobile: boolean }>``;
const PcCardList = styled(Slider)``;

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
