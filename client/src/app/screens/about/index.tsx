import * as React from 'react';
import { Button } from '@app/components/button';
import { connect } from 'react-redux';
import { IStore } from '@app/store';
import { E_SCREEN_TYPE } from '@app/enums';

const mapState = (state: IStore) => ({ screenType: state.appState.screenType });

interface IAboutProps {
    screenType: E_SCREEN_TYPE;
    scrollTo: (pos: number) => void;
}

function About(props: IAboutProps) {
    const { scrollTo, screenType } = props;
    const mrgn = () => {
        if (screen.availHeight < 600) {
            return 0;
        }
        if (screenType === E_SCREEN_TYPE.xs || screenType === E_SCREEN_TYPE.sm) {
            return 60;
        } else {
            return 100;
        }
    }
    const nextScreen = screen.availHeight - mrgn()
    return (
        <section id="about" className="vh-100">
            <div className="container">
                <div className="tagline row justify-content-center">
                    <div className="col-sm-12 col-md-10">
                        <h1 className="h1">
                            <span className="text-primary font-weight-bold">Мощь</span>
                            &nbsp;
                            <span className="text-white font-weight-bold">нашего кода</span>
                        </h1>
                        <h2 className="text-white h3">для ваших технологичных продуктов!</h2>
                    </div>
                </div>
                <div className="row description-wrapper">
                    <div className="col-sm-12 offset-md-1 col-md-6 description">
                        <h2 className="h3">
                            <span className="text-primary font-weight-bold">Code of Power</span>
                            &nbsp;
                            <span className="text-white font-weight-bold">
                                - молодая команда независимых IT-специалистов разных профилей.
                            </span>
                        </h2>
                    </div>
                    <div className="col-sm-12 offset-md-1 col-md-3 d-flex align-items-center">
                        <Button onClick={() => scrollTo(nextScreen)}
                            type="primary">Узнать больше</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export const AboutScreen = connect(mapState)(About);