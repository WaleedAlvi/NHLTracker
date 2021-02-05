import React, { useContext, useEffect, useState } from 'react';
import { Container, Grid, Segment, Table } from 'semantic-ui-react';
import agent from '../../app/api/agent';
import { IGames } from '../../app/models/games';
import { ITeam } from '../../app/models/team';
import * as calculateStat from '../../app/shared/calculateTotal';
import { GameSchedule } from '../scores/GameSchedule';
import { TeamDetail } from './TeamDetail';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import { seasonEndDate, seasonStartDate } from '../../app/shared/common';
import DatesStore from '../../app/stores/datesStore';
import TeamsStore from '../../app/stores/teamsStore';
import datesStore from '../../app/stores/datesStore';

interface IProps {
  teams: ITeam[];
  teamSchedule: IGames[];
  teamName: string;
}
export const TeamDashboard: React.FC<IProps> = ({
  teams,
  teamName,
  teamSchedule,
}) => {
  const teamsStore = useContext(TeamsStore);
  const dateStore = useContext(DatesStore);

  teams.sort((a, b) => b.points - a.points);
  let teamIds: number[] = [];

  useEffect(() => {
    teams.map((team) => {
      teamIds.push(team.id);
    });

    teamsStore.loadScheudle(
      teamSchedule,
      teamIds,
      dateStore.startDate,
      dateStore.endDate
    );
  }, [teamsStore, datesStore]);

  return (
    <Container>
      <Container>
        <Segment>
          <Grid columns={2} stackable textAlign="center">
            <Grid.Row verticalAlign="middle">
              <Grid.Column>
                <SemanticDatepicker
                  allowOnlyNumbers={true}
                  value={new Date(dateStore.startDate)}
                  clearable={false}
                  type="basic"
                  onChange={dateStore.setStartDate}
                  minDate={seasonStartDate}
                  maxDate={seasonEndDate}
                />
              </Grid.Column>

              <Grid.Column>
                <SemanticDatepicker
                  allowOnlyNumbers={true}
                  value={new Date(dateStore.endDate)}
                  clearable={false}
                  type="basic"
                  onChange={dateStore.setEndDate}
                  minDate={dateStore.startDate}
                  maxDate={seasonEndDate}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <GameSchedule games={teamSchedule} />
      </Container>
      <Table style={{ overflowX: 'auto' }}>
        <Table.Header>
          <Table.Row textAlign="center">
            <Table.HeaderCell>{teamName}</Table.HeaderCell>
            <Table.HeaderCell>Team</Table.HeaderCell>
            <Table.HeaderCell>Games Played</Table.HeaderCell>
            <Table.HeaderCell>Wins</Table.HeaderCell>
            <Table.HeaderCell>Loses</Table.HeaderCell>
            <Table.HeaderCell>OT Loses</Table.HeaderCell>
            <Table.HeaderCell>Points</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <TeamDetail teams={teams} />

        <Table.Footer>
          <Table.Row textAlign="center">
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell>Totals</Table.HeaderCell>
            <Table.HeaderCell>
              {calculateStat.TotalGamesPlayed(teams)}
            </Table.HeaderCell>
            <Table.HeaderCell>
              {calculateStat.TotalWins(teams)}
            </Table.HeaderCell>
            <Table.HeaderCell>
              {calculateStat.TotalLoses(teams)}
            </Table.HeaderCell>
            <Table.HeaderCell>
              {calculateStat.TotalOTLoses(teams)}
            </Table.HeaderCell>
            <Table.HeaderCell>
              <b>{calculateStat.TotalPoints(teams)}</b>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </Container>
  );
};
