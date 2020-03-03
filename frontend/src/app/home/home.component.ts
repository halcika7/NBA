import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import * as fromApp from "@app/store/app.reducer";
import * as HomePageActions from "./store/home.actions";
import { ISeasonStanding } from "@app/shared/models/ISeasonSTanding";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  standings: ISeasonStanding[];

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(new HomePageActions.CurrentStandingsStart("current"));

    this.store.select("home").subscribe(({ seasonStandings }) => {
      this.standings = seasonStandings;
    });
  }
}
