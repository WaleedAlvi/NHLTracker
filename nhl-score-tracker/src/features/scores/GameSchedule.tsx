import React from 'react';
import { IGames } from '../../app/models/games';
import { GamesByDate } from './GamesByDate';

interface IProps {
  gameSchedule: IGames[];
}

export const GameSchedule: React.FC<IProps> = ({ gameSchedule }) => {
  return (
    <div>
      {gameSchedule.map((schedule) => {
        <GamesByDate date={schedule.date} games={schedule.games} />;
      })}
    </div>
  );
};
