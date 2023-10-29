import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
  z-index: 1;

  display: flex;
  flex-direction: column;

  background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0) 72.4%,
      rgba(3, 10, 12, 0.64) 100%
    ),
    linear-gradient(90deg, rgba(3, 10, 12, 0.64) 0%, rgba(0, 0, 0, 0) 25.7%),
    linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 83.85%,
      rgba(3, 10, 12, 0.64) 100%
    ),
    linear-gradient(
      180deg,
      rgba(3, 10, 12, 0.64) 0%,
      rgba(0, 0, 0, 0) 16.15%,
      rgba(0, 0, 0, 0) 100%
    );
`;
