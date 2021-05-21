import React, { memo } from "react";
import styled from "styled-components";
import Layout from "../../styles/Lyaout";
import { useMediaQueryContext } from "../Provider/MediaQueryProvider";

interface Props {
  className?: string;
}
const DetailComponent: React.FC<Props> = memo(({ className }) => {
  const { isMobile } = useMediaQueryContext();
  return (
    <Layout>
      <Detail className={className}>
        <p>detail</p>
        <Head>
          <ImageWrapper>
            <Image />
          </ImageWrapper>
          <Info />
        </Head>
        <Body>
          <Materials />
          <Processes />
        </Body>
      </Detail>
    </Layout>
  );
});

const Detail = styled.div``;
const Head = styled.div`
  display: flex;
`;
const Body = styled.div`
  margin-top: 12px;
  display: flex;
`;
const ImageWrapper = styled.div`
  border: solid 1px #ccc;
  margin-right: 12px;
  position: relative;
  width: 100%;
  &:before {
    content: "";
    display: block;
    padding-top: 80%;
  }
`;
const Image = styled.div`
  /* height: 100%;
  width: 100%;
  border: solid 1px #ccc; */
`;
const Info = styled.div`
  max-width: 300px;
  width: 100%;
  max-height: 400px;
  border: solid 1px #ccc;
`;
const Materials = styled.div`
  margin-right: 12px;
  width: calc(100% - 6px);
  height: 400px;
  border: solid 1px #ccc;
`;
const Processes = styled.div`
  width: calc(100% - 6px);
  height: 400px;
  width: 100%;
  border: solid 1px #ccc;
`;

export default DetailComponent;
