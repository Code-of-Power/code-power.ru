export interface IBaseFormAPI {
  email: string;
  name: string;
  message: string;
}

export interface IClientFormApi extends IBaseFormAPI {
  company: string;
  interested: string;
}

export interface IJoinFormApi extends IBaseFormAPI {
  specialisation: string;
}
