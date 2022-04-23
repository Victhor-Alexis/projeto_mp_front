import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const MusicsBox = styled.div`
  height: 60%;
  width: 85%;
  overflow-y: scroll;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ButtonsWrapper = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  width: 36rem;
  justify-content: space-between;
`;