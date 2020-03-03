import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Actions, ofType, Effect } from "@ngrx/effects";
import { map, catchError, switchMap } from "rxjs/operators";
import * as HomePageActions from "./home.actions";
import { ISeasonStanding } from "@app/shared/models/ISeasonSTanding";

@Injectable()
export class HomeEffects {
  @Effect()
  getCurrentStandings = this.actions$.pipe(
    ofType(HomePageActions.CURRENT_STANDINGS_START),
    switchMap(({ url }: HomePageActions.CurrentStandingsStart) => {
      return this.http
        .get<ISeasonStanding[]>("/teams/season/stats/" + url)
        .pipe(
          map(resData => {
            console.log("HomeEffects -> resData", resData);
            return new HomePageActions.CurrentStandingsSuccess(resData);
          })
          // catchError(({ error }) => of(new AuthActions.AuthFailed(error)))
        );
    })
  );

  constructor(private actions$: Actions, private http: HttpClient) {}
}
