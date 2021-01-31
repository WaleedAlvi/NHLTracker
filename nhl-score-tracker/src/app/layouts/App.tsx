import React, { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import { ITeam } from '../models/team';
import NavBar from '../../features/nav/NavBar';
import { TeamDashboard } from '../../features/teams/teamDashboard';
import agent from '../api/agent';
import teams from '../api/teams';
import { HeadToHead } from '../../features/headtohead/HeadToHead';
import { Route } from 'react-router-dom';
import { HomePage } from '../../features/Home/HomePage';

const App = () => {
  //-----------Boys Team Data-------------------------------------------------------------------------
  const [penguins, setPenguins] = useState<ITeam>({
    id: 0,
    name: '',
    division: '',
    gamesPlayed: 0,
    wins: 0,
    losses: 0,
    overTimeLoses: 0,
    points: 0,
    nhlURL: '',
    logo: '',
  });
  useEffect(() => {
    agent.TeamDetail(teams.pittsburghID).then((response) => {
      setPenguins({
        id: teams.pittsburghID,
        name: response.stats[0].splits[0].team.name,
        division: 'East Division',
        gamesPlayed: response.stats[0].splits[0].stat.gamesPlayed,
        wins: response.stats[0].splits[0].stat.wins,
        losses: response.stats[0].splits[0].stat.losses,
        overTimeLoses: response.stats[0].splits[0].stat.ot,
        points: response.stats[0].splits[0].stat.pts,
        nhlURL: 'https://www.nhl.com/penguins',
        logo: '/assets/Pittsburgh_Penguins_logo.png',
      });
    });
  }, []);

  const [goldenKnights, setGoldenKnights] = useState<ITeam>({
    id: 0,
    name: '',
    division: '',
    gamesPlayed: 0,
    wins: 0,
    losses: 0,
    overTimeLoses: 0,
    points: 0,
    nhlURL: '',
    logo: '',
  });
  useEffect(() => {
    agent.TeamDetail(teams.vegasID).then((response) => {
      setGoldenKnights({
        id: teams.vegasID,
        name: response.stats[0].splits[0].team.name,
        division: 'West Division',
        gamesPlayed: response.stats[0].splits[0].stat.gamesPlayed,
        wins: response.stats[0].splits[0].stat.wins,
        losses: response.stats[0].splits[0].stat.losses,
        overTimeLoses: response.stats[0].splits[0].stat.ot,
        points: response.stats[0].splits[0].stat.pts,
        nhlURL: 'https://www.nhl.com/goldenknights',
        logo: '/assets/Vegas_Golden_Knights_logo.png',
      });
    });
  }, []);

  const [jets, setJets] = useState<ITeam>({
    id: 0,
    name: '',
    division: '',
    gamesPlayed: 0,
    wins: 0,
    losses: 0,
    overTimeLoses: 0,
    points: 0,
    nhlURL: '',
    logo: '',
  });
  useEffect(() => {
    agent.TeamDetail(teams.winnipegID).then((response) => {
      setJets({
        id: teams.winnipegID,
        name: response.stats[0].splits[0].team.name,
        division: 'North Division',
        gamesPlayed: response.stats[0].splits[0].stat.gamesPlayed,
        wins: response.stats[0].splits[0].stat.wins,
        losses: response.stats[0].splits[0].stat.losses,
        overTimeLoses: response.stats[0].splits[0].stat.ot,
        points: response.stats[0].splits[0].stat.pts,
        nhlURL: 'https://www.nhl.com/jets',
        logo: '/assets/Winnipeg_Jets_Logo.png',
      });
    });
  }, []);

  const [hurricanes, setHurricanes] = useState<ITeam>({
    id: 0,
    name: '',
    division: '',
    gamesPlayed: 0,
    wins: 0,
    losses: 0,
    overTimeLoses: 0,
    points: 0,
    nhlURL: '',
    logo: '',
  });
  useEffect(() => {
    agent.TeamDetail(teams.carolinaID).then((response) => {
      setHurricanes({
        id: teams.carolinaID,
        name: response.stats[0].splits[0].team.name,
        division: 'Central Division',
        gamesPlayed: response.stats[0].splits[0].stat.gamesPlayed,
        wins: response.stats[0].splits[0].stat.wins,
        losses: response.stats[0].splits[0].stat.losses,
        overTimeLoses: response.stats[0].splits[0].stat.ot,
        points: response.stats[0].splits[0].stat.pts,
        nhlURL: 'https://www.nhl.com/hurricanes ',
        logo: '/assets/Carolina_Hurricanes_logo.png',
      });
    });
  }, []);

  //----------Girls Team Data--------------------------------------------------------------------------
  const [lighting, setLighting] = useState<ITeam>({
    id: 0,
    name: '',
    division: '',
    gamesPlayed: 0,
    wins: 0,
    losses: 0,
    overTimeLoses: 0,
    points: 0,
    nhlURL: '',
    logo: '',
  });
  useEffect(() => {
    agent.TeamDetail(teams.tamptaBayID).then((response) => {
      setLighting({
        id: teams.tamptaBayID,
        name: response.stats[0].splits[0].team.name,
        division: 'Centeral Division',
        gamesPlayed: response.stats[0].splits[0].stat.gamesPlayed,
        wins: response.stats[0].splits[0].stat.wins,
        losses: response.stats[0].splits[0].stat.losses,
        overTimeLoses: response.stats[0].splits[0].stat.ot,
        points: response.stats[0].splits[0].stat.pts,
        nhlURL: 'https://www.nhl.com/lighting',
        logo: '/assets/Tampa_Bay_Lightning_Logo.png',
      });
    });
  }, []);

  const [bruins, setBruins] = useState<ITeam>({
    id: 0,
    name: '',
    division: '',
    gamesPlayed: 0,
    wins: 0,
    losses: 0,
    overTimeLoses: 0,
    points: 0,
    nhlURL: '',
    logo: '',
  });
  useEffect(() => {
    agent.TeamDetail(teams.bostonID).then((response) => {
      setBruins({
        id: teams.bostonID,
        name: response.stats[0].splits[0].team.name,
        division: 'East Division',
        gamesPlayed: response.stats[0].splits[0].stat.gamesPlayed,
        wins: response.stats[0].splits[0].stat.wins,
        losses: response.stats[0].splits[0].stat.losses,
        overTimeLoses: response.stats[0].splits[0].stat.ot,
        points: response.stats[0].splits[0].stat.pts,
        nhlURL: 'https://www.nhl.com/bruins',
        logo: '/assets/Boston_Bruins_logo.png',
      });
    });
  }, []);

  const [oilers, setOilers] = useState<ITeam>({
    id: 0,
    name: '',
    division: '',
    gamesPlayed: 0,
    wins: 0,
    losses: 0,
    overTimeLoses: 0,
    points: 0,
    nhlURL: '',
    logo: '',
  });
  useEffect(() => {
    agent.TeamDetail(teams.edmontonID).then((response) => {
      setOilers({
        id: teams.edmontonID,
        name: response.stats[0].splits[0].team.name,
        division: 'North Division',
        gamesPlayed: response.stats[0].splits[0].stat.gamesPlayed,
        wins: response.stats[0].splits[0].stat.wins,
        losses: response.stats[0].splits[0].stat.losses,
        overTimeLoses: response.stats[0].splits[0].stat.ot,
        points: response.stats[0].splits[0].stat.pts,
        nhlURL: 'https://www.nhl.com/oilers',
        logo: '/assets/Edmonton_Oilers_logo.png',
      });
    });
  }, []);

  const [avalanche, setAvalanche] = useState<ITeam>({
    id: 0,
    name: '',
    division: '',
    gamesPlayed: 0,
    wins: 0,
    losses: 0,
    overTimeLoses: 0,
    points: 0,
    nhlURL: '',
    logo: '',
  });
  useEffect(() => {
    agent.TeamDetail(teams.coloradoID).then((response) => {
      setAvalanche({
        id: teams.coloradoID,
        name: response.stats[0].splits[0].team.name,
        division: 'West Division',
        gamesPlayed: response.stats[0].splits[0].stat.gamesPlayed,
        wins: response.stats[0].splits[0].stat.wins,
        losses: response.stats[0].splits[0].stat.losses,
        overTimeLoses: response.stats[0].splits[0].stat.ot,
        points: response.stats[0].splits[0].stat.pts,
        nhlURL: 'https://www.nhl.com/avalanche',
        logo: '/assets/Colorado_Avalanche_logo.png',
      });
    });
  }, []);

  return (
    <div className="App">
      <NavBar />

      <Container style={{ marginTop: '7em' }}>
        <Route exact path="/" component={HomePage} />
        <Route path="/boysdashboard">
          <TeamDashboard
            teams={[penguins, hurricanes, jets, goldenKnights]}
            teamName={'The Boys'}
          />
        </Route>
        <Route path="/girlsdashboard" component={TeamDashboard}>
          <TeamDashboard
            teams={[oilers, lighting, bruins, avalanche]}
            teamName={'The Girls'}
          />
        </Route>
        <Route path="/headtohead">
          <HeadToHead
            boysTeam={[penguins, hurricanes, jets, goldenKnights]}
            girlsTeam={[oilers, lighting, bruins, avalanche]}
          />
        </Route>
      </Container>
    </div>
  );
};

export default App;
