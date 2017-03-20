import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory, hashHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

import CustomFields from './containers/customFields/customFields';
import Description from './containers/description/description';
import Home from './containers/home/home';

import './styles/index.css';
import './styles/fonts.css';

const store = configureStore();

render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Router path='/' component={Home}>
                <IndexRoute component={CustomFields} />
                <Router path='/customFields' component={CustomFields} />
                <Router path='/description' component={Description} />
            </Router>
        </Router>
    </Provider>
,document.getElementById('app'));
