import {observable, action} from 'mobx';
import {createContext} from 'react';
import { seasonStartDate, seasonEndDate } from '../../app/shared/common';

class DatesStore {
    @observable startDate: Date = new Date();
    @observable endDate: Date = new Date('2021-02-28');

    @action setStartDate = (event: any, data: any) => {
        console.log(data.value);
        data.value > this.endDate
        ? this.startDate = new Date()
        : this.startDate = data.value === null ? seasonStartDate : data.value;
    }

    @action setEndDate = (event: any, data: any) => {
        console.log(data.value);
        this.endDate = data.value === null ? seasonEndDate : data.value;
    }
}

export default createContext(new DatesStore())