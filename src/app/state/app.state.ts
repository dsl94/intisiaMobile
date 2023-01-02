import {UserState} from "./user/user.reducer";
import {RouteState} from "./route/route.reducer";

export interface AppState {
  user: UserState;
  routes: RouteState
}
