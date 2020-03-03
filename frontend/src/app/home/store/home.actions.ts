import { Action } from "@ngrx/store";
import { ISeasonStanding } from "@app/shared/models/ISeasonSTanding";

export const CURRENT_STANDINGS_START = "CURRENT_STANDINGS_START";
export const CURRENT_STANDINGS_SUCCESS = "CURRENT_STANDINGS_SUCCESS";

export class CurrentStandingsStart implements Action {
  readonly type = CURRENT_STANDINGS_START;
  constructor(public url: string) {}
}

export class CurrentStandingsSuccess implements Action {
  readonly type = CURRENT_STANDINGS_SUCCESS;
  constructor(public payload: ISeasonStanding[]) {}
}

export type HomePageActions = CurrentStandingsStart | CurrentStandingsSuccess;
