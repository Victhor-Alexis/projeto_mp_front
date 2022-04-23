import styled from "styled-components";

export const Container = styled.div`
  width: 40rem;
  height: 25rem;
  background-color: #1B1611;
  color: #F9F6F0;
  padding: 0.4rem 1rem 0.4rem 0.4rem;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: 1.75rem auto 0 auto;

  img {
    width: 30rem;
    height: 12rem;
    background-color: #ccc;
    font-size: 10px;
    margin-top: 0.5rem;
  }
`;

export const TextWrapper = styled.div`
  width: calc(100% - 10rem);
  margin-top: -0.8rem;

  h2 {
    font-size: 16px;
    font-weight: normal;
    display: inline-block;
    :first-of-type {
      margin-right: 22rem;
    }
  }

  p {
    font-size: 12px;
    width: 100%;
    margin-top: 1.5rem;
    text-align: center;
  }
`;

export const Option = styled.div`
  h4 {
    font-size: 13px;
    font-weight: normal;
    margin-bottom: 0.65rem;
  }

  h5 {
    cursor: pointer;
    text-decoration: underline;
    font-weight: normal;
    margin-top: 1.5rem;
    color: #ECA820;
  }

  input {
    width: 5rem;

    :last-of-type {
      cursor: pointer;
    }
  }

  svg {
    cursor: pointer;
  }
`;

export const OptionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
`;