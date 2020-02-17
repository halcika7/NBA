export interface Team {
  id: number;
  name: string;
  short_name: string;
  years: number;
  total_games: number;
  total_wins: number;
  total_losses: number;
  win_loss_percentage: number;
  champions: number;
  other_names: string;
  link: string;
  active: boolean;
}
