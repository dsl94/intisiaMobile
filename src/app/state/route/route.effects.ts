import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {AppState} from "../app.state";
import {Store} from "@ngrx/store";
import { of, from } from 'rxjs';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import {RouteService} from "../../services/route.service";
import {loadRoutes, loadRoutesFailure, loadRoutesSuccess} from "./route.actions";

@Injectable()
export class RouteEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private routeService: RouteService
  ) {}

  loadRoutes = createEffect(() =>
    this.actions$.pipe(
      ofType(loadRoutes),
      switchMap(() =>
        from(this.routeService.readRoutesForLocation()).pipe(
          map((routes) => loadRoutesSuccess({ routes: routes })),
          catchError((error) => of(loadRoutesFailure({ error })))
        )
      )
    )
  );
}
