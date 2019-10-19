import * as React from 'react';
import { MENU } from '@app/consts/menu';

export function Menu() {
    return (
        <nav id="menu" className="d-flex align-items-center position-absolute shadow">
            <div className="container d-flex justify-content-between">
                <div>Code of Power</div>
                <div className="d-none d-md-block">
                    {MENU.map((item, i) =>
                        (<a key={i} href={item.route} className="menu-item font-weight-bold mx-2">{item.title}</a>))}
                </div>
                <div className="d-flex d-md-none align-items-center bar">
                    <i className="la la-navicon"></i>
                </div>
            </div>
        </nav>
    );
}
