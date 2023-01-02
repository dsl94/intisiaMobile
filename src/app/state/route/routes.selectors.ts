import { createSelector } from '@ngrx/store';
import { RouteState } from './route.reducer';
import { AppState } from '../app.state';

export const selectRoutes = (state: AppState) => state.routes;
export const selectAllRoutes = createSelector(
  selectRoutes,
  (state: RouteState) => state.routes
);
