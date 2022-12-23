import { Col, Row, Card, Image, ListGroup, Spinner } from "react-bootstrap";

import { IPlayers } from "../../interfaces/teams";
import { FC, useEffect, useMemo, useState } from "react";
import NextLink from "next/link";
import { FullScreenLoading } from "../ui";

interface Props {
  player: IPlayers;
}

export const PlayerCard: FC<Props> = ({ player }) => {
  const { slug, name } = player;
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    setLoaded(false);
  }, [isImageLoaded, player]);

  const playerImage = useMemo(() => {
    setIsImageLoaded(true);
    if (player) {
      return player.image;
    }
  }, [loaded, isImageLoaded, player]);

  return loaded ? (
    <FullScreenLoading />
  ) : (
    <NextLink href={`/player/${slug}`} passHref>
      <Card className="fm__cardhover mb-4 cardanimation">
        <Card.Body className="text-center">
          <h5 className="fm__maxh5height">{name}</h5>
          <Image className="mw-75" fluid src={playerImage} alt={name} />
        </Card.Body>
      </Card>
    </NextLink>
  );
};
