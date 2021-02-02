import React from 'react';
import { IGames } from '../../app/models/games';
import { GamesByDate } from './GamesByDate';

interface IProps {
  games: IGames[];
}

export const GameSchedule: React.FC<IProps> = ({ games }) => {
  return (
    <div>
      {games.map((game: IGames) => {
        <GamesByDate games={game.games} />;
      })}
    </div>
  );
};
