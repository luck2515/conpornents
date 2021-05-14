import React, { memo } from "react";
import { SizeVariation } from "../../types/myType";
import styled, { css } from "styled-components";

type InputProps = Omit<JSX.IntrinsicElements["input"], "ref">;
type Props = InputProps & {
  className?: string;
  fullWidth?: boolean;
  inputSize?: SizeVariation;
};

const InputComponent: React.FC<Props> = memo(
  ({
    className,
    children,
    inputSize = "medium",
    fullWidth = false,
    ...inputProps
  }) => {
    return (
      <Input
        className={className}
        inputSize={inputSize}
        fullWidth={fullWidth}
        {...inputProps}
      />
    );
  }
);

const Input = styled.input<{ fullWidth?: boolean; inputSize?: SizeVariation }>`
  &:focus {
    /* chromeが自動付与する枠線を削除 */
    outline: none;
    border: 1px solid ${({ theme }) => theme.default.palette.black};
  }
  ${({ inputSize }) => css`
    width: ${({ theme }) => theme.default.size.button.width[inputSize]};
    height: ${({ theme }) => theme.default.size.button.height[inputSize]};
  `}
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
    padding: 10px;
  border: 1px solid ${({ theme }) => theme.default.palette.grey};
  background-color: ${({ theme }) => theme.default.palette.background.white};
  box-shadow: 0.9px 1px 2px rgba(0, 0, 0, 0.2);
`;

export default InputComponent;
