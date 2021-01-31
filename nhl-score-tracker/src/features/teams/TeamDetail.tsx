import React from 'react';
import { Image, Table } from 'semantic-ui-react';
import { ITeam } from '../../app/models/team';

interface IProps {
  teams: ITeam[];
}

export const TeamDetail: React.FC<IProps> = ({ teams }) => {
  return (
    <Table.Body>
      {teams.map((team) => {
        if (team.name !== '')
          return (
            <Table.Row key={team.name} textAlign="center">
              <Table.Cell>
                <Image verticalAlign="middle" src={team.logo} size="tiny" />
              </Table.Cell>
              <Table.Cell>
                <a href={team.nhlURL}>{team.name}</a>
              </Table.Cell>
              <Table.Cell>{team.gamesPlayed}</Table.Cell>
              <Table.Cell>{team.wins}</Table.Cell>
              <Table.Cell>{team.losses}</Table.Cell>
              <Table.Cell>{team.overTimeLoses}</Table.Cell>
              <Table.Cell>{team.points}</Table.Cell>
            </Table.Row>
          );
      })}
    </Table.Body>
  );
};
