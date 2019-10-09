import { createStore, combineReducers } from 'redux';
import { reducer as teamReducer, ITeamScreenReducer } from '@app/reducers/team-screen';
import { composeWithDevTools } from 'redux-devtools-extension';

export interface IStore {
    teamReducer: ITeamScreenReducer
}

export const store = createStore(combineReducers({
    teamReducer
}), composeWithDevTools());
