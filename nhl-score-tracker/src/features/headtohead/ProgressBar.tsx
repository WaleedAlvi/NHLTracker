import React from 'react';
import { ITeam } from '../../app/models/team';
import { teamCategory } from '../../app/shared/enums';
import * as calculateStat from '../../app/shared/calculateTotal';
import { observer } from 'mobx-react-lite';

interface IProps {
  teams: ITeam[];
  otherTeams: ITeam[];
  category: teamCategory;
  backgroundColour: string;
  rightAlign: boolean;
}

const ProgressBar: React.FC<IProps> = ({
  teams,
  otherTeams,
  category,
  backgroundColour,
  rightAlign,
}) => {
  let teamTotal: number = 0;
  let otherTeamTotal: number = 0;
  switch (category) {
    case teamCategory.gamesPlayed: {
      teamTotal = calculateStat.TotalGamesPlayed(teams);
      otherTeamTotal = calculateStat.TotalGamesPlayed(otherTeams);
      break;
    }
    case teamCategory.wins: {
      teamTotal = calculateStat.TotalWins(teams);
      otherTeamTotal = calculateStat.TotalWins(otherTeams);
      break;
    }
    case teamCategory.losses: {
      teamTotal = calculateStat.TotalLoses(teams);
      otherTeamTotal = calculateStat.TotalLoses(otherTeams);
      break;
    }
    case teamCategory.overTimeLoses: {
      teamTotal = calculateStat.TotalOTLoses(teams);
      otherTeamTotal = calculateStat.TotalOTLoses(otherTeams);
      break;
    }
    case teamCategory.points: {
      teamTotal = calculateStat.TotalPoints(teams);
      otherTeamTotal = calculateStat.TotalPoints(otherTeams);
      break;
    }
    default: {
      break;
    }
  }
  const teamTotalPercentage: number = Math.round(
    (teamTotal / (teamTotal + otherTeamTotal)) * 100
  );
  const teamTotalPercentageString: string = teamTotalPercentage + '%';

  return (
    <div style={{ backgroundColor: 'lightgray' }}>
      <div
        style={{
          width: teamTotalPercentageString,
          height: '30px',
          backgroundColor: backgroundColour,
          lineHeight: '30px',
          marginLeft: rightAlign ? 'auto' : '',
          marginRight: rightAlign ? '0' : '',
        }}
      ></div>
    </div>
  );
};

export default observer(ProgressBar);
