import { ITeamScore } from './teamScore';

export interface IGameStatus{
    date: string,
    status: string,
    homeTeam: ITeamScore,
    awayTeam: ITeamScore,
}