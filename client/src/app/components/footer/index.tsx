import * as React from 'react';
import { CODE_SOCIAL, SOCIAL, MENU } from '@app/consts/menu';

export function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row justify-content-between py-4">
                    <div>
                        {MENU.map((item, i) => (<a className="mr-2" key={i} href={item.route}>{item.title}</a>))}
                    </div>
                    <div>
                        {SOCIAL.map((item, i) => (<a className="mr-2" key={i} href={item.route}>{item.title}</a>))}
                    </div>
                </div>
                <div className="row justify-content-between pb-4">
                    <div>
                        <a className="mr-2" href="tel:+79969379385">+7 996 93 79 385</a>
                        <a className="mr-2" href="mailto:code-power@gmail.com">code-power@gmail.com</a>
                    </div>
                    <div>
                        {CODE_SOCIAL.map((item, i) => (<a className="mr-2" key={i} href={item.route}>{item.title}</a>))}
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="d-flex align-items-center flex-column">
                        <div>Disign and Dev by <a href="http://www.exlight.name">eXlight</a></div>
                        <div>Code of Power 2019</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
