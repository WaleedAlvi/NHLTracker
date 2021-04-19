import React from 'react';
import { Table } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import { IGames } from '../../app/models/games';
import { ITeam } from '../../app/models/team';
import TeamDetail from './TeamDetail';
import * as calculateStat from '../../app/shared/calculateTotal';

interface IProps {
  teams: ITeam[];
  teamName: string;
}

const TeamTable: React.FC<IProps> = ({ teams, teamName }) => {
  return (
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
          <Table.HeaderCell>{calculateStat.TotalWins(teams)}</Table.HeaderCell>
          <Table.HeaderCell>{calculateStat.TotalLoses(teams)}</Table.HeaderCell>
          <Table.HeaderCell>
            {calculateStat.TotalOTLoses(teams)}
          </Table.HeaderCell>
          <Table.HeaderCell>
            <b>{calculateStat.TotalPoints(teams)}</b>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
};

export default observer(TeamTable);
