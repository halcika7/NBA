import { ActionReducerMap } from "@ngrx/store";

import * as fromHome from "@app/home/store/home.reducer";

export interface AppState {
  home: fromHome.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  home: fromHome.homeReducer
};
