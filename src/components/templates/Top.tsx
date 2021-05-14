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
        <SearchConditionModal />
        <PickUp isMobile={isMobile} />
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

const Search = styled(SearchInputForm)`
  min-width: 150px;
  ${({ isMobile }) =>
    isMobile &&
    css`
      max-width: calc(100vw - 58px);
    `}
`;

export default TopComponent;
