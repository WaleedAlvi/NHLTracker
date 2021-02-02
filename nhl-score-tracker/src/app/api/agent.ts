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

const TeamGames = (teamID: number[], startDate: string, endDate: string) =>{
    const startDateString: string = `&startDate=${startDate}`;
    const endDateString: string = `&endDate=${endDate}`;
    let teamIDString: string = '';

    teamID.map((teamID: number, i: number) => {
        teamIDString += i === 0 ? `teamId=${teamID}` : `&teamId=${teamID}`;
    })
    console.log(`/schedule?${teamIDString}${startDateString}${endDateString}`);
    return request.get(`/schedule?${teamIDString}${startDateString}${endDateString}`);
}

export default {
    TeamDetail,
    TeamGames
}


