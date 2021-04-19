import React, { useEffect } from 'react';
import { Container, Grid, Segment, Table } from 'semantic-ui-react';
import { IGames } from '../../app/models/games';
import { ITeam } from '../../app/models/team';
import * as calculateStat from '../../app/shared/calculateTotal';
import GameSchedule from '../scores/GameSchedule';
import TeamDetail from './TeamDetail';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import { seasonEndDate, seasonStartDate } from '../../app/shared/common';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../app/stores/rootStore';
import TeamTable from './TeamTable';

interface IProps {
  teams: ITeam[];
  teamSchedule: IGames[];
  teamName: string;
}

const TeamDashboard: React.FC<IProps> = ({ teams, teamName, teamSchedule }) => {
  const { teamsStore, datesStore } = useStore();

  let teamIds: number[] = [];
  teams.map((team) => {
    return teamIds.push(team.id);
  });

  useEffect(() => {
    teamsStore.loadScheudle(
      teamSchedule,
      teamIds,
      datesStore.startDate,
      datesStore.endDate
    );
  }, [
    datesStore.startDate,
    datesStore.endDate,
    teamSchedule,
    teamIds,
    teamsStore,
  ]);

  return (
    <Container>
      <TeamTable teams={teams} teamName={teamName} />

      <Container>
        <Segment>
          <Grid columns={2} stackable textAlign="center">
            <Grid.Row verticalAlign="middle">
              <Grid.Column>
                <SemanticDatepicker
                  allowOnlyNumbers={true}
                  value={new Date(datesStore.startDate)}
                  clearable={false}
                  type="basic"
                  onChange={datesStore.setStartDate}
                  minDate={seasonStartDate}
                  maxDate={seasonEndDate}
                />
              </Grid.Column>

              <Grid.Column>
                <SemanticDatepicker
                  allowOnlyNumbers={true}
                  value={new Date(datesStore.endDate)}
                  clearable={false}
                  type="basic"
                  onChange={datesStore.setEndDate}
                  minDate={datesStore.startDate}
                  maxDate={seasonEndDate}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <GameSchedule games={teamSchedule} />
        </Segment>
      </Container>
    </Container>
  );
};
export default observer(TeamDashboard);
