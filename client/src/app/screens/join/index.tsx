import * as React from 'react';
import { FormJoin } from '@app/components/form-join';

export function Join() {
    return (
        <section className="vh-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-5">
                        <div className="text-white h3">
                            Присоедениться к нам:
                        </div>
                        <FormJoin />
                    </div>
                    <div className="col-4 offset-md-1">
                        <div className="h3 text-white">
                            Мы будем рады новым участникам нашей дружной команды,
                                готовым развиваться и расти вместе с нами.
                                Мы молоды и выбираем свой путь развития и совместный рост.
                                Мы помогаем и поддерживаем друг друга. Готов двигаться с нами?
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}