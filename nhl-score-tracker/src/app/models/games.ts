import { IGameStatus } from './gameStatus';

export interface IGames {
    date: string,
    games: IGameStatus[],
}