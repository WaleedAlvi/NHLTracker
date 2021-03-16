import { ITeamScore } from './teamScore';

export interface IGameStatus{
    date: string,
    status: string,
    winningTeam: string,
    homeTeam: ITeamScore,
    awayTeam: ITeamScore,
}