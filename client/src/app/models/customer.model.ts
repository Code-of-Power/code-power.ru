import { IClientFormApi } from '@app/interfaces/api';
import { object, ObjectSchema, string } from 'yup';

export class CustomerForm implements IClientFormApi {
    company: string;
    email: string;
    interested: string;
    message: string;
    name: string;

    private schema: ObjectSchema<IClientFormApi>;

    constructor() {
        this.schema = object().shape({
            email: string().email().required(),
            name: string().required(),
            message: string().required(),
            company: string(),
            interested: string().required()
        });

    }

    toJSON(): IClientFormApi {
        return {
            company: this.company,
            email: this.email,
            interested: this.interested,
            message: this.message,
            name: this.name
        };
    }

    async validate() {
        return this.schema.validate(this.toJSON());
    }
}