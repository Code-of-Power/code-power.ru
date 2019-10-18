import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as teamReducer, ITeamScreenReducer } from '@app/reducers/team-screen';
import { composeWithDevTools } from 'redux-devtools-extension';
import { IFormsState, reducer as forms } from './reducers/forms';
import thunk from 'redux-thunk';

export interface IStore {
    teamReducer: ITeamScreenReducer;
    forms: IFormsState;
}

export const store = createStore(combineReducers({
    teamReducer,
    forms,
}), composeWithDevTools(applyMiddleware(thunk)));
