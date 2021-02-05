import React, { useEffect, useState } from 'react';
import {
  Container,
  Divider,
  Grid,
  Header,
  Segment,
  Table,
} from 'semantic-ui-react';
import agent from '../../app/api/agent';
import { IGames } from '../../app/models/games';
import { ITeam } from '../../app/models/team';
import * as calculateStat from '../../app/shared/calculateTotal';
import { GameSchedule } from '../scores/GameSchedule';
import { TeamDetail } from './TeamDetail';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';

interface IProps {
  teams: ITeam[];
  teamName: string;
}

export const TeamDashboard: React.FC<IProps> = ({ teams, teamName }) => {
  teams.sort((a, b) => b.points - a.points);
  let teamIds: number[] = [];
  const seasonStartDate: Date = new Date('2021-01-13');
  const seasonEndDate: Date = new Date('2021-05-8');

  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date('2021-02-28'));
  const [games, setGames] = useState<IGames[]>([]);
  useEffect(() => {
    teams.map((team) => {
      teamIds.push(team.id);
    });

    agent.TeamGames(teamIds, startDate, endDate).then((response) => {
      // console.log(teamIds, response);
      setGames(
        response.dates.map((date: any) => {
          return {
            date: date.date,
            games: date.games.map((game: any) => {
              return {
                date: game.gameDate,
                status: game.status.detailedState,
                homeTeam: {
                  teamName: game.teams.home.team.name,
                  score: game.teams.home.score,
                },
                awayTeam: {
                  teamName: game.teams.away.team.name,
                  score: game.teams.away.score,
                },
              };
            }),
          };
        })
      );
    });
  }, [startDate, endDate]);

  const onStartDateChange = (event: any, data: any) => {
    data.value > endDate
      ? setStartDate(new Date())
      : setStartDate(data.value === null ? seasonStartDate : data.value);
  };

  const onEndDateChange = (event: any, data: any) => {
    setEndDate(data.value === null ? seasonEndDate : data.value);
  };

  return (
    <Container>
      <Container>
        <Segment>
          <Grid columns={2} stackable textAlign="center">
            <Grid.Row verticalAlign="middle">
              <Grid.Column>
                <SemanticDatepicker
                  allowOnlyNumbers={true}
                  value={new Date(startDate)}
                  clearable={false}
                  type="basic"
                  onChange={onStartDateChange}
                  minDate={seasonStartDate}
                  maxDate={seasonEndDate}
                />
              </Grid.Column>

              <Grid.Column>
                <SemanticDatepicker
                  allowOnlyNumbers={true}
                  value={new Date(endDate)}
                  clearable={false}
                  type="basic"
                  onChange={onEndDateChange}
                  minDate={startDate}
                  maxDate={seasonEndDate}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <GameSchedule games={games} />
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
