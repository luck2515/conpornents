import React, { memo } from "react";
import { SizeVariation } from "../../types/myType";
import styled, { css } from "styled-components";

type InputProps = Omit<JSX.IntrinsicElements["input"], "ref">;
type Props = InputProps & {
  className?: string;
  fullWidth?: boolean;
  size?: SizeVariation;
};

const InputComponent: React.FC<Props> = memo(
  ({
    className,
    children,
    size = "medium",
    fullWidth = false,
    ...inputProps
  }) => {
    return (
      <Input
        className={className}
        inputSize={size}
        fullWidth={fullWidth}
        {...inputProps}
      />
    );
  }
);

const Input = styled.input<{ fullWidth?: boolean; inputSize?: SizeVariation }>`
  /* chromeが自動付与する枠線を削除 */
  &:focus {
    outline: none;
  }
  ${({ inputSize }) => css`
    width: ${({ theme }) => theme.size.button.width[inputSize]};
    height: ${({ theme }) => theme.size.button.height[inputSize]};
  `}
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
    padding: 10px;
  border: 1px solid ${({ theme }) => theme.palette.black};
  background-color: ${({ theme }) => theme.palette.background.white};
`;

export default InputComponent;
