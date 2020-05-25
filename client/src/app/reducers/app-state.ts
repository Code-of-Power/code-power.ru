import { createSymbiote } from 'redux-symbiote';
import { AnyAction } from 'redux';
import { E_SCREEN_TYPE } from '@app/enums';
import {
  xs_media,
  sm_media,
  md_media,
  lg_media,
  xl_media,
} from '@app/consts/media';

export interface IAppState {
  scroll: number;
  screenType: E_SCREEN_TYPE;
}

export interface IAppStateReducerActions {
  setScroll(scroll: number): AnyAction;
  setScreenType(type: E_SCREEN_TYPE): AnyAction;
}

const initScreenType = (): E_SCREEN_TYPE => {
  if (xs_media.matches) {
    return E_SCREEN_TYPE.xs;
  }
  if (sm_media.matches) {
    return E_SCREEN_TYPE.sm;
  }
  if (md_media) {
    return E_SCREEN_TYPE.md;
  }
  if (lg_media) {
    return E_SCREEN_TYPE.lg;
  }
  if (xl_media) {
    return E_SCREEN_TYPE.xl;
  }
};

export const { actions, reducer } = createSymbiote<
  IAppState,
  IAppStateReducerActions
>(
  {
    scroll: 0,
    screenType: initScreenType(),
  },
  {
    setScroll: (state: IAppState, scroll: number) => ({
      ...state,
      scroll: scroll,
    }),
    setScreenType: (state: IAppState, type: E_SCREEN_TYPE) => ({
      ...state,
      screenType: type,
    }),
  },
);
