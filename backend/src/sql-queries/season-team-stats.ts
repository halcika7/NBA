export const season_team_stats_query = (season: string): string => `
SELECT 
 	t.name AS team_name,
  	CONCAT('/teams/', t.short_name) AS team_url,
 	hg.hg + ag.ag AS tot_games,
 	hg.home_game_wons + ag.away_game_wons AS games_won,
 	hg.home_game_losses + ag.away_game_losses AS games_loss,
 	ROUND(((hg.home_game_wons + ag.away_game_wons) / ROUND(hg.hg + ag.ag)) * 100, 2) AS win_loss_percentage,
 	ROUND(SUM(ps.fg) / ROUND(hg.hg + ag.ag), 1) AS fg,
 	ROUND(SUM(ps.fga) / ROUND(hg.hg + ag.ag), 1) AS fga, 
 	ROUND(avg(ps.fgp)::decimal * 100, 1) AS fgp, 
 	ROUND(SUM(ps.fg3) / ROUND(hg.hg + ag.ag), 1) AS fg3, 
 	ROUND(SUM(ps.fg3a) / ROUND(hg.hg + ag.ag), 1) AS fg3a, 
 	ROUND(avg(ps.fg3p)::decimal *100,1) AS fg3p, 
 	ROUND(SUM(ps.ft) / ROUND(hg.hg + ag.ag), 1) AS ft, 
 	ROUND(SUM(ps.fta) / ROUND(hg.hg + ag.ag), 1) AS fta, 
 	ROUND(avg(ps.ftp)::decimal * 100,1) AS ftp, 
 	ROUND(SUM(ps.orb) / ROUND(hg.hg + ag.ag), 1) AS orb, 
 	ROUND(SUM(ps.drb) / ROUND(hg.hg + ag.ag), 1) AS drb, 
 	ROUND(SUM(ps.trb) / ROUND(hg.hg + ag.ag), 1) AS trb, 
 	ROUND(SUM(ps.ast) / ROUND(hg.hg + ag.ag), 1) AS ast, 
 	ROUND(SUM(ps.stl) / ROUND(hg.hg + ag.ag), 1) AS stl, 
 	ROUND(SUM(ps.blk) / ROUND(hg.hg + ag.ag), 1) AS blk, 
 	ROUND(SUM(ps.tov) / ROUND(hg.hg + ag.ag), 1) AS tov, 
 	ROUND(SUM(ps.pf) / ROUND(hg.hg + ag.ag), 1) AS pf, 
 	ROUND(SUM(ps.pts) / ROUND(hg.hg + ag.ag), 1) AS pts,
 	ROUND((hg.home_opponent_scored + ag.away_opponent_scored) / ROUND(hg.hg + ag.ag), 1) AS opponent_pts
 FROM public.player_stats AS ps
 LEFT JOIN public.teams AS t
 	ON ps.team_id = t.id
 LEFT JOIN (
 	SELECT 
 	home_team_id,
 	COUNT(
 		CASE 
 		   WHEN home_team_score > away_team_score THEN 1
  		END
 	) AS home_game_wons,
 	COUNT(
 		CASE 
 		   WHEN home_team_score < away_team_score THEN 1
  		END
 	) AS home_game_losses,
 	SUM(away_team_score) AS home_opponent_scored,
 	COUNT(home_team_id)::decimal AS hg
 	FROM public.games
 	WHERE season = '${season}' AND playoff = false 
 	GROUP BY home_team_id
 ) AS hg
 	ON ps.team_id = hg.home_team_id
 LEFT JOIN (
 	SELECT 
 	away_team_id,
 	COUNT(
 		CASE 
 		   WHEN home_team_score < away_team_score THEN 1
  		END
 	) AS away_game_wons,
 	COUNT(
 		CASE 
 		   WHEN home_team_score > away_team_score THEN 1
  		END
 	) AS away_game_losses,
 	SUM(home_team_score) AS away_opponent_scored,
 	COUNT(away_team_id)::int AS ag
 	FROM public.games
 	WHERE season = '${season}' AND playoff = false
 	GROUP BY away_team_id
 ) as ag
 	ON ps.team_id = ag.away_team_id
 WHERE ps.season = '${season}' AND ps.playoff = false
 GROUP BY 
	 t.name, 
 	t.short_name, 
 	hg.home_game_wons, 
 	hg.home_game_losses,
 	hg.home_opponent_scored,
 	ag.away_game_wons, 
 	ag.away_game_losses,
 	ag.away_opponent_scored,
 	hg.hg,
 	ag.ag
 ORDER BY games_won DESC, games_loss ASC;
`;
