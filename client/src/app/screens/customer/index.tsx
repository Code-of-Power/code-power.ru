import * as React from 'react';
import { FormCustomer } from '@components/form-customer';

export function Customer() {
    return (
        <section className="vh-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-12 col-md-5">
                        <div className="text-white h3">
                            Стать клиентом:
                        </div>
                        <FormCustomer />
                    </div>
                    <div className="col-sm-12 col-md-4 offset-md-1 description">
                        <div className="h3 text-white font-italic">
                            Мы любим создавать качественные решения и видеть результаты своей работы.
                            Мы готовы к трудностям и амбициозным задачам.
                            Довольный пользователь разработанного нами продукта - наша главная цель!
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
