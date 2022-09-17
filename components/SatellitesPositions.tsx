import styled from "styled-components";

import { ERROR_TYPE, position } from "../types";

type Props = {
  positions: position[];
  error: ERROR_TYPE;
};

const SatellitesPositions = ({ positions, error }: Props) => {
  if (error === ERROR_TYPE.SERVER_ISSUE) return <p>Service is not available</p>;

  if (error === ERROR_TYPE.EMPTY_DATA) return <p>No satellites were found</p>;

  return (
    <Wrapper>
      {positions.map(({ satid, satname, satlat, satlng, satalt }) => (
        <p key={satid}>
          <b>🛰️ {satname}: </b>{` lat: ${satlat} lng: ${satlng} alt: ${satalt} km`}
        </p>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  margin-top: 2rem;
`;

export default SatellitesPositions;
