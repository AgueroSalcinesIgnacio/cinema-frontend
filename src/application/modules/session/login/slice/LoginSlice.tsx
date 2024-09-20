import {
  createAsyncThunk,
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";
import { InputTokenDTO } from "../../../../../domain/login/dto/InputTokenDTO";
import { OutputTokenDTO } from "../../../../../domain/login/dto/OutputTokenDTO";
import { IToken } from "../../../../../domain/login/model/IToken";
import { apiPost } from "../../../../../infrastructure/apliClient";
import { LOGIN_AUTHENTICATE } from "../../../../../infrastructure/utils/ApiUrls";
import { EntityState } from "../../../../utils/sliceUtils";

const initialState: EntityState<IToken> = {
  loading: true,
  data: undefined,
};

export const authenticate = createAsyncThunk(
  "login/authenticate",
  async (user: InputTokenDTO) => {
    return await apiPost<OutputTokenDTO>(LOGIN_AUTHENTICATE, user);
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addMatcher(isFulfilled(authenticate), (state, action) => {
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    });
    builder.addMatcher(isPending(authenticate), (state) => {
      return {
        ...state,
        loading: true,
      };
    });
    builder.addMatcher(isRejected(authenticate), (state) => {
      return {
        ...state,
        loading: false,
        data: undefined,
      };
    });
  },
});

export default loginSlice.reducer;
