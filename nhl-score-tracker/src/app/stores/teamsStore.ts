import { makeAutoObservable, runInAction } from 'mobx';
import agent from '../api/agent';
import { IGames } from '../models/games';
import { ITeam } from '../models/team';

export default class TeamsStore {
    boysTeam: ITeam[] = [];
    girlsTeam: ITeam[] = [];
    boysSchedule: IGames[] = [];
    girlsSchedule: IGames[] = [];

    constructor() {
        makeAutoObservable(this);
    }


    loadTeam = (lstOfTeams: ITeam[], teamIds: number[]) => {
        agent.Teams(teamIds).then((teams) => {
            runInAction(() => {
                teams.teams.map((team: any) => {
                    return (lstOfTeams.push({
                        id: team.id,
                        name: team.name,
                        division: team.division.name,
                        gamesPlayed: team.teamStats[0].splits[0].stat.gamesPlayed,
                        wins: team.teamStats[0].splits[0].stat.wins,
                        losses: team.teamStats[0].splits[0].stat.losses,
                        overTimeLoses: team.teamStats[0].splits[0].stat.ot,
                        points: team.teamStats[0].splits[0].stat.pts,
                        nhlURL: team.officialSiteUrl,
                        logo: `/assets/${team.id}_logo.png`,
                    }))
                })
            })
        })
    }

    loadScheudle = (teamSchedule: IGames[], teamIds: number[] ,startDate: Date, endDate: Date) => {
        teamSchedule.length = 0; 
        agent.TeamGames(teamIds, startDate, endDate).then((scheudle) => {
            console.log(scheudle.dates);
            runInAction(() => {
                scheudle.dates.map((date: any) => {
                    let sched: IGames = {
                        date: date.date,
                        games: date.games.map((game: any) => {
                            return {
                                date: game.gameDate,
                                status: game.status.detailedState,
                                homeTeam: {
                                  teamName: game.teams.home.team.name,
                                  score: game.teams.home.score,
                                  logo: `/assets/${game.teams.home.team.id}_logo.png`,
                                },
                                awayTeam: {
                                  teamName: game.teams.away.team.name,
                                  score: game.teams.away.score,
                                  logo: `/assets/${game.teams.away.team.id}_logo.png`,
                                },
                            };
                        }),
                    }
                    teamSchedule.push(sched);
                })
            })
        })
    }
}

// export default createContext(new TeamsStore());

