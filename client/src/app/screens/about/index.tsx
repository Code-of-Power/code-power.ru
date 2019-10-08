import * as React from 'react';
import { Button } from '@app/components/button';

export function About() {
    return (
        <section id="about" className="vh-100">
            <div className="container">
                <div className="tagline row justify-content-center">
                    <div className="col-10">
                        <h1 className="h1">
                            <span className="text-primary font-weight-bold">Мощь</span>
                            &nbsp;
                            <span className="text-white font-weight-bold">нашего кода</span>
                        </h1>
                        <h2 className="text-white h3">для ваших технологичных продуктов!</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="offset-md-1 col-6">
                        <h2 className="h3">
                            <span className="text-primary font-weight-bold">Code of Power</span>
                            &nbsp;
                            <span className="text-white font-weight-bold">
                                - молодая команда независимых IT-специалистов разных профилей.
                            </span>
                        </h2>
                    </div>
                    <div className="offset-md-1 col-3 d-flex align-items-center">
                        <Button type="primary">Узнать больше</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}