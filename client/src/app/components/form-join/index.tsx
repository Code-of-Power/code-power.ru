import * as React from 'react';
import { Button } from '../button';
import { connect } from 'react-redux';
import { IStore } from '@app/store';
import { sendJoinMessage } from '@app/api';
import { IJoinFormApi } from '@app/interfaces/api';
import { JoinForm } from '@app/models/join.model';
import { AnyAction, Dispatch } from 'redux';
import { actions } from '@app/reducers/contact-screen';
import { E_CONTACT_SCREEN_STATE } from '@app/enums';

const mapState = (state: IStore) => ({
    isSending: state.forms.isSendingCustomer,
    err: state.forms.errSendCustomer,
});

interface IFormJoinComponent {
    isSending: boolean;
    err: boolean;
    dispatch?: Dispatch<AnyAction>;
    sendJoinMessage: (form: IJoinFormApi) => Promise<void>;
}

const mapProps = (dispatch: Dispatch<AnyAction>) => ({
    sendJoinMessage: (form: JoinForm) => sendJoinMessage(form)(dispatch),
    dispatch
});

function FormJoinComponent(props: IFormJoinComponent) {
    const { isSending, err, sendJoinMessage, dispatch } = props;
    const [form, setForm] = React.useState<JoinForm>(new JoinForm());
    const send = async () => {
        try {
            await form.validate();
            sendJoinMessage(form);
        } catch (error) {
            console.warn(error);
        }
    }

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
                <input type="text" placeholder="Ваш e-mail" className="form-control"
                    value={form.email}
                    onChange={(e) => setForm(form.nextState({ ...form, email: e.target.value }))}
                />
            </div>
            <div className="form-group">
                <input type="text" placeholder="Как Вас зовут?" className="form-control"
                    value={form.name}
                    onChange={(e) => setForm(form.nextState({ ...form, name: e.target.value }))}
                />
            </div>
            <div className="form-group">
                <input type="text" placeholder="Ваша специализация" className="form-control"
                    value={form.specialisation}
                    onChange={(e) => setForm(form.nextState({ ...form, specialisation: e.target.value }))}
                />
            </div>
            <div className="form-group">
                <textarea name="message" placeholder="Введите сообщение..."
                    rows={3} className="form-control"
                    value={form.message}
                    onChange={(e) => setForm(form.nextState({ ...form, message: e.target.value }))}
                ></textarea>
            </div>
            <div className="d-flex">
                <div className="w-50 d-flex align-items-center mr-4">
                    <Button type="danger"
                        onClick={() => dispatch(actions.setScrenState(E_CONTACT_SCREEN_STATE.CONTACT))}
                    >Отмена</Button>
                </div>
                <div className="w-50">
                    <Button type="primary" disabled={isSending}
                        onClick={() => send()}
                    >Отправить</Button>
                </div>
            </div>
        </form>
    )
}

export const FormJoin = connect(mapState, mapProps)(FormJoinComponent);
