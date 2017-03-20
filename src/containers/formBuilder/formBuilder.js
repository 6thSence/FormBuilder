import React, { Component } from 'react';
import { connect } from 'react-redux';

import FieldItem from '../fieldItem/fieldItem';

import styles from './formBuilder.css';

const FormBuilder = React.createClass({
    render() {
        const { questions,
            description } = this.props;

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

                    {description.text || 'You need to add description...'}
                </p>

                <div className={styles.list}>
                    <div className={styles.titles}>
                        <div className={styles.question}>Question Title</div>
                        <div className={styles.choices}>Choices</div>
                        <div className={styles.required}>Required?</div>
                    </div>

                    {questions.map(question =>
                        <FieldItem
                            question={question}
                            key={question.id}
                            dispatch={this.props.dispatch}/>)}
                </div>
            </div>
        )
    }
});

const mapStateToProps = (state) => {
    return {
        questions: state.formInfo || [],
        description: state.description
    };
};

export default connect(mapStateToProps)(FormBuilder)