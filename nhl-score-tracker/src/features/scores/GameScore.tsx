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
        margin: 4,
        minHeight: 140,
        minWidth: 240,
        alignItems: 'center',
        display: 'grid',
      }}
    >
      <TeamScore
        teamScore={game.awayTeam}
        Style={{
          marginBottom: 5,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        WinningTeam={game.winningTeam}
      />
      <div style={{ textAlign: 'center', fontSize: 12, color: 'green' }}>
        {game.status}
      </div>
      <TeamScore
        teamScore={game.homeTeam}
        Style={{
          marginTop: 5,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        WinningTeam={game.winningTeam}
      />
    </Segment>
  );
};

export default observer(GameScore);
