import {Route} from "../../models/route.model";
import { createAction, props } from '@ngrx/store';
export const loadRoutes = createAction('[Location Change Action] Load Flights');

export const loadRoutesSuccess = createAction(
  '[Route API] Todo Load Success',
  props<{ routes: Route[] }>()
);

export const loadRoutesFailure = createAction(
  '[Route API] Todo Load Failure',
  props<{ error: string }>()
);
