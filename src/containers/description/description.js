import React, { Component } from 'react';

import styles from './description.css';

export default class Description extends Component {

    render() {
        return (
            <div className={styles.wrap}>
                <p className={styles.description}>Optional form description.</p>
                <h2 className={styles.title}>Form Description</h2>
                <textarea className={styles.textarea} placeholder="Welcome aboard!" />
            </div>
        )
    }
};
