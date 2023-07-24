import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: center;
justify-content: center;
  & > div,
  & > img {
    flex: 1;
  }

  div > h1 {
    font-size: 40px;
  }

  div > p {
    font-size: 26px;
    text-align: center;
    margin: 10px 20px;
  }

  @media(max-width: 768px) {
    flex-direction: column;

    & > div,
    & > p {
        text-align: center;
    }
  }

`;
