import { createSymbiote } from 'redux-symbiote';
import { IMember } from '@app/interfaces/app';

export interface ITeamScreenReducer {
    activeMember: IMember
}

export interface ITeamScreenReducerActions {
    setActiveMember: (member: IMember) => ITeamScreenReducer;
}

export const { actions, reducer } = createSymbiote<ITeamScreenReducer, ITeamScreenReducerActions>({
    activeMember: null,
}, {
    setActiveMember: (state, member: IMember) => ({ ...state, activeMember: member ? { ...member } : null })
});
