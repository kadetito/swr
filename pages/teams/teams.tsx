import React from "react";
import { TeamList } from "../../components/teams/TeamList";
import { ContentLayout } from "../../layouts/ContentLayout";
import { Row, Col } from "react-bootstrap";
import { FC } from "react";
import { useTeams } from "../../hooks/useTeams";

const Teams: FC = () => {
  const { teams, isLoading } = useTeams("/teams");

  return (
    <ContentLayout
      title="Medical Point - Pacients"
      pageDescription="Pacients description"
      queryType="pacients"
      breadcrumbs={""}
    >
      <TeamList teams={teams} isLoading={isLoading} />
    </ContentLayout>
  );
};

export default Teams;
