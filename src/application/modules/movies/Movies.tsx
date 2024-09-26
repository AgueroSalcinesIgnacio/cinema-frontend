import { Box, CircularProgress, Typography } from "@mui/material";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../config/store";
import DataNotFound from "../common/DataNotFound";
import { getAllMovies } from "./slice/MoviesSlice";
import MoviesTable from "./table/MoviesTable";

const Movies = () => {
  const dispatch = useAppDispatch();

  const loading = useAppSelector((state) => state.movies.loading);
  const movies = useAppSelector((state) => state.movies.data);

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
      ) : movies && movies?.length > 0 ? (
        <MoviesTable movies={movies} />
      ) : (
        <DataNotFound />
      )}
    </>
  );
};

export default Movies;
