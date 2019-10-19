import { createSymbiote } from 'redux-symbiote';
import { E_CONTACT_SCREEN_STATE } from '@app/enums';
import { AnyAction } from 'redux';

export interface IContactScreenReducer {
    state: E_CONTACT_SCREEN_STATE;
}

export interface IContactScreenReducerActions {
    setScrenState: (member: E_CONTACT_SCREEN_STATE) => AnyAction;
}

export const { actions, reducer } = createSymbiote<IContactScreenReducer, IContactScreenReducerActions>({
    state: E_CONTACT_SCREEN_STATE.CONTACT,
}, {
    setScrenState: (state: IContactScreenReducer, sst: E_CONTACT_SCREEN_STATE) => ({ state: sst })
});
