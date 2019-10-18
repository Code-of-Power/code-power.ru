import { Dispatch } from 'redux';
import { actions } from '@app/reducers/forms';
import { DOMAIN } from '@app/consts/env';
import { JoinForm } from '@app/models/join.model';
import { CustomerForm } from '@app/models/customer.model';

const OPTIONS: RequestInit = {
    method: 'POST',
    cache: 'no-cache',
    headers: {
        'Content-Type': 'application/json'
    },
};

export function sendJoinMessage(form: JoinForm) {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(actions.isSendingJoin());
            const res = await fetch(`${DOMAIN}/api/v1/join`, { ...OPTIONS, body: JSON.stringify(form.toJSON()) });
            dispatch(actions.wasSendJoin());
        } catch (error) {
            dispatch(actions.errSendJoin());
        }
    };
}

export function sendCustomerMessage(form: CustomerForm) {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(actions.isSendingCustomer());
            const res = await fetch(`${DOMAIN}/api/v1/customer`, { ...OPTIONS, body: JSON.stringify(form.toJSON()) });
            dispatch(actions.wasSendCustomer());
        } catch (error) {
            dispatch(actions.errSendCustomer());
        }
    };
}