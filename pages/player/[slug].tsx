import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

import { dbTeams } from "../../database";

import { ContentLayout } from "../../layouts/ContentLayout";
import { Col, Row, Card, Image, ListGroup, Spinner } from "react-bootstrap";

import { IPlayers, ITeams } from "../../interfaces/teams";
import { useMemo, useState } from "react";
import { PlayerCard } from "@/components/players";
import { PlayerDetail } from "../../components/players/PlayerDetail";
import NextLink from "next/link";

interface Props {
  registro: any;
}

const TeamsPage: NextPage<Props> = ({ registro }) => {
  const router = useRouter();
  const { name, slug } = registro[0].players;

  return (
    <ContentLayout
      queryType="player"
      title={name}
      pageDescription={name}
      breadcrumbs={
        <>
          <NextLink href={`/teams/${registro[0].slug}`}>
            {registro[0].formal_name}
          </NextLink>{" "}
          / {name}
        </>
      }
    >
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Row>
                <Col>
                  <Row className="fm__cardstyles">
                    <PlayerDetail key={slug} player={registro[0].players} />
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
  const registroSlugs = await dbTeams.getAllPlayersSlugs();

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
  const registro = await dbTeams.getPlayerBySlug(slug);

  if (!registro) {
    return {
      redirect: {
        destination: "/player",
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
