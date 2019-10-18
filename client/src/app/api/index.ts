import { IClientFormApi, IJoinFormApi } from '@app/interfaces/api';
import { Dispatch } from 'redux';
import { actions } from '@app/reducers/forms';
import { DOMAIN } from '@app/consts/env';

const OPTIONS: RequestInit = {
    method: 'POST',
    cache: 'no-cache',
    headers: {
        'Content-Type': 'application/json'
    }
};

export function sendJoinMessage(form: IJoinFormApi) {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(actions.isSendingJoin());
            const res = await fetch(`${DOMAIN}/api/v1/join`, OPTIONS);
            dispatch(actions.wasSendJoin());
        } catch (error) {
            dispatch(actions.errSendJoin());
        }
    };
}

export function sendCustomerMessage(form: IClientFormApi) {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(actions.isSendingCustomer());
            const res = await fetch(`${DOMAIN}/api/v1/customer`, OPTIONS);
            dispatch(actions.wasSendCustomer());
        } catch (error) {
            dispatch(actions.errSendCustomer());
        }
    };
}