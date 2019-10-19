import { createSymbiote } from 'redux-symbiote';
import { AnyAction } from 'redux';
import { E_SCREEN_TYPE } from '@app/enums/screen';

export interface IAppState {
    scroll: number;
    screenType: E_SCREEN_TYPE;
}

export interface IAppStateReducerActions {
    setScroll(scroll: number): AnyAction;
    setScreenType(type: E_SCREEN_TYPE): AnyAction;
}

export const { actions, reducer } = createSymbiote<IAppState, IAppStateReducerActions>({
    scroll: 0,
    screenType: E_SCREEN_TYPE.md
}, {
    setScroll: (state: IAppState, scroll: number) => ({ ...state, scroll: scroll }),
    setScreenType: (state: IAppState, type: E_SCREEN_TYPE) => ({ ...state, screenType: type })
});