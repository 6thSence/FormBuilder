import React, { Component } from 'react';

import FormBuilder from '../formBuilder/formBuilder';
import Sidebar from '../sidebar/sidebar';

import styles from './home.css';

export default class Home extends Component {

    render() {
        return (
            <div className={styles.wrap}>
                <Sidebar children={this.props.children} />
                <FormBuilder />
            </div>

        )
    }
};
