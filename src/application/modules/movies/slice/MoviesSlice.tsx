import {
  createAsyncThunk,
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";
import { OutputMovieDTO } from "../../../../domain/movies/dto/OutputMovieDTO";
import { IMovie } from "../../../../domain/movies/model/IMovie";
import { apiGet } from "../../../../infrastructure/apliClient";
import { MOVIES } from "../../../../infrastructure/utils/ApiUrls";
import { CollectionEntityState } from "../../../utils/sliceUtils";

const initialState: CollectionEntityState<IMovie> = {
  loading: true,
  data: [],
};

export const getAllMovies = createAsyncThunk("movies/getAll", async () => {
  return await apiGet<OutputMovieDTO[]>(MOVIES);
});

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addMatcher(isFulfilled(getAllMovies), (state, action) => {
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    });
    builder.addMatcher(isPending(getAllMovies), (state) => {
      return {
        ...state,
        loading: true,
      };
    });
    builder.addMatcher(isRejected(getAllMovies), (state) => {
      return {
        ...state,
        loading: false,
        data: undefined,
      };
    });
  },
});

export default moviesSlice.reducer;
