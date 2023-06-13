import { css, styled } from "styled-components";

const itemCss = css`
  margin: 5px;
  text-align: center;
  padding: 10px;
  padding-bottom: 8px;
  width: 32px;
  height: 32px;
  font-size: 32px;
  box-sizing: border-box;
  color: black;
  background-color: white;
`;

export const Input = styled.input`
  ${itemCss}

  border-radius: 4px;
  border: 1px solid grey;
  outline: none;

  &:focus {
    border-color: blue;
  }

  @media (min-width: 768px) {
    /* Tablets */
    width: 40px;
    height: 40px;
  }

  @media (min-width: 1200px) {
    /* Desktop */
    width: 56px;
    height: 56px;
  }
`;

export const Container = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  margin-block-start: 0;
  margin-block-end: 0;

  @media (min-width: 768px) {
    /* Tablets */
    font-size: 24px;
  }
`;

export const ErrorText = styled(Text)`
  color: red;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 5px;
`;
