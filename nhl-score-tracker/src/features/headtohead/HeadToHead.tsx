import React, { useEffect } from 'react';
import { Segment } from 'semantic-ui-react';
import { ITeam } from '../../app/models/team';
import { teamCategory } from '../../app/shared/enums';
import HeadToHeadCategory from './HeadToHeadCategory';
import { observer } from 'mobx-react-lite';
import TeamTable from '../teams/TeamTable';
import { useStore } from '../../app/stores/rootStore';

interface IProp {
  boysTeam: ITeam[];
  girlsTeam: ITeam[];
}

const HeadToHead: React.FC<IProp> = ({ boysTeam, girlsTeam }) => {
  const { teamsStore } = useStore();
  const girlsColour: string = 'teal';
  const boysColour: string = 'orange';

  return (
    <Segment clearing>
      <Segment clearing>
        <h3>Honda West</h3>
        <TeamTable teamName={'Honda West'} teams={teamsStore.westTeam} />
        <h3>Discover Central</h3>
        <TeamTable
          teamName={'Discover Central'}
          teams={teamsStore.centralTeam}
        />
        <h3>MassMutual East</h3>
        <TeamTable teamName={'MassMutual East'} teams={teamsStore.eastTeam} />
        <h3>Scotia North</h3>
        <TeamTable teamName={'Scotia North'} teams={teamsStore.northTeam} />
      </Segment>
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

export default observer(HeadToHead);
