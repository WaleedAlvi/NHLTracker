import React from 'react';
import { IGames } from '../../app/models/games';
import GamesByDate from './GamesByDate';
import { observer } from 'mobx-react-lite';

interface IProps {
  games: IGames[];
}

const GameSchedule: React.FC<IProps> = ({ games }) => {
  return (
    <div>
      {games.map((game: IGames) => {
        return <GamesByDate games={game.games} />;
      })}
    </div>
  );
};

export default observer(GameSchedule);
