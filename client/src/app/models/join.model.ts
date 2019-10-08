import { IJoinFormApi } from '@app/interfaces/api';
import { ObjectSchema, object, string } from 'yup';

export class JoinForm implements IJoinFormApi {
    email: string;
    message: string;
    name: string;
    specialisation: string;

    private schema: ObjectSchema<IJoinFormApi>;

    constructor() {
        this.schema = object().shape({
            email: string().email().required(),
            name: string().required(),
            message: string().required(),
            specialisation: string().required()
        });
    }

    toJSON(): IJoinFormApi {
        return {
            email: this.email,
            message: this.message,
            name: this.name,
            specialisation: this.specialisation
        };
    }

    async validate() {
        return this.schema.validate(this.toJSON());
    }
}