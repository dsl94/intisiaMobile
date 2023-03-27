import {createRehydrateReducer} from "../rehydrate.reducer";
import {Route} from "../../models/route.model";
import {on} from "@ngrx/store";
import {loadRoutes, loadRoutesFailure, loadRoutesSuccess} from "./route.actions";

export interface RouteState {
  routes: Route[];
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: RouteState = {
  routes: [],
  error: null,
  status: 'pending',
};

export const routesReducer = createRehydrateReducer(
  'ROUTE_STATE',
  initialState,
  on(loadRoutes, (state) => ({ ...state, status: 'loading' })),
  on(loadRoutesSuccess, (state, { routes }) => ({
    ...state,
    routes: routes,
    error: null,
    status: 'success',
  })),
  on(loadRoutesFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  }))
);
