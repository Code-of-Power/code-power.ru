import * as React from 'react';
import { Button } from '../button';
import { CUSTOMER_OPTIONS } from '@app/consts/options';
import { connect } from 'react-redux';
import { IStore } from '@app/store';
import { sendCustomerMessage } from '@app/api';
import { IClientFormApi } from '@app/interfaces/api';
import { CustomerForm } from '@app/models/customer.model';
import { AnyAction, Dispatch } from 'redux';
import { actions } from '@app/reducers/contact-screen';
import { E_CONTACT_SCREEN_STATE } from '@app/enums';

const mapState = (state: IStore) => ({
  isSending: state.forms.isSendingCustomer,
  err: state.forms.errSendCustomer,
});

const mapProps = (dispatch: Dispatch<AnyAction>) => ({
  sendCustomerMessage: (form: CustomerForm) =>
    sendCustomerMessage(form)(dispatch),
  dispatch,
});

interface IFormCustomerComponent {
  isSending: boolean;
  err: boolean;
  dispatch?: Dispatch<AnyAction>;
  sendCustomerMessage: (form: CustomerForm) => Promise<void>;
}

function FormCustomerComponent(props: IFormCustomerComponent) {
  console.warn(props);
  const { isSending, err, sendCustomerMessage, dispatch } = props;
  const [form, setForm] = React.useState<CustomerForm>(new CustomerForm());
  const send = async () => {
    try {
      await form.validate();
      sendCustomerMessage(form);
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="d-flex">
        <div className="form-group w-50 mr-4">
          <input
            type="text"
            placeholder="Ваш e-mail"
            className="form-control"
            value={form.email}
            onChange={(e) =>
              setForm(form.nextState({ ...form, email: e.target.value }))
            }
          />
        </div>
        <div className="form-group w-50">
          <input
            type="text"
            placeholder="Компания"
            className="form-control"
            value={form.company}
            onChange={(e) =>
              setForm(form.nextState({ ...form, company: e.target.value }))
            }
          />
        </div>
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="Как Вас зовут?"
          className="form-control"
          value={form.name}
          onChange={(e) =>
            setForm(form.nextState({ ...form, name: e.target.value }))
          }
        />
      </div>
      <div className="form-group">
        <select
          className="form-control"
          value={form.interested}
          onChange={(e) =>
            setForm(form.nextState({ ...form, interested: e.target.value }))
          }
        >
          {CUSTOMER_OPTIONS.map((o, i) => (
            <option
              key={i}
              disabled={o.disabled}
              selected={o.disabled}
              value={o.value}
            >
              {o.title}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <textarea
          name="message"
          placeholder="Введите сообщение..."
          rows={3}
          className="form-control"
          value={form.message}
          onChange={(e) =>
            setForm(form.nextState({ ...form, message: e.target.value }))
          }
        ></textarea>
      </div>
      <div className="d-flex">
        <div className="w-50 d-flex align-items-center mr-4">
          <Button
            type="danger"
            onClick={() =>
              dispatch(actions.setScreenState(E_CONTACT_SCREEN_STATE.CONTACT))
            }
          >
            Отмена
          </Button>
        </div>
        <div className="w-50">
          <Button type="primary" disabled={isSending} onClick={() => send()}>
            Отправить
          </Button>
        </div>
      </div>
    </form>
  );
}

export const FormCustomer = connect(mapState, mapProps)(FormCustomerComponent);
