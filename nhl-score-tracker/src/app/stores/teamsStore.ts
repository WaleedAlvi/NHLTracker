import {observable, action} from 'mobx';
import {createContext} from 'react'
import agent from '../api/agent';
import { IGames } from '../models/games';
import { ITeam } from '../models/team';

class TeamsStore {
    @observable boysTeam: ITeam[] = [];
    @observable girlsTeam: ITeam[] = [];
    @observable boysSchedule: IGames[] = [];
    @observable girlsSchedule: IGames[] = [];

    @action loadTeam = (lstOfTeams: ITeam[], teamIds: number[]) => {
        agent.Teams(teamIds).then((teams) => {
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
                    logo: '',
                }))
            })
        })
    }

    @observable loadScheudle = (teamSchedule: IGames[], teamIds: number[] ,startDate: Date, endDate: Date) => {
        agent.TeamGames(teamIds, startDate, endDate).then((scheudle) => {
            console.log(scheudle);
            scheudle.dates.map((date: any) => {
                return (teamSchedule.push({
                    date: date.date,
                    games: date.games.map((game: any) => {
                        return {
                            date: game.gameDate,
                            status: game.status.detailedState,
                            homeTeam: {
                              teamName: game.teams.home.team.name,
                              score: game.teams.home.score,
                            },
                            awayTeam: {
                              teamName: game.teams.away.team.name,
                              score: game.teams.away.score,
                            },
                        };
                    }),
                }))
            })
        })
    }
}

export default createContext(new TeamsStore());