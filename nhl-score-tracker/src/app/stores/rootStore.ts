import {createContext, useContext} from 'react';
import TeamsStore from './teamsStore';
import DatesStore from './datesStore';

interface Store {
    teamsStore: TeamsStore,
    datesStore: DatesStore
}

export const store: Store = {
    teamsStore: new TeamsStore(),
    datesStore: new DatesStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext)
}