import styled, { keyframes } from "styled-components";

const Loading = () => (
  <LoadingWrapper>
    <Text>Loading</Text>
    <Dot delay="0s" />
    <Dot delay="0.1s" />
    <Dot delay="0.2s" />
  </LoadingWrapper>
);

const BounceAnimation = keyframes`
  0% { 
    margin-bottom: 0; 
  }

  50% { 
    margin-bottom: 1rem;
  }

  100% { 
    margin-bottom: 0;
  }
`;

const LoadingWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin: 1rem;
`;

const Text = styled.div`
  margin: 0.2rem;
`;

const Dot = styled.div`
  background-color: grey;
  border-radius: 50%;
  width: 0.5rem;
  height: 0.5rem;
  margin: 0 0.25rem;
  /*Animation*/
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${(props) => props.delay};
`;

export default Loading;
