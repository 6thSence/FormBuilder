import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

import FormBuilder from './containers/formBuilder/formBuilder';

import './styles/index.css';
import './styles/fonts.css';

const store = configureStore();

render(
    <Provider store={store}>
        <FormBuilder />
    </Provider>
,document.getElementById('app'));
