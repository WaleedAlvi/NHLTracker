import React from 'react';
import { IGames } from '../../app/models/games';
import GamesByDate from './GamesByDate';
import { observer } from 'mobx-react-lite';
import { Segment } from 'semantic-ui-react';

interface IProps {
  games: IGames[];
}

const GameSchedule: React.FC<IProps> = ({ games }) => {
  return (
    <div>
      {games.map((game: IGames) => {
        return (
          <Segment style={{ marginTop: 10 }}>
            <h3 style={{ marginLeft: 6 }}>{game.date}</h3>
            <GamesByDate games={game.games} />
          </Segment>
        );
      })}
    </div>
  );
};

export default observer(GameSchedule);
