import * as React from 'react';
import { Button } from '@app/components/button';

export function ContactUs() {
    return (
        <section className="vh-100">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-sm-12 col-md-3 ">
                        <h1 className="text-white h3">Связаться с нами:</h1>
                        <div className="d-flex flex-column">
                            <Button cssClass="mb-4" type="primary">Стать клиентом</Button>
                            <Button type="default">Присоедениться</Button>
                        </div>
                    </div>
                    <div className="col-sm-12 offset-md-2 col-md-5">
                        <span className="text-white h3">
                            Заинтересовали наши услуги? Хотите присоедениться к нам
                            или есть другие вопросы или предложения?
                            Заполните простую форму или отправьте нам письмо на&nbsp;
                            <div>
                                <a href="mailto:code-power@gmail.com">code-power@gmail.com</a>&nbsp;
                            </div>
                            и мы обязательно свяжемся с Вами.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}
