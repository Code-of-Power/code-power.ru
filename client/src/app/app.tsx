import * as React from 'react';
import { AboutScreen } from './screens/about';
import { ContactUsScreen } from './screens/contact-us';
import { OurServices } from './screens/our-services';
import { Peoples } from './screens/peoples';
import { Projects } from './screens/projects';
import { Footer } from './components/footer';
import { Menu } from './components/menu';
import { connect } from 'react-redux';
import { Firefly } from './components/firefly';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { FOOTER_WIDHT } from './consts/menu';
import { actions } from '@app/reducers/app-state';
import { AnyAction, Dispatch } from 'redux';
import { IExtParallax } from './interfaces/app';
import { xs_media, sm_media, md_media, xl_media, lg_media } from './consts/media';
import { E_SCREEN_TYPE, E_CONTACT_SCREEN_STATE } from './enums';
import { ScreenCommutator } from './components/screen-commutator';
import { Join } from './screens/join';
import { Customer } from './screens/customer';
import { IStore } from './store';

interface IAppplicationProps {
    contactScreenState: E_CONTACT_SCREEN_STATE;
    dispatch: Dispatch<AnyAction>;
}

const mapProps = (state: IStore) => ({ contactScreenState: state.contactScreen.state });

export function Application(props: IAppplicationProps) {
    const { dispatch, contactScreenState } = props;
    const footerPercent = FOOTER_WIDHT * 100 / document.body.clientHeight;
    xs_media.addListener(() => dispatch(actions.setScreenType(E_SCREEN_TYPE.xs)));
    sm_media.addListener(() => dispatch(actions.setScreenType(E_SCREEN_TYPE.sm)));
    md_media.addListener(() => dispatch(actions.setScreenType(E_SCREEN_TYPE.md)));
    lg_media.addListener(() => dispatch(actions.setScreenType(E_SCREEN_TYPE.lg)));
    xl_media.addListener(() => dispatch(actions.setScreenType(E_SCREEN_TYPE.xl)));

    const activeIndex = (): 0 | 1 | 2 => {
        switch (contactScreenState) {
            case E_CONTACT_SCREEN_STATE.CONTACT:
                return 1;
            case E_CONTACT_SCREEN_STATE.JOIN:
                return 0;
            case E_CONTACT_SCREEN_STATE.CUSTOMER:
                return 2;
        }
    }

    let paralaxRef: HTMLDivElement;

    const setScrollHandler = (ref: IExtParallax, dispatch: Dispatch<AnyAction>) => {
        if (ref && ref.container) {
            paralaxRef = ref.container;
            ref.container.onscroll = (e: Event & { target: HTMLDivElement }) =>
                dispatch(actions.setScroll(e.target.scrollTop));
        }
    }

    const scrollTo = (position: number) => {
        if (paralaxRef) {
            paralaxRef.scrollTo({ behavior: 'smooth', top: position });
        }
    }

    return (
        <React.Fragment>
            <Menu />
            <Parallax pages={5 + footerPercent} ref={(ref: IExtParallax) => setScrollHandler(ref, dispatch)} scrolling>
                <ParallaxLayer offset={1} speed={.2}>
                    <Firefly size={300} x={20} y={40} />
                    <Firefly size={200} x={60} y={30} />
                    <Firefly size={250} x={70} y={60} />
                    <Firefly size={500} x={-30} y={130} />
                    <Firefly size={600} x={75} y={160} />
                    <Firefly size={200} x={60} y={270} />
                    <Firefly size={300} x={20} y={310} />
                    <Firefly size={250} x={30} y={350} />
                    <Firefly size={400} x={50} y={390} />
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={.5}>
                    <Firefly size={50} x={9} y={60} />
                    <Firefly size={70} x={18} y={38} />
                    <Firefly size={30} x={75} y={20} />
                    <Firefly size={80} x={50} y={120} />
                    <Firefly size={20} x={30} y={180} />
                    <Firefly size={30} x={35} y={190} />
                    <Firefly size={40} x={40} y={185} />
                    <Firefly size={60} x={50} y={190} />
                    <Firefly size={35} x={60} y={210} />
                    <Firefly size={70} x={20} y={240} />
                    <Firefly size={80} x={5} y={260} />
                    <Firefly size={30} x={80} y={270} />
                    <Firefly size={55} x={90} y={290} />
                    <Firefly size={40} x={40} y={310} />
                    <Firefly size={60} x={10} y={350} />
                    <Firefly size={20} x={60} y={360} />
                    <Firefly size={30} x={40} y={410} />
                    <Firefly size={40} x={0} y={430} />
                    <Firefly size={50} x={30} y={460} />
                    <Firefly size={30} x={70} y={480} />
                    <Firefly size={70} x={90} y={500} />
                    <Firefly size={30} x={20} y={530} />
                </ParallaxLayer>
                <div className="fon-section" onScroll={(e) => console.warn(e)}>
                    <AboutScreen scrollTo={scrollTo} />
                    <Projects />
                    <Peoples />
                    <OurServices />
                    <ScreenCommutator activeIndex={activeIndex()} screens={[Join, ContactUsScreen, Customer]} />
                    <Footer />
                </div>
            </Parallax>
        </React.Fragment>
    );
}

export const App = connect(mapProps)(Application)