import React, { memo } from "react";
import styled from "styled-components";

interface Props {
  className?: string;
}
const HeaderComponent: React.FC<Props> = memo(({ className }) => {
  return <Header className={className} />;
});

const Header = styled.header`
  height: 100px;
  background-color: #eee;
`;

export default HeaderComponent;
