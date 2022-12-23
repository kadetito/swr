import { Card, Container, Row, Col, Image } from "react-bootstrap";
import { TeamCard } from "./TeamCard";

import NextLink from "next/link";
import useSWR from "swr";
import { ITeams } from "../../interfaces/teams";
import { FC } from "react";

interface Props {
  teams: ITeams[];
  isLoading: boolean;
}

export const TeamList: FC<Props> = ({ teams, isLoading }) => {
  return (
    <Row>
      {!isLoading &&
        teams.map((team) => (
          <Col key={team.slug} xs={3}>
            <TeamCard key={team.slug} useteams={team} />
          </Col>
        ))}
    </Row>
  );
};
