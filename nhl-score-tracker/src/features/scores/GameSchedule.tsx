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
        return (
          <div style={{}}>
            <p>{game.date}</p>
            <GamesByDate games={game.games} />
          </div>
        );
      })}
    </div>
  );
};

export default observer(GameSchedule);
