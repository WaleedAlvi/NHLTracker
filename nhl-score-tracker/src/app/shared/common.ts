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

  const eastTeamIDs: number[] = [
    teams.bostonID,
    teams.pittsburghID,
  ]

  const westTeamIDs: number[] = [
    teams.coloradoID,
    teams.vegasID,
  ]

  const centralTeamIDs: number[] = [
    teams.carolinaID,
    teams.tamptaBayID,
  ]

  const northTeamIDs: number[] = [
    teams.winnipegID,
    teams.edmontonID,
  ]

  const seasonStartDate: Date = new Date('2021-01-13');
  const seasonEndDate: Date = new Date('2021-05-8');



  export {
      boysTeamIDs,
      girlsTeamIDs,
      seasonStartDate,
      seasonEndDate,
      eastTeamIDs,
      westTeamIDs,
      centralTeamIDs,
      northTeamIDs,
  }