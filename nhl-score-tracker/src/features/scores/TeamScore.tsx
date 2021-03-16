import React from 'react';
import { ITeamScore } from '../../app/models/teamScore';
import { observer } from 'mobx-react-lite';

interface IProps {
  teamScore: ITeamScore;
  Style: React.CSSProperties;
  WinningTeam: string;
}

const TeamScore: React.FC<IProps> = ({ teamScore, Style, WinningTeam }) => {
  return (
    <div style={Style}>
      <img
        alt={teamScore.teamName}
        src={teamScore.logo}
        style={{ width: '35px', height: 'auto', fontSize: '.78571429rem' }}
      />
      <div
        style={
          WinningTeam === teamScore.teamName
            ? { fontWeight: 'bold', fontSize: 15 }
            : { fontSize: 15 }
        }
      >
        {teamScore.teamName}
      </div>
      <div
        style={
          WinningTeam === teamScore.teamName
            ? { fontWeight: 'bold', fontSize: 20 }
            : { fontSize: 20 }
        }
      >
        {teamScore.score}
      </div>
    </div>
  );
};

export default observer(TeamScore);
