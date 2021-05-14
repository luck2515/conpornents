import React, { memo } from "react";
import styled, { css } from "styled-components";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { SizeVariation } from "../../types/myType";

interface Props {
  className?: string;
  isMobile?: boolean;
  size?: SizeVariation;
}
const InputFormComponent: React.FC<Props> = memo(
  ({ className, isMobile, size }) => {
    return (
      <InputForm className={className} isMobile={isMobile}>
        <SearchInput fullWidth={true} inputSize={size} />
        <Button size={size} />
      </InputForm>
    );
  }
);

const InputForm = styled.div<{ isMobile: boolean }>`
  display: flex;
  max-width: 300px;
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

const SearchInput = styled(Input)`
  background: white;
  border: solid 1px ${({ theme }) => theme.default.palette.grey};
`;

export default InputFormComponent;
