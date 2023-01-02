import { createReducer, on } from '@ngrx/store';
import {BasicUser} from "../dto/basic-user.dto";
import {initBasicUserInfo, resetBasicUserInfo} from "./user.actions";
import {createRehydrateReducer} from "../rehydrate.reducer";

export interface UserState {
  user: BasicUser | null;
  error: string | null;
}

export const initialState: UserState = {
  user: null,
  error: null,
};

export const userReducer = createRehydrateReducer(
  "INTISIA_STATE",
  // Supply the initial state
  initialState,
  on(initBasicUserInfo, (state, { user }) => ({
    ...state,
    user: user
  })),
  on(resetBasicUserInfo, (state) => ({
    ...state,
    user: null
  }))
);
