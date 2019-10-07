import * as React from 'react';
import { MENU } from '@app/consts/menu';

export function Menu() {
    return (
        <nav id="menu" className="d-flex align-items-center position-sticky shadow">
            <div className="container d-flex justify-content-between">
                <div>Code of Power</div>
                <div>
                    {MENU.map(item =>
                        (<a href={item.route} className="menu-item font-weight-bold mx-2">{item.title}</a>))}
                </div>
            </div>
        </nav>
    );
}