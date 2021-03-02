import React from 'react';
import { ITeam } from '../../app/models/team';
import { teamCategory } from '../../app/shared/enums';
import ProgressBar from './ProgressBar';
import * as calculateStat from '../../app/shared/calculateTotal';
import { observer } from 'mobx-react-lite';

interface IProp {
  boysTeam: ITeam[];
  girlsTeam: ITeam[];
  boysColour: string;
  girlsColour: string;
  category: teamCategory;
}

const HeadToHeadCategory: React.FC<IProp> = ({
  boysTeam,
  girlsTeam,
  boysColour,
  girlsColour,
  category,
}) => {
  return (
    <div style={{ marginTop: '30px', marginBottom: '30px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '8px',
        }}
      >
        <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
          {calculateStat.SelectCalculation(category, boysTeam)}
        </div>
        <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
          {teamCategory[category]}
        </div>
        <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
          {calculateStat.SelectCalculation(category, girlsTeam)}
        </div>
      </div>
      <div
        // Keeping the Two Progress Bar Inline with anther
        style={{
          width: '100vw',
          maxWidth: '100%',
          overflow: 'hidden',
          overflowX: 'auto',
          whiteSpace: 'nowrap',
        }}
      >
        <div
          // Style for Boys Progress Bar
          style={{
            paddingRight: '3px',
            width: '50%',
            height: '100%',
            display: 'inline-block',
          }}
        >
          <ProgressBar
            teams={boysTeam}
            otherTeams={girlsTeam}
            category={category}
            backgroundColour={boysColour}
            rightAlign={true}
          />
        </div>

        <div
          // Style for Girls Progress Bar
          style={{
            paddingLeft: '3px',
            width: '50%',
            height: '100%',
            display: 'inline-block',
          }}
        >
          <ProgressBar
            teams={girlsTeam}
            otherTeams={boysTeam}
            category={category}
            backgroundColour={girlsColour}
            rightAlign={false}
          />
        </div>
      </div>
    </div>
  );
};

export default observer(HeadToHeadCategory);
