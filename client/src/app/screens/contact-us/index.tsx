import * as React from 'react';
import { Button } from '@app/components/button';
import { connect } from 'react-redux';
import { AnyAction } from 'redux';
import { actions } from '@app/reducers/contact-screen';
import { E_CONTACT_SCREEN_STATE } from '@app/enums';

interface IContactUsProps {
    dispatch: React.Dispatch<AnyAction>;
}

function ContactUs(props: IContactUsProps) {
    const { dispatch } = props;
    return (
        <section className="vh-100" id="contact-us">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-sm-12 col-md-3 ">
                        <h1 className="text-white h3 contact-head">Связаться с нами:</h1>
                        <div className="d-flex flex-column">
                            <Button cssClass="mb-2" type="primary"
                                onClick={() => dispatch(actions.setScrenState(E_CONTACT_SCREEN_STATE.CUSTOMER))}
                            >Стать клиентом</Button>
                            <div className="text-white text-center font-weight-bold mb-2">или</div>
                            <Button type="default"
                                onClick={() => dispatch(actions.setScrenState(E_CONTACT_SCREEN_STATE.JOIN))}
                            >Присоедениться</Button>
                        </div>
                    </div>
                    <div className="col-sm-12 offset-md-2 col-md-5 description">
                        <span className="text-white h3 font-italic">
                            Заинтересовали наши услуги? Хотите присоедениться к нам,
                            есть другие вопросы или предложения?
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

export const ContactUsScreen = connect()(ContactUs);
