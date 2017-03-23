import React, { Component } from 'react';

import FormBuilder from '../formBuilder/formBuilder';
import Sidebar from '../sidebar/sidebar';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Sidebar children={this.props.children} />
                <FormBuilder />
            </div>

        )
    }
};
