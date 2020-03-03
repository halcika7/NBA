export const tableHeaders = {
  seasonStats: [
    {
      prop: "team_name",
      name: "Team Name",
      width: 175,
      tooltip: "Team name"
    },
    { prop: "tot_games", name: "G", width: 40, tooltip: "Games played" },
    { prop: "games_won", name: "W", width: 40, tooltip: "Wins" },
    { prop: "games_loss", name: "L", width: 40, tooltip: "Losses" },
    {
      prop: "win_loss_percentage",
      name: "W%L",
      width: 70,
      tooltip: "Win loss percentage"
    },
    {
      prop: "fg",
      name: "FGM",
      width: 60,
      tooltip: "Average field goals made"
    },
    {
      prop: "fga",
      name: "FGA",
      width: 60,
      tooltip: "Average field goals attempts"
    },
    {
      prop: "fgp",
      name: "FG%",
      width: 60,
      tooltip: "Average field goal percentage"
    },
    { prop: "fg3", name: "3PM", width: 60, tooltip: "Average 3 points made" },
    {
      prop: "fg3a",
      name: "3PA",
      width: 60,
      tooltip: "Average 3 points attempts"
    },
    {
      prop: "fg3p",
      name: "3P%",
      width: 60,
      tooltip: "Average 3 points percentage"
    },
    { prop: "ft", name: "FTM", width: 60, tooltip: "Average free throws made" },
    {
      prop: "fta",
      name: "FTA",
      width: 60,
      tooltip: "Average free throws attepmts"
    },
    {
      prop: "ftp",
      name: "FT%",
      width: 60,
      tooltip: "Average free throws percentage"
    },
    { prop: "orb", name: "ORB", width: 60, tooltip: "Offensive rebounds" },
    { prop: "drb", name: "DRB", width: 60, tooltip: "Defensive rebounds" },
    { prop: "trb", name: "TRB", width: 60, tooltip: "Total rebounds" },
    { prop: "ast", name: "AST", width: 60, tooltip: "Assists" },
    { prop: "stl", name: "STL", width: 50, tooltip: "Steals" },
    { prop: "blk", name: "BLK", width: 50, tooltip: "Blcks" },
    { prop: "tov", name: "TOV", width: 50, tooltip: "Turnovers" },
    { prop: "pf", name: "PF", width: 50, tooltip: "Persoonal fouls" },
    { prop: "pts", name: "PTS", width: 95, tooltip: "Average points per game" },
    {
      prop: "opponent_pts",
      name: "OPTS",
      width: 95,
      tooltip: "Average allowed points per game"
    }
  ]
};

export interface TableHeader {
  seasonStats: { name: string; prop: string; width: number; tooltip: string }[];
}
