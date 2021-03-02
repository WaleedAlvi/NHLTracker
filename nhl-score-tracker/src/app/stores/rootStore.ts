import {createContext, useContext} from 'react';
import TeamsStore from './teamsStore';

interface Store {
    teamsStore: TeamsStore
}

export const store: Store = {
    teamsStore: new TeamsStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext)
}