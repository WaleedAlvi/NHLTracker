import React from 'react';
import { Segment } from 'semantic-ui-react';
import { ITeam } from '../../app/models/team';
import { teamCategory } from '../../app/shared/enums';
import { HeadToHeadCategory } from './HeadToHeadCategory';

interface IProp {
  boysTeam: ITeam[];
  girlsTeam: ITeam[];
}

export const HeadToHead: React.FC<IProp> = ({ boysTeam, girlsTeam }) => {
  const girlsColour: string = 'teal';
  const boysColour: string = 'orange';

  return (
    <Segment clearing>
      <div>
        <h1
          style={{
            display: 'inline-block',
            width: '50%',
            paddingRight: '20px',
            textAlign: 'right',
          }}
        >
          Boys
        </h1>
        <h1
          style={{ display: 'inline-block', width: '50%', paddingLeft: '20px' }}
        >
          Girls
        </h1>
      </div>
      <HeadToHeadCategory
        boysTeam={boysTeam}
        girlsTeam={girlsTeam}
        boysColour={boysColour}
        girlsColour={girlsColour}
        category={teamCategory.gamesPlayed}
      />
      <HeadToHeadCategory
        boysTeam={boysTeam}
        girlsTeam={girlsTeam}
        boysColour={boysColour}
        girlsColour={girlsColour}
        category={teamCategory.wins}
      />
      <HeadToHeadCategory
        boysTeam={boysTeam}
        girlsTeam={girlsTeam}
        boysColour={boysColour}
        girlsColour={girlsColour}
        category={teamCategory.losses}
      />
      <HeadToHeadCategory
        boysTeam={boysTeam}
        girlsTeam={girlsTeam}
        boysColour={boysColour}
        girlsColour={girlsColour}
        category={teamCategory.overTimeLoses}
      />
      <HeadToHeadCategory
        boysTeam={boysTeam}
        girlsTeam={girlsTeam}
        boysColour={boysColour}
        girlsColour={girlsColour}
        category={teamCategory.points}
      />
    </Segment>
  );
};
