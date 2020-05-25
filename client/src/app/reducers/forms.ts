import { createSymbiote } from 'redux-symbiote';
import { AnyAction } from 'redux';

export interface IFormsState {
  wasSendJoin: boolean;
  wasSendCustomer: boolean;
  errSendJoin: boolean;
  errSendCustomer: boolean;
  isSendingJoin: boolean;
  isSendingCustomer: boolean;
}

export interface IFormStateReducerActions {
  wasSendCustomer(): AnyAction;
  wasSendJoin(): AnyAction;
  errSendCustomer(): AnyAction;
  errSendJoin(): AnyAction;
  isSendingCustomer(): AnyAction;
  isSendingJoin(): AnyAction;
}

export const { actions, reducer } = createSymbiote<
  IFormsState,
  IFormStateReducerActions
>(
  {
    wasSendCustomer: false,
    wasSendJoin: false,
    errSendCustomer: false,
    errSendJoin: false,
    isSendingCustomer: false,
    isSendingJoin: false,
  },
  {
    wasSendCustomer: (state: IFormsState) => ({
      ...state,
      wasSendCustomer: true,
      errSendCustomer: false,
    }),
    wasSendJoin: (state: IFormsState) => ({
      ...state,
      wasSendJoin: true,
      errSendJoin: false,
    }),
    errSendCustomer: (state: IFormsState) => ({
      ...state,
      errSendCustomer: true,
    }),
    errSendJoin: (state: IFormsState) => ({ ...state, errSendJoin: true }),
    isSendingCustomer: (state: IFormsState) => ({
      ...state,
      isSendingCustomer: true,
    }),
    isSendingJoin: (state: IFormsState) => ({ ...state, isSendingJoin: true }),
  },
);
