import React from 'react';
import { connect } from 'react-redux';

import { addField } from '../../actions/formInfo';
import { questionTypes } from '../../lib/questionTypes';

import Button from '../../components/button/button';

import styles from './customFields.css';

const Home = React.createClass({
    onClickAddField(event, type) {
        event.preventDefault();

        this.props.dispatch(addField(type));
    },

    render() {
        return (
            <div className={styles.wrap}>
                <p className={styles.description}>Select fields will be added to form.</p>
                <h2 className={styles.title}>Add Custom Field</h2>

                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Button text="Single-line text"
                                onClick={event => this.onClickAddField(event, questionTypes.lineText)} />
                    </li>
                    <li className={styles.item}>
                        <Button text="Radio button"
                                onClick={event => this.onClickAddField(event, questionTypes.radioButton)} />
                    </li>
                    <li className={styles.item}>
                        <Button text="Checkboxes"
                                onClick={event => this.onClickAddField(event, questionTypes.checkboxes)} />
                    </li>
                    <li className={styles.item}>
                        <Button text="Select"
                                onClick={event => this.onClickAddField(event, questionTypes.select)} />
                    </li>
                    <li className={styles.item}>
                        <Button text="File upload"
                                onClick={event => this.onClickAddField(event, questionTypes.fileUploader)} />
                    </li>
                    <li className={styles.item}>
                        <Button text="Paragraph text"
                                onClick={event => this.onClickAddField(event, questionTypes.paragraphText)} />
                    </li>
                </ul>
            </div>
        )
    }
});

export default connect((state) => state)(Home);