import { createAction, props } from '@ngrx/store';
import {BasicUser} from "../dto/basic-user.dto";

export const initBasicUserInfo = createAction(
  '[Login Page] Init Basic User',
  props<{ user: BasicUser }>()
);

export const changeLocation = createAction(
  '[Profile Page] Change Location',
  props<{ location: string }>()
);


export const resetBasicUserInfo = createAction(
  '[Logout Action] Reset Basic User'
);

