import React from 'react';
import { IGameStatus } from '../../app/models/gameStatus';
import { GameScore } from './GameScore';

interface IProps {
  games: IGameStatus[];
}

export const GamesByDate: React.FC<IProps> = ({ games }) => {
  return (
    <div>
      {games.map((game) => {
        console.log(game.status);
      })}
    </div>
  );
};
