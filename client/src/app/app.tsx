import * as React from 'react';
import { About } from './screens/about';
import { ContactUs } from './screens/contact-us';
import { Customer } from './screens/customer';
import { Join } from './screens/join';
import { OurServices } from './screens/our-services';
import { Peoples } from './screens/peoples';
import { Projects } from './screens/projects';
import { Footer } from './components/footer';
import { Menu } from './components/menu';
import { Provider } from 'react-redux';
import { store } from './store';

export function Application() {
    return (
        <Provider store={store}>
            <div className="fon-section">
                <Menu />
                <About />
                <Projects />
                <Peoples />
                <OurServices />
                <ContactUs />
                <Join />
                <Customer />
                <Footer />
            </div>
        </Provider>
    );
}
