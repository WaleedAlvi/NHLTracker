import React from 'react';
import { observer } from 'mobx-react-lite';
import { IGameStatus } from '../../app/models/gameStatus';
import TeamScore from './TeamScore';
import { Segment } from 'semantic-ui-react';

interface IProps {
  game: IGameStatus;
}

const GameScore: React.FC<IProps> = ({ game }) => {
  return (
    <Segment
      style={{
        margin: 5,
        padding: 10,
        minWidth: 225,
        maxWidth: 225,
        minHeight: 125,
        maxHeight: 125,
      }}
    >
      <div style={{ marginBottom: 5 }}>{game.status}</div>
      <TeamScore
        teamScore={game.awayTeam}
        Style={{
          marginBottom: 5,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      />
      <TeamScore
        teamScore={game.homeTeam}
        Style={{
          marginTop: 5,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      />
    </Segment>
  );
};

export default observer(GameScore);
