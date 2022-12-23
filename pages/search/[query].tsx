import type { NextPage, GetServerSideProps } from "next";
import { Typography, Box } from "@mui/material";

import { ContentLayout } from "../../layouts";

import { TeamList } from "../../components/teams";

import { dbTeams } from "../../database";
import { ITeams } from "../../interfaces";
import NextLink from "next/link";
import { IPlayers } from "../../interfaces/players";
import { PlayersList } from "../../components/players/PlayersList";
import { PlayerCard } from "@/components/players";
import { useEffect, useState } from "react";

interface Props {
  teams: ITeams[];
  foundTeams: boolean;
  query: string;
}

const SearchPage: NextPage<Props> = ({ teams, foundTeams, query }) => {
  const [giocatora, setGiocatora] = useState<IPlayers[]>([]);

  useEffect(() => {
    {
      teams.map((jugadora) =>
        jugadora.players.map((gioca) => {
          if (gioca.name.includes(query))
            setGiocatora((giocatora) => [...giocatora, gioca]);
        })
      );
    }
  }, [teams, query]);

  return (
    <ContentLayout
      title={"Teslo-Shop - Search"}
      pageDescription={"Encuentra los mejores productos de Teslo aquí"}
      breadcrumbs={<NextLink href="#">Search</NextLink>}
      queryType={""}
    >
      <Typography variant="h1" component="h1">
        Búsqueda
      </Typography>

      {foundTeams ? (
        <Typography variant="h2" sx={{ mb: 1 }} textTransform="capitalize">
          Los siguientes resultados contienen el término: <b>{query}</b>
        </Typography>
      ) : (
        <>
          <Box display="flex">
            <Typography variant="h2" sx={{ mb: 1 }}>
              No encontramos ningún produto
            </Typography>
            <Typography
              variant="h2"
              sx={{ ml: 1 }}
              color="secondary"
              textTransform="capitalize"
            >
              {query}
            </Typography>
          </Box>
        </>
      )}
      <>
        <PlayersList players={giocatora!} isLoading={false} />
        <TeamList teams={teams} isLoading={false} />
      </>
    </ContentLayout>
  );
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { query = "" } = params as { query: string };

  if (query.length === 0) {
    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  }

  // y no hay productos
  let teams = await dbTeams.getTeamsByTerm(query);
  const foundTeams = teams.length > 0;

  // TODO: retornar otros productos
  if (!foundTeams) {
    // teams = await dbProducts.getAllProducts();
    teams = await dbTeams.getTeamsByTerm("shirt");
  }

  return {
    props: {
      teams,
      foundTeams,
      query,
    },
  };
};

export default SearchPage;
