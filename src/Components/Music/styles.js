import styled from "styled-components";

export const Container = styled.div`
  width: 22rem;
  height: 5.5rem;
  background-color: #1B1611;
  margin: 1rem 0;
  cursor: pointer;
  color: #F9F6F0;
  padding: 0.4rem 1rem 0.4rem 0.4rem;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;

  img {
    width: 4.5rem;
    height: 4.5rem;
    background-color: #ccc;
    font-size: 10px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  width: calc(100% - 5rem);

  h2 {
    font-size: 16px;
    font-weight: normal;
  }

  p {
    font-size: 12px;
    width: 100%;
    margin-top: 0.8rem;
  }
`;