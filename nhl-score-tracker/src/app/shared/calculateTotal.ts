import { ITeam } from "../models/team";
import { teamCategory } from "./enums";

export default {}
const CalcuateTotalGamesPlayed = (teams: ITeam[]) => {
  let total: number = 0;
  teams.map((team) => {
    return total += team.gamesPlayed;
  })
  return total;
  };
  
  const CalcuateTotalWins = (teams: ITeam[]) => {
    let total: number = 0;
    teams.map((team) => {
      return total += team.wins;
  })
  return total;
  };
  
  const CalcuateTotalLoses = (teams: ITeam[]) => {
    let total: number = 0;
    teams.map((team) => {
      return total += team.losses;
  })
  return total;
  };
  
  const CalcuateTotalOTLoses = (teams: ITeam[]) => {
    let total: number = 0;
    teams.map((team) => {
    return total += team.overTimeLoses;
  })
  return total;
  };
  
  const CalcuateTotalPoints = (teams: ITeam[]) => {
    let total: number = 0;
    teams.map((team) => {
    return total += team.points;
  })
  return total;
  };

  const CalculateWinPercentage = (teams: ITeam[]) => {
    const totalWins: number = CalcuateTotalWins(teams);
    const totalGamesPlayed: number = CalcuateTotalWins(teams);
    return totalWins/totalGamesPlayed;
  }

  const SelectCalculation = (category: teamCategory, teams: ITeam[]) =>{
    let total: number = 0;
    switch (category) {
      case teamCategory.gamesPlayed: {
        total = CalcuateTotalGamesPlayed(teams);
        break;
      }
      case teamCategory.wins: {
        total = CalcuateTotalWins(teams);
        break;
      }
      case teamCategory.losses: {
        total = CalcuateTotalLoses(teams);
        break;
      }
      case teamCategory.overTimeLoses: {
        total = CalcuateTotalOTLoses(teams);
        break;
      }
      case teamCategory.points: {
        total = CalcuateTotalPoints(teams);
        break;
      }
      
    }
    return total;
  }

  export {
    CalcuateTotalGamesPlayed as TotalGamesPlayed, 
    CalcuateTotalWins as TotalWins, 
    CalcuateTotalLoses as TotalLoses, 
    CalcuateTotalOTLoses as TotalOTLoses, 
    CalcuateTotalPoints as TotalPoints,
    SelectCalculation,
    CalculateWinPercentage
  }


    