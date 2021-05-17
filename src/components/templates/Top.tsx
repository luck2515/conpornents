import React, { memo } from "react";
import styled, { css } from "styled-components";
import Layout from "../../styles/Lyaout";
import { useMediaQueryContext } from "../Provider/MediaQueryProvider";
import PickUp from "../organisms/PickUp";
import SearchInputForm from "../organisms/SearchInputForm";
import SearchConditionModal from "../organisms/SearchConditionModal";

interface Props {
  className?: string;
}
const TopComponent: React.FC<Props> = memo(({ className }) => {
  const { isMobile } = useMediaQueryContext();
  return (
    <Layout>
      <Top className={className} isMobile={isMobile}>
        <Search isMobile={isMobile} size="large" />
        <SearchCondition />
        <PickUp1 isMobile={isMobile} />
      </Top>
    </Layout>
  );
});

const Top = styled.div<{ isMobile: boolean }>`
  ${({ isMobile }) =>
    isMobile
      ? css`
          padding: 8px;
        `
      : css`
          padding: 30px;
        `}
`;

const Search = styled(SearchInputForm)<{ isMobile: boolean }>`
  min-width: 150px;
  ${({ isMobile }) =>
    !isMobile &&
    css`
      margin: 0 0 0 auto;
    `}
`;

const SearchCondition = styled(SearchConditionModal)`
  & > button {
    display: block;
    margin: 5px 0 0 auto;
  }
`;

const PickUp1 = styled(PickUp)`
  margin-top: 30px;
`;

export default TopComponent;
