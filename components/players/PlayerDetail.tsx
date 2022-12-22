import { Col, Row, Card, Image, ListGroup, Spinner } from "react-bootstrap";

import { IPlayers } from "../../interfaces/teams";
import { FC, useMemo, useState } from "react";
import NextLink from "next/link";

interface Props {
  player: IPlayers;
}

export const PlayerDetail: FC<Props> = ({ player }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const playerImage = useMemo(() => {
    setIsImageLoaded(true);
    return player.image;
  }, [isImageLoaded, player.image]);

  return (
    <>
      <Col md={3}>
        {isImageLoaded ? (
          <Image src={playerImage} alt={player.name} fluid />
        ) : (
          <Spinner />
        )}
      </Col>
      <Col>
        <h4>
          {player.dorsal} - {player.name}
        </h4>
        <ListGroup className="text-left mt-3 ms-0 me-0 p-0" variant="flush">
          <ListGroup.Item className="text-left mb-2 ps-0 pe-0">
            {player.club}
          </ListGroup.Item>
          <ListGroup.Item className="text-left mb-2 ps-0 pe-0">
            Position: {player.position_abbreviate} - {player.position}
          </ListGroup.Item>
          <ListGroup.Item className="text-left mb-2 ps-0 pe-0">
            Birthday: {player.birthday}
          </ListGroup.Item>
          <ListGroup.Item className="text-left mb-2 ps-0 pe-0">
            Nationality: {player.nationality}
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </>
  );
};
