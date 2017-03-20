import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addField } from '../../actions/formInfo';
import { questionTypes } from '../../lib/questionTypes';

import Button from '../../components/button/button';

import styles from './customFields.css';

const Home = React.createClass({
    _onClickHandler() {},

    render() {
        return (
            <div className={styles.wrap}>
                <p className={styles.description}>Select fields will be added to form.</p>
                <h2 className={styles.title}>Add Custom Field</h2>

                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Button text="Single-line text"
                                onClick={() => this.props.dispatch(addField(questionTypes.lineText))} />
                    </li>
                    <li className={styles.item}>
                        <Button text="Radio button"
                                onClick={() => this.props.dispatch(addField(questionTypes.radioButton))} />
                    </li>
                    <li className={styles.item}>
                        <Button text="Checkboxes"
                                onClick={() => this.props.dispatch(addField(questionTypes.checkboxes))} />
                    </li>
                    <li className={styles.item}>
                        <Button text="Select"
                                onClick={() => this.props.dispatch(addField(questionTypes.select))} />
                    </li>
                    <li className={styles.item}>
                        <Button text="File upload"
                                onClick={() => this.props.dispatch(addField(questionTypes.fileUploader))} />
                    </li>
                    <li className={styles.item}>
                        <Button text="Paragraph text"
                                onClick={() => this.props.dispatch(addField(questionTypes.paragraphText))} />
                    </li>
                </ul>
            </div>
        )
    }
});

export default connect((state) => state)(Home);