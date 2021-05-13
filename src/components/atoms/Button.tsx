import React, { memo } from "react";
import { SizeVariation } from "../../types/myType";
import styled, { css } from "styled-components";

type ButtonProps = Omit<JSX.IntrinsicElements["button"], "ref">;
type Props = ButtonProps & {
  className?: string;
  fullWidth?: boolean;
  size?: SizeVariation;
};

const ButtonComponent: React.FC<Props> = memo(
  ({
    className,
    children,
    size = "medium",
    fullWidth = false,
    ...buttonProps
  }) => {
    return (
      <Button
        className={className}
        buttonSize={size}
        fullWidth={fullWidth}
        {...buttonProps}
      >
        {children}
      </Button>
    );
  }
);

const Button = styled.button<{
  fullWidth?: boolean;
  buttonSize: SizeVariation;
}>`
  ${({ buttonSize }) => css`
    width: ${({ theme }) => theme.default.size.button.width[buttonSize]};
    height: ${({ theme }) => theme.default.size.button.height[buttonSize]};
  `}
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
  padding: 0;
  border: 1px solid ${({ theme }) => theme.default.palette.black};
  background-color: ${({ theme }) => theme.default.palette.background.white};
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: ${({ theme }) => theme.default.palette.typography.white};
    background-color: ${({ theme }) => theme.default.palette.black};
  }
`;

export default ButtonComponent;
