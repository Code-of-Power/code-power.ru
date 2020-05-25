import { IClientFormApi } from '@app/interfaces/api';
import { object, ObjectSchema, string } from 'yup';
import { IModel } from '@app/interfaces/app';

export class CustomerForm implements IClientFormApi, IModel<IClientFormApi> {
  company: string = '';
  email: string = '';
  interested: string;
  message: string = '';
  name: string = '';

  private schema: ObjectSchema<IClientFormApi>;

  constructor() {
    this.schema = object().shape({
      email: string().email().required(),
      name: string().required(),
      message: string().required(),
      company: string(),
      interested: string().required(),
    });
  }

  toJSON(): IClientFormApi {
    return {
      company: this.company,
      email: this.email,
      interested: this.interested,
      message: this.message,
      name: this.name,
    };
  }

  async validate() {
    return this.schema.validate(this.toJSON());
  }

  asState(): IClientFormApi {
    return this.toJSON();
  }

  nextState(state: IClientFormApi): CustomerForm {
    const nextState = new CustomerForm();
    nextState.company = state.company;
    nextState.email = state.email;
    nextState.interested = state.interested;
    nextState.message = state.message;
    nextState.name = state.name;
    return nextState;
  }
}
