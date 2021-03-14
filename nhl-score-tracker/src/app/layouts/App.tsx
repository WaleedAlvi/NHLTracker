import React, { useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from '../../features/nav/NavBar';
import TeamDashboard from '../../features/teams/teamDashboard';
import HeadToHead from '../../features/headtohead/HeadToHead';
import { Route } from 'react-router-dom';
import HomePage from '../../features/Home/HomePage';
import { observer } from 'mobx-react-lite';
import { boysTeamIDs, girlsTeamIDs } from '../shared/common';
import { useStore } from '../stores/rootStore';

const App = () => {
  const { teamsStore } = useStore();

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
            teams={teamsStore.sortedBoysTeams}
            teamSchedule={teamsStore.boysSchedule}
            teamName={'The Boys'}
          />
        </Route>
        <Route path="/girlsdashboard" component={TeamDashboard}>
          <TeamDashboard
            teams={teamsStore.sortedGirlsTeams}
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
