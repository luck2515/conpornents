import React, { memo } from "react";
import styled, { css } from "styled-components";
import Layout from "../../styles/Lyaout";
import { useMediaQueryContext } from "../Provider/MediaQueryProvider";
import PickUp from "../organisms/PickUp";
import SearchInputForm from "../organisms/SearchInputForm";

interface Props {
  className?: string;
}
const TopComponent: React.FC<Props> = memo(({ className }) => {
  const { isMobileSite } = useMediaQueryContext();
  return (
    <Layout>
      <Top className={className} isMobile={isMobileSite}>
        <SearchInputForm isMobile={isMobileSite} size="large" />
        <PickUp isMobile={isMobileSite} />
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

export default TopComponent;
