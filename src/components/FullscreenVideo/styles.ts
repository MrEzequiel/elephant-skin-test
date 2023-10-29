import styled from 'styled-components';

export const Video = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  object-position: center;
  z-index: -1;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  animation: fadeIn 500ms ease;
`;
