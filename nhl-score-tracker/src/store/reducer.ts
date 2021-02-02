import { ITeam } from "../app/models/team";

const initialState: ITeam = {
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
}

const reducer = (state: any, action: any) => {
    return state;
}

export default reducer;