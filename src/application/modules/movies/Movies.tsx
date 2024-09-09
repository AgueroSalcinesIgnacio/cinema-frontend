import { Box, CircularProgress, Typography } from "@mui/material";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../config/store";
import { getAllMovies } from "./slice/MoviesSlice";
import MoviesTable from "./table/MoviesTable";

const Movies = () => {
  const dispatch = useAppDispatch();

  const loading = useAppSelector((state) => state.movies.loading);

  useEffect(() => {
    dispatch(getAllMovies());
  }, []);

  return (
    <>
      <Box>
        <Typography>Movies</Typography>
      </Box>
      {loading ? (
        <Box>
          <CircularProgress />
        </Box>
      ) : (
        <MoviesTable />
      )}
    </>
  );
};

export default Movies;
