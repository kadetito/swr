import NextLink from "next/link";
import { AddOutlined, CategoryOutlined } from "@mui/icons-material";
import { Box, Button, CardMedia, Grid, Link } from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import useSWR from "swr";

import { AdminLayout } from "../../layouts";
import { ITeams } from "../../interfaces";

const columns: GridColDef[] = [
  {
    field: "img",
    headerName: "Foto",
    renderCell: ({ row }: GridRenderCellParams) => {
      return (
        <a href={`/teams/${row.slug}`} target="_blank" rel="noreferrer">
          <CardMedia
            component="img"
            alt={row.team_name}
            className="fadeIn"
            image={row.shield_image}
          />
        </a>
      );
    },
  },
  {
    field: "team_name",
    headerName: "Name",
    width: 250,
    renderCell: ({ row }: GridRenderCellParams) => {
      return (
        <NextLink href={`/admin/teams/${row.slug}`} passHref legacyBehavior>
          <Link underline="always">{row.team_name}</Link>
        </NextLink>
      );
    },
  },
  { field: "year_foundation", headerName: "Year foundation" },
];

const TeamsPage = () => {
  const { data, error } = useSWR<ITeams[]>("/api/admin/teams");

  if (!data && !error) return <></>;

  const rows = data!.map((team) => ({
    id: team._id,
    shield_image: team.shield_image,
    slug: team.slug,
    team_name: team.team_name,
    year_foundation: team.year_foundation,
  }));

  return (
    <AdminLayout
      title={`Teams (${data?.length})`}
      subTitle={"Mantenimiento de teams"}
      icon={<CategoryOutlined />}
    >
      <Box display="flex" justifyContent="end" sx={{ mb: 2 }}>
        <Button
          startIcon={<AddOutlined />}
          color="secondary"
          href="/admin/teams/new"
        >
          Crear team
        </Button>
      </Box>

      <Grid container className="fadeIn">
        <Grid item xs={12} sx={{ height: 650, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
          />
        </Grid>
      </Grid>
    </AdminLayout>
  );
};

export default TeamsPage;
