import { Card, Container, Row, Col, Image } from "react-bootstrap";

import NextLink from "next/link";
import useSWR from "swr";
import { ITeams } from "../../interfaces/teams";
import { FC } from "react";
import { IPlayers } from "../../interfaces/players";
import { PlayerCard } from "@/components/players";

interface Props {
  players: IPlayers[];
  isLoading: boolean;
}

export const PlayersList: FC<Props> = ({ players, isLoading }) => {
  function getUnique(players: any[], index: any) {
    const unique = players
      .map((e: any) => e[index])
      .map((e, i, final) => final.indexOf(e) === i && i)
      .filter((e: any) => players[e])
      .map((e: any) => players[e]);

    return unique;
  }

  return (
    <Row>
      {!isLoading &&
        getUnique(players, "slug").map((player, index) => (
          <Col key={index} xs={3}>
            <PlayerCard key={player.slug} player={player} />
          </Col>
        ))}
    </Row>
  );
};
