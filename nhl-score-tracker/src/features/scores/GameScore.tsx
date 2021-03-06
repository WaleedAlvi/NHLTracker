import React from 'react';
import { observer } from 'mobx-react-lite';
import { IGameStatus } from '../../app/models/gameStatus';
import TeamScore from './TeamScore';

interface IProps {
  game: IGameStatus;
}

const GameScore: React.FC<IProps> = ({ game }) => {
  const homeStyle: React.CSSProperties = { marginTop: '10px' };
  const awayStyle: React.CSSProperties = { marginBottom: '10px' };

  return (
    <div style={{ border: '1px solid black', margin: 5, padding: 5 }}>
      <div>{game.status}</div>
      <TeamScore teamScore={game.awayTeam} />
      <TeamScore teamScore={game.homeTeam} />
    </div>
  );
};

export default observer(GameScore);
