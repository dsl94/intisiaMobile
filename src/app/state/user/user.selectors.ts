import { createSelector } from '@ngrx/store';
import { UserState } from './user.reducer';
import { AppState } from '../app.state';

export const selectUser = (state: AppState) => state.user;
export const selectLocation = createSelector(
  selectUser,
  (state: UserState) => state.user?.location
);
export const selectHasBookedFlight = createSelector(
  selectUser,
  (state: UserState) => state.user?.hasBookedFlight
);
