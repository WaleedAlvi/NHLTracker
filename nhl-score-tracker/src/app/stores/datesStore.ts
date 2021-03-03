import { makeAutoObservable } from 'mobx';
import { seasonStartDate, seasonEndDate } from '../../app/shared/common';

export default class DatesStore {
    startDate: Date = new Date();
    endDate: Date = new Date();

    constructor() {
        this.endDate.setDate(this.startDate.getDate() + parseInt('30'));
        makeAutoObservable(this);
    }

    setStartDate = (event: any, data: any, ) => {
        console.log(this.startDate);
        data.value > this.endDate
        ? this.startDate = new Date()
        : this.startDate = data.value === null ? seasonStartDate : data.value;
        console.log(this.startDate);
    }

    setEndDate = (event: any, data: any) => {
        console.log(data.value);
        this.endDate = data.value === null ? seasonEndDate : data.value;
    }
}

// export default createContext(new DatesStore())