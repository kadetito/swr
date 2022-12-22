import { Col, Row, Card, Image, ListGroup, Spinner } from "react-bootstrap";

import { IPlayers } from "../../interfaces/teams";
import { FC, useMemo, useState } from "react";
import NextLink from "next/link";

interface Props {
  player: IPlayers;
}

export const PlayerCard: FC<Props> = ({ player }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const playerImage = useMemo(() => {
    setIsImageLoaded(true);
    return player.image;
  }, [isImageLoaded, player.image]);

  return (
    <Col key={player._id} xs={6} md={4} lg={4}>
      <NextLink href={`/player/${player.slug}`} passHref>
        <Card className="fm__cardhover mb-4 cardanimation">
          <Card.Body>
            <h4>
              {player.dorsal} - {player.name}
            </h4>

            <Row>
              <Col>{player.position_abbreviate}</Col>
            </Row>
            <Row>
              <Col>{player.birthday}</Col>
            </Row>

            {isImageLoaded ? (
              <Image src={playerImage} alt={player.name} fluid />
            ) : (
              <Spinner />
            )}
          </Card.Body>
        </Card>
      </NextLink>
    </Col>
  );
};
