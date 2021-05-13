import React, { memo } from "react";
import Link from "next/link";
import styled, { css } from "styled-components";
import Layout from "../../styles/Lyaout";
import { useMediaQueryContext } from "../Provider/MediaQueryProvider";

interface Props {
  className?: string;
}
const TopComponent: React.FC<Props> = memo(({ className }) => {
  const { isMobileSite } = useMediaQueryContext();
  return (
    <Layout>
      <Top className={className} isMobile={isMobileSite}>
        <Search isMobile={isMobileSite}>
          <SearchInput isMobile={isMobileSite} />
          <SearchButton isMobile={isMobileSite} />
        </Search>
        <SectionTitle isMobile={isMobileSite}>〇〇〇一覧</SectionTitle>
        <CardList isMobile={isMobileSite}>
          {[...Array(4)].map(() => {
            return (
              <Card isMobile={isMobileSite}>
                <CardImage isMobile={isMobileSite} />
                <CardText isMobile={isMobileSite} />
              </Card>
            );
          })}
        </CardList>
        <MoreLinkWrapper isMobile={isMobileSite}>
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
      </Top>
    </Layout>
  );
});

const Top = styled.div<{ isMobile: boolean }>`
  ${({ isMobile }) =>
    isMobile &&
    css`
      padding: 8px;
    `}
`;

const Search = styled.div<{ isMobile: boolean }>`
  display: flex;
  max-width: 250px;
  height: 40px;
  width: 100%;
  margin: 30px 30px 30px auto;
  justify-content: space-between;
  ${({ isMobile }) =>
    isMobile &&
    css`
      max-width: initial;
      height: 50px;
    `}
`;
const SearchInput = styled.div<{ isMobile: boolean }>`
  width: 100%;
  background: white;
  border: solid 1px ${({ theme }) => theme.default.palette.grey};
  cursor: text;
  min-width: 150px;
  ${({ isMobile }) =>
    isMobile &&
    css`
      max-width: calc(100vw - 58px);
    `}
`;

const SearchButton = styled.div<{ isMobile: boolean }>`
  width: 60px;
  margin-left: 8px;
  background: ${({ theme }) => theme.default.palette.typography.main};
  cursor: pointer;
  ${({ isMobile }) =>
    isMobile &&
    css`
      width: 90px;
      min-width: 40px;
    `}
`;

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

const Card = styled.div<{ isMobile: boolean }>`
  height: 240px;
  width: 100%;
  max-width: 200px;
  border: solid 1px ${({ theme }) => theme.default.palette.grey};
  cursor: pointer;
  margin-left: 16px;
  margin-top: 40px;
  transition: 0.5s;
  &:hover {
    box-shadow: #ddd 2px 4px 4px;
  }
  ${({ isMobile }) =>
    isMobile &&
    css`
      max-width: initial;
      margin-left: initial;
      margin-top: 8px;
      height: 120px;
      display: flex;
      width: 100%;
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

export default TopComponent;
