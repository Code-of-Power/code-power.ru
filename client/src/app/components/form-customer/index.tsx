import * as React from 'react';
import { Button } from '../button';
import { CUSTOMER_OPTIONS } from '@app/consts/options';

export function FormCustomer() {
    return (
        <form>
            <div className="d-flex">
                <div className="form-group w-50 mr-4">
                    <input type="text" placeholder="Ваш e-mail" className="form-control" />
                </div>
                <div className="form-group w-50">
                    <input type="text" placeholder="Компания" className="form-control" />
                </div>
            </div>
            <div className="form-group">
                <input type="text" placeholder="Как Вас зовут?" className="form-control" />
            </div>
            <div className="form-group">
                <select className="form-control">
                    {
                        CUSTOMER_OPTIONS.map(o =>
                            (<option disabled={o.disabled} selected={o.disabled} value={o.value}>
                                {o.title}
                            </option>
                            ))
                    }
                </select>
            </div>
            <div className="form-group">
                <textarea name="message" placeholder="Введите сообщение..."
                    rows={3} className="form-control"></textarea>
            </div>
            <div className="d-flex">
                <div className="w-50 d-flex align-items-center mr-4">
                    <Button type="danger">Отмена</Button>
                </div>
                <div className="w-50">
                    <Button type="primary">Отправить</Button>
                </div>
            </div>
        </form>
    )
}