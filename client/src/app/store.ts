import { createStore, combineReducers, applyMiddleware } from 'redux';
import {
  reducer as teamReducer,
  ITeamScreenReducer,
} from '@app/reducers/team-screen';
import { composeWithDevTools } from 'redux-devtools-extension';
import { IFormsState, reducer as forms } from './reducers/forms';
import { reducer as appState, IAppState } from './reducers/app-state';
import {
  reducer as contactScreen,
  IContactScreenReducer,
} from './reducers/contact-screen';
import thunk from 'redux-thunk';

export interface IStore {
  teamReducer: ITeamScreenReducer;
  forms: IFormsState;
  appState: IAppState;
  contactScreen: IContactScreenReducer;
}

export const store = createStore(
  combineReducers({
    teamReducer,
    forms,
    appState,
    contactScreen,
  }),
  composeWithDevTools(applyMiddleware(thunk)),
);
