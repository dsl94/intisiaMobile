import { createReducer, on } from '@ngrx/store';
import {BasicUser} from "../dto/basic-user.dto";
import {bookFlight, changeLocation, initBasicUserInfo, resetBasicUserInfo} from "./user.actions";
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
  on(bookFlight, (state, { booked }) => ({
    ...state,
    user: {
      ...state.user,
      hasBookedFlight: booked,
    }
  })),
);
