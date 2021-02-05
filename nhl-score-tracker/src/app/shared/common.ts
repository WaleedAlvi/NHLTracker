import teams from "../api/teams";

const boysTeamIDs: number[] = [
    teams.vegasID,
    teams.winnipegID,
    teams.pittsburghID,
    teams.carolinaID,
  ];
const girlsTeamIDs: number[] = [
    teams.bostonID,
    teams.coloradoID,
    teams.edmontonID,
    teams.tamptaBayID,
  ];

  const seasonStartDate: Date = new Date('2021-01-13');
  const seasonEndDate: Date = new Date('2021-05-8');



  export {
      boysTeamIDs,
      girlsTeamIDs,
      seasonStartDate,
      seasonEndDate,
  }