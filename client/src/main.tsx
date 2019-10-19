
import 'reflect-metadata';
import { render } from 'react-dom';
import * as React from 'react';
import { App } from './app/app';
import './styles.scss';
import { Provider } from 'react-redux';
import { store } from './app/store';

const root = document.getElementById('app');

render(
    <Provider store={store}>
        <App />
    </Provider>, root
);
