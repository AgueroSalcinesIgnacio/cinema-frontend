import {
  createAsyncThunk,
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";
import { InputUserDTO } from "../../../../../domain/users/dto/InputUserDTO";
import { IUser } from "../../../../../domain/users/model/IUser";
import { saveUser } from "../../../../../domain/users/service/userService";
import { EntityState } from "../../../../utils/sliceUtils";

const initialState: EntityState<IUser> = {
  loading: true,
  data: undefined,
};

export const register = createAsyncThunk(
  "login/register",
  async (user: InputUserDTO) => {
    return saveUser(user);
  }
);

export const registerSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addMatcher(isFulfilled(register), (state, action) => {
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    });
    builder.addMatcher(isPending(register), (state) => {
      return {
        ...state,
        loading: true,
      };
    });
    builder.addMatcher(isRejected(register), (state) => {
      return {
        ...state,
        loading: false,
        data: undefined,
      };
    });
  },
});

export default registerSlice.reducer;
