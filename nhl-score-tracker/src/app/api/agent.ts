import axios, { AxiosResponse } from 'axios';

axios.defaults.baseURL = 'https://statsapi.web.nhl.com/api/v1';

const responseBody = (response: AxiosResponse) => response.data;

const request = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody),
}

const TeamDetail = (teamID: number) => {
    return request.get(`/teams/${teamID.toString()}/stats`);
}

const Teams = (teamIDs: number[]) => {
    return request.get(`/teams/?teamId=${teamIDs.join()}&expand=team.stats`);
}

const TeamGames = (teamID: number[], startDate: Date, endDate: Date) =>{

    const startDateString: string = `&startDate=${startDate.toLocaleDateString()}`;
    const endDateString: string = `&endDate=${endDate.toLocaleDateString()}`;
    let teamIDString: string = '';

    teamID.map((teamID: number, i: number) => {
        return teamIDString += i === 0 ? `teamId=${teamID}` : `&teamId=${teamID}`;
    })
    console.log(`/schedule?${teamIDString}${startDateString}${endDateString}`);
    return request.get(`/schedule?${teamIDString}${startDateString}${endDateString}`);
}

export default {
    TeamDetail,
    Teams,
    TeamGames,
}


