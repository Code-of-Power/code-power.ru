import * as React from 'react';
import { CODE_SOCIAL, SOCIAL, MENU } from '@app/consts/menu';

export function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row justify-content-between py-4">
                    <div className="text-primary d-md-none">Наверх</div>
                    <div className="d-none d-md-block">
                        {MENU.map((item, i) => (<a className="mr-2" key={i} href={item.route}>{item.title}</a>))}
                    </div>
                    <div>
                        {SOCIAL.map((item, i) => (<a className="mr-2" key={i} href={item.route}>{item.title}</a>))}
                    </div>
                </div>
                <div className="row justify-content-between pb-4">
                    <div>
                        <a className="mr-2" href="tel:+79969379385">+7 996 93 79 385</a>
                        <a className="mr-2 d-none d-md-block"
                            href="mailto:code-power@gmail.com">code-power@gmail.com</a>
                    </div>
                    <div>
                        {CODE_SOCIAL.map((item, i) => (<a className="mr-2" key={i} href={item.route}>{item.title}</a>))}
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="align-items-center flex-column d-none d-md-flex">
                        <div>Disign and Dev by <a href="http://www.exlight.name">eXlight</a></div>
                        <div>Code of Power 2019</div>
                    </div>
                    <div className="d-flex align-items-center d-md-none">
                        <div>by <a href="http://www.exlight.name">eXlight</a>, 2019</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
