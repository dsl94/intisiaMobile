import { createSelector } from '@ngrx/store';
import { UserState } from './user.reducer';
import { AppState } from '../app.state';

export const selectUser = (state: AppState) => state.user;
