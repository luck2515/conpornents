import React, { memo } from "react";
import styled from "styled-components";
import Button from "../atoms/Button";
import Input from "../atoms/Input";

interface Props {
  className?: string;
}
const InputFormComponent: React.FC<Props> = memo(({ className }) => {
  return (
    <InputForm className={className}>
      <Input fullWidth={true} placeholder="検索" />
      <Button>検索</Button>
    </InputForm>
  );
});

const InputForm = styled.div`
  display: flex;
  max-width: 300px;
  & > input {
    margin-right: 5px;
  }
`;

export default InputFormComponent;
