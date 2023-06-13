import { css, styled } from "styled-components";

const itemCss = css`
  margin: 5px;
  text-align: center;
  padding: 10px;
  padding-bottom: 8px;
  width: 56px;
  height: 56px;
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
`;

export const Container = styled.div``;

export const Headline = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 5px;
`;

export const Text = styled.p<{ error?: boolean }>``;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 -5px;
`;
