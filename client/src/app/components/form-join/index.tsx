import * as React from 'react';
import { Button } from '../button';

export function FormJoin() {
    return (
        <form>
            <div className="form-group">
                <input type="text" placeholder="Ваш e-mail" className="form-control" />
            </div>
            <div className="form-group">
                <input type="text" placeholder="Как Вас зовут?" className="form-control" />
            </div>
            <div className="form-group">
                <input type="text" placeholder="Ваша специализация" className="form-control" />
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