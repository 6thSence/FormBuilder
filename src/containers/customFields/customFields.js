import React, { Component } from 'react';

import Button from '../../components/button/button';

import styles from './customFields.css';

export default class Home extends Component {
    _onClickHandler() {};

    render() {
        return (
            <div className={styles.wrap}>
                <p className={styles.description}>Select fields will be added to form.</p>
                <h2 className={styles.title}>Add Custom Field</h2>

                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Button text="Single-line text" onClick={this._onClickHandler} />
                    </li>
                    <li className={styles.item}>
                        <Button text="Radio button" onClick={this._onClickHandler} />
                    </li>
                    <li className={styles.item}>
                        <Button text="Checkboxes" onClick={this._onClickHandler} />
                    </li>
                    <li className={styles.item}>
                        <Button text="Select" onClick={this._onClickHandler} />
                    </li>
                    <li className={styles.item}>
                        <Button text="File upload" onClick={this._onClickHandler} />
                    </li>
                    <li className={styles.item}>
                        <Button text="Paragraph text" onClick={this._onClickHandler} />
                    </li>
                </ul>
            </div>
        )
    }
};
