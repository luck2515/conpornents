import React, { memo } from "react";
import styled from "styled-components";

interface Props {
  className?: string;
}
const FooterComponent: React.FC<Props> = memo(({ className }) => {
  return <Footer className={className} />;
});

const Footer = styled.footer`
  width: 100%;
  height: 100px;
  background-color: #eee;
`;

export default FooterComponent;
