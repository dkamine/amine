import { useState } from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import axios from "axios";

import SatellitesPositions from "../components/SatellitesPositions";
import Loading from "../components/Loading";
import { ERROR_TYPE, position } from "../types";

const IndexPage = () => {
  const [positions, setPositions] = useState<position[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<ERROR_TYPE>(null);

  const handleSearchClick = async () => {
    setLoading(true);
    try {
      const reponse = await axios.get("/api/positions");
      if (reponse.data?.above) {
        setPositions(reponse.data.above);
        setError(null);
      } else {
        setPositions([]);
        setError(ERROR_TYPE.EMPTY_DATA);
      }
    } catch (err: any) {
      setPositions([]);
      setError(ERROR_TYPE.SERVER_ISSUE);
    }
    setLoading(false);
  };

  return (
    <Layout title="Galileo Tracker">
      <Title>Find your way back to your office 👋</Title>
      <Button onClick={handleSearchClick}>
        Load Galileo satellites positions
      </Button>
      {isLoading ? (
        <Loading />
      ) : (
        <SatellitesPositions positions={positions} error={error} />
      )}
    </Layout>
  );
};

const Title = styled.h1`
  color: #1f3356;
`;

const Button = styled.button`
  padding: 10px 32px;
  border-radius: 36px;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.6;
  display: inline-block;
  transition: all 0.1s;
  background-color: #1157fb;
  color: #fff;
  border: 1px solid transparent;
  box-shadow: inset 0 -2px 1px 0 rgb(31 51 86 / 20%);
  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: #1157fb;
    box-shadow: none;
    border: 1px solid #1157fb;
  }
`;

export default IndexPage;
