import { Card, Container, Row, Col, Image } from "react-bootstrap";
import NextLink from "next/link";
import useSWR from "swr";
import { ITeams } from "../../interfaces/teams";
import { FC } from "react";

interface Props {
  useteams: ITeams;
}

export const TeamCard: FC<Props> = ({ useteams }) => {
  const { slug, team_name, shield_image } = useteams;
  return (
    <NextLink href={`/teams/${slug}`} passHref>
      <Card className="fm__cardhover mb-4 cardanimation">
        <Card.Body className="text-center">
          <h5 className="fm__maxh5height">{team_name}</h5>
          <Image className="mw-75" fluid src={shield_image} alt={team_name} />
        </Card.Body>
      </Card>
    </NextLink>
  );
};
