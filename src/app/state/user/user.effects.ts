import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {AppState} from "../app.state";
import {UserService} from "../../services/user.service";
import {Store} from "@ngrx/store";
import {changeLocation} from "./user.actions";
import {from, switchMap} from "rxjs";

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
        switchMap(( location) => from(this.userService.changeLocation(location.location)))
      ),
    // Most effects dispatch another action, but this one is just a "fire and forget" effect
    { dispatch: false }
  );
}
