import { makeAutoObservable } from 'mobx';
import { seasonStartDate, seasonEndDate } from '../../app/shared/common';

export default class DatesStore {
    startDate: Date = new Date();
    endDate: Date = new Date();

    constructor() {
        this.endDate.setDate(this.startDate.getDate() + parseInt('3'));
        makeAutoObservable(this);
    }

    setStartDate = (event: any, data: any, ) => {
        data.value > this.endDate
        ? this.startDate = new Date()
        : this.startDate = data.value === null ? seasonStartDate : data.value;
    }

    setEndDate = (event: any, data: any) => {
        this.endDate = data.value === null ? seasonEndDate : data.value;
    }
}