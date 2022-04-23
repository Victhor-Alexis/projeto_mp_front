import styled from "styled-components";

export const Container = styled.div`
  width: 20rem;    
  height: 30rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h2 {
    margin-bottom: 1rem;
  }

  form {
    height: inherit;
    width: inherit;
    text-align: center;
    margin: 2rem 0;

    input {
      width: 100%;
      height: 2.75rem;
      margin: 0.8rem 0;
      border: 2px solid #1B1611;
      background-color: #1B1611;
      cursor: pointer;
      color: white;
      outline: none;
    }

    input:first-of-type,
    input:nth-of-type(2) {
      cursor: text;
      background: none;
      padding-left: 0.5rem;
      color: black;
    }
  }
`;