import React, { memo } from "react";
import styled from "styled-components";

interface Props {
  className?: string;
}
const Layout: React.FC<Props> = memo(({ children }) => {
  return <>{children}</>;
});

export default Layout;
