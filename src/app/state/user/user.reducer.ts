import { createReducer, on } from '@ngrx/store';
import {BasicUser} from "../dto/basic-user.dto";
import {changeLocation, initBasicUserInfo, resetBasicUserInfo} from "./user.actions";
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
  "USER_STATE",
  // Supply the initial state
  initialState,
  on(initBasicUserInfo, (state, { user }) => ({
    ...state,
    user: user
  })),
  on(resetBasicUserInfo, (state) => ({
    ...state,
    user: null
  })),
  on(changeLocation, (state, { location }) => ({
    ...state,
    user: {
      ...state.user,
      location: location,
    }
  })),
);
