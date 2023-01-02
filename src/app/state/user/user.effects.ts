import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {AppState} from "../app.state";
import {UserService} from "../../services/user.service";
import {Store} from "@ngrx/store";
import {changeLocation} from "./user.actions";
import { of, from } from 'rxjs';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import {loadRoutes} from "../route/route.actions";

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private userService: UserService
  ) {}


  // Run this code when the addTodo or removeTodo action is dispatched
  changeLocation$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(changeLocation),
        switchMap(( location) => from(this.userService.changeLocation(location.location)).pipe(
          map(() => loadRoutes())
          )
        )
      ),
  );
}
