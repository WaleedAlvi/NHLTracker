import React from 'react';
import { ITeamScore } from '../../app/models/teamScore';
import { observer } from 'mobx-react-lite';

interface IProps {
  teamScore: ITeamScore;
  Style: React.CSSProperties;
}

const TeamScore: React.FC<IProps> = ({ teamScore, Style }) => {
  return (
    <div style={Style}>
      <img
        src={teamScore.logo}
        style={{ width: '35px', height: 'auto', fontSize: '.78571429rem' }}
      />
      <div>{teamScore.teamName}</div>
      <div>{teamScore.score}</div>
    </div>
  );
};

export default observer(TeamScore);
