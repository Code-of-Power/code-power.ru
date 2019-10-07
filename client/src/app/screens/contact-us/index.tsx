import * as React from 'react';
import { Button } from '@app/components/button';

export function ContactUs() {
    return (
        <section className="vh-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-3">
                        <h1 className="text-white">Связаться с нами</h1>
                        <div className="d-flex flex-column">
                            <Button cssClass="mb-4" type="primary">Стать клиентом</Button>
                            <Button type="default">Присоедениться</Button>
                        </div>

                    </div>
                    <div className="offset-md-2 col-5">
                        <span className="text-white">
                            Заинтересовали наши услуги, хотите присоедениться к нам
                            или есть другие вопросы или предложения?
                            Заполните простую форму или отправьте нам письмо на&nbsp;
                            <a href="mailto:code-power@gmail.com">code-power@gmail.com</a>&nbsp;
                            и мы обязательно свяжемся с Вами.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}
