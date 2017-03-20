import React, { Component } from 'react';

import FieldItem from '../../components/fieldItem/fieldItem';

import styles from './formBuilder.css';

export default class FormBuilder extends Component {

    render() {
        return (
            <div className={styles.wrap}>
                <div className={styles.header}>
                    <h2 className={styles.title}>San Francisco Driver Form</h2>
                    <a className={styles.button} href="#">Save Form</a>
                </div>

                <p className={styles.description}>
                        <span className={styles['description-title']}>
                            Description:&nbsp;
                        </span>

                    Welcome aboard!
                </p>

                <div className={styles.list}>
                    <div className={styles.titles}>
                        <div className={styles.question}>Question Title</div>
                        <div className={styles.choices}>Choices</div>
                        <div className={styles.required}>Required?</div>
                    </div>

                    <FieldItem questionTitle="SSN"/>
                    <FieldItem questionTitle="Have you driven a car before?"/>
                    <FieldItem questionTitle="Where do you want to work?"/>
                </div>
            </div>
        )
    }
};
