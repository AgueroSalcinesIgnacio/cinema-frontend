import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useAppSelector } from "../../../config/store";
import DataNotFound from "../../common/DataNotFound";

const MoviesTable = () => {
  const movies = useAppSelector((state) => state.movies.data);

  const columns: GridColDef[] = [
    {
      field: "title",
      headerName: "Title",
      flex: 4,
    },
    {
      field: "releaseYear",
      headerName: "Release year",
      flex: 4,
    },
    {
      field: "rating",
      headerName: "Rating",
      flex: 4,
    },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      {movies && movies.length > 0 ? (
        <DataGrid
          rows={movies}
          columns={columns}
          getRowId={(row) => row.id}
          disableRowSelectionOnClick
        />
      ) : (
        <DataNotFound />
      )}
    </Box>
  );
};

export default MoviesTable;
