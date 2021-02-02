import React from 'react';
import { IGameStatus } from '../../app/models/gameStatus';
import { GameScore } from './GameScore';

interface IProps {
  date: string;
  games: IGameStatus[];
}

export const GamesByDate: React.FC<IProps> = ({ date, games }) => {
  console.log(date);
  console.log(games);
  return (
    <div>
      {games.map((game) => {
        console.log(date);
        console.log(game);
      })}
    </div>
  );
};
