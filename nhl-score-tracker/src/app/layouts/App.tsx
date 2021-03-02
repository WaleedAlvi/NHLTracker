import React, { useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from '../../features/nav/NavBar';
import TeamDashboard from '../../features/teams/teamDashboard';
import HeadToHead from '../../features/headtohead/HeadToHead';
import { Route } from 'react-router-dom';
import HomePage from '../../features/Home/HomePage';
import { useContext } from 'react';
import TeamsStore from '../stores/teamsStore';
import { observer } from 'mobx-react-lite';
import { boysTeamIDs, girlsTeamIDs } from '../shared/common';

const App = () => {
  const teamsStore = useContext(TeamsStore);

  useEffect(() => teamsStore.loadTeam(teamsStore.boysTeam, boysTeamIDs), [
    teamsStore,
  ]);
  useEffect(() => teamsStore.loadTeam(teamsStore.girlsTeam, girlsTeamIDs), [
    teamsStore,
  ]);

  return (
    <div className="App">
      <NavBar />

      <Container style={{ marginTop: '7em' }}>
        <Route exact path="/" component={HomePage} />
        <Route path="/boysdashboard">
          <TeamDashboard
            teams={teamsStore.boysTeam}
            teamSchedule={teamsStore.boysSchedule}
            teamName={'The Boys'}
          />
        </Route>
        <Route path="/girlsdashboard" component={TeamDashboard}>
          <TeamDashboard
            teams={teamsStore.girlsTeam}
            teamSchedule={teamsStore.girlsSchedule}
            teamName={'The Girls'}
          />
        </Route>
        <Route path="/headtohead">
          <HeadToHead
            boysTeam={teamsStore.boysTeam}
            girlsTeam={teamsStore.girlsTeam}
          />
        </Route>
      </Container>
    </div>
  );
};

export default observer(App);
