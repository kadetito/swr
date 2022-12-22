import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

import { dbTeams } from "../../database";

import { ContentLayout } from "../../layouts/ContentLayout";
import { Col, Row, Card, Image, ListGroup, Spinner } from "react-bootstrap";

import { ITeams, IStadium } from "../../interfaces/teams";
import { useMemo, useState } from "react";
import { PlayerCard } from "@/components/players";
import NextLink from "next/link";

interface Props {
  registro: ITeams;
}

const TeamsPage: NextPage<Props> = ({ registro }) => {
  const router = useRouter();

  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const rI = useMemo(() => {
    setIsImageLoaded(true);
    return [
      {
        shieldImage: registro.shield_image,
        squadImage: registro.actually_squad_image,
        stadiumImage: registro.stadium.image,
        firstWearImage: registro.first_wear_image,
        secondWearImage: registro.second_wear_image,
      },
    ];
  }, [
    isImageLoaded,
    registro.shield_image,
    registro.actually_squad_image,
    registro.stadium.image,
    registro.first_wear_image,
    registro.second_wear_image,
  ]);

  return (
    <ContentLayout
      queryType="teams"
      title={registro.team_name}
      pageDescription={registro.formal_name}
      breadcrumbs={<NextLink href={`/teams`}>{registro.formal_name}</NextLink>}
    >
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Row>
                <Col md={3}>
                  <Image
                    thumbnail
                    src={rI[0].shieldImage}
                    alt={registro.team_name}
                    fluid
                  />

                  <ListGroup
                    className="text-left mt-3 ms-0 me-0 p-0"
                    variant="flush"
                  >
                    <ListGroup.Item className="text-left mb-2 ps-0 pe-0">
                      City: <b>{registro.location_city}</b>
                    </ListGroup.Item>
                    <ListGroup.Item className="text-left mb-2 ps-0 pe-0">
                      Year of foundation: <b>{registro.year_foundation}</b>
                    </ListGroup.Item>

                    <ListGroup.Item className="text-left mb-2 ps-0 pe-0">
                      Stadium: <b>{registro.stadium.name}</b>
                    </ListGroup.Item>
                    <ListGroup.Item className="text-left mb-2  ps-0 pe-0">
                      Address: <b>{registro.stadium.address}</b>
                    </ListGroup.Item>
                    <ListGroup.Item className="text-left mb-2  ps-0 pe-0">
                      Capacity: <b>{registro.stadium.capacity}</b>
                    </ListGroup.Item>
                    <ListGroup.Item className="text-left mb-2  ps-0 pe-0">
                      {isImageLoaded ? (
                        <Image
                          thumbnail
                          src={rI[0].stadiumImage}
                          alt={registro.stadium.name}
                          fluid
                        />
                      ) : (
                        <Spinner animation="border" size="sm" />
                      )}
                    </ListGroup.Item>
                  </ListGroup>

                  <Row className="mb-3 fm__cardstyles">
                    <h4>Technical Staff</h4>
                    {registro.technical_staff.map((coach) => (
                      <Col key={coach.name}>
                        <Card>
                          <Card.Body>
                            <h5>{coach.name}</h5>
                            <p>{coach.appointment}</p>
                            <Image
                              thumbnail
                              src={coach.image}
                              alt={coach.name}
                              fluid
                            />
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Col>
                <Col>
                  <Card.Title as="h3">{registro.team_name}</Card.Title>
                  <Card.Title as="h5">{registro.formal_name}</Card.Title>
                  <hr />

                  <Row>
                    <Col>
                      <ListGroup variant="flush">
                        <ListGroup.Item>
                          League: <b>{registro.league.name}</b>
                        </ListGroup.Item>
                      </ListGroup>

                      {isImageLoaded ? (
                        <Image
                          thumbnail
                          src={rI[0].squadImage}
                          alt={registro.formal_name}
                          fluid
                          className="mb-4"
                        />
                      ) : (
                        <Spinner animation="border" size="sm" />
                      )}
                    </Col>
                    <Col md={3}>
                      {isImageLoaded ? (
                        <>
                          <Image
                            className="mb-3"
                            thumbnail
                            src={rI[0].firstWearImage}
                            alt={registro.formal_name}
                            fluid
                          />
                          <Image
                            thumbnail
                            src={rI[0].secondWearImage}
                            alt={registro.formal_name}
                            fluid
                          />
                        </>
                      ) : (
                        <Spinner animation="border" size="sm" />
                      )}
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <Row className="fm__cardstyles">
                        <h4>Team Players</h4>
                        {registro.players.map((player) => (
                          <PlayerCard key={player.slug} player={player} />
                        ))}
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </ContentLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const registroSlugs = await dbTeams.getAllTeamsSlugs();

  return {
    paths: registroSlugs.map(({ slug }) => ({
      params: {
        slug,
      },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug = "" } = params as { slug: string };
  const registro = await dbTeams.getTeamsBySlug(slug);

  if (!registro) {
    return {
      redirect: {
        destination: "/teams",
        permanent: false,
      },
    };
  }

  return {
    props: {
      registro,
    },
    revalidate: 60 * 60 * 24,
  };
};

export default TeamsPage;
