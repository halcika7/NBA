import * as HomePageActions from "./home.actions";

import { ISeasonStanding } from "@app/shared/models/ISeasonSTanding";
import { ComponentFactoryResolver } from '@angular/core';

export interface State {
  seasonStandings: ISeasonStanding[];
}

const initialState: State = {
  seasonStandings: []
};

export function homeReducer(
  state = initialState,
  action: HomePageActions.HomePageActions
) {
  switch (action.type) {
    case HomePageActions.CURRENT_STANDINGS_SUCCESS:
      return { ...state, seasonStandings: action.payload };
    default:
      return state;
  }
}
