import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SortableContainer, arrayMove } from 'react-sortable-hoc';

import { setFieldsList } from '../../actions/formInfo';
import { saveForm, setWarnings } from '../../actions/formStatus';
import { warnings as warningsLib } from '../../lib/warnings';

import FieldItem from '../fieldItem/fieldItem';
import Warning from '../../components/warning/warning';

import styles from './formBuilder.css';

const SortableList = SortableContainer(({ items, dispatch }) => {
    return(
        <ul className={styles['fields-list']}>
            {items.map((item, index) =>
                <FieldItem
                    question={item}
                    key={`item-${index}`}
                    index={index}
                    dispatch={dispatch}/>
                )}
        </ul>
    )
});

const FormBuilder = React.createClass({
    getInitialState() {
        return {
            items: this.props.questions
        }
    },

    componentWillReceiveProps(nextProps) {
        this.setState({
            items: nextProps.questions
        });
    },

    shouldComponentUpdate(nextProps) {
        if (nextProps.isSaved && this.props.isSaved ) {
            this.props.dispatch(saveForm(false));
        }

        return true;
    },

    onSortEnd({ oldIndex, newIndex }) {
        const newFieldList = arrayMove(this.state.items, oldIndex, newIndex);

        this.setState({
            items: newFieldList,
        });

        this.props.dispatch(setFieldsList(newFieldList));
    },

    checkWarnings() {
        const questions = this.state.items;
        let isEmptyQuestion = false;
        let isEmptyChoice = false;
        let isUniqueChoice = false;
        let isMoreThenOneChoice = false;

        questions.forEach(question => {
            isEmptyQuestion = !question.text ? true : isEmptyQuestion;

            if (question.choices) {
                question.choices.forEach(choice => isEmptyChoice = !choice.text);

                isMoreThenOneChoice = question.choices.length < 2 ? true : isMoreThenOneChoice;

                question.choices.forEach((currentChoice , currentIndex) =>
                    question.choices.forEach((choice, index) => {
                        if (choice.text === currentChoice.text && index != currentIndex) {
                            isUniqueChoice = true;
                        }
                    }));
            }
        });

        return {
            isEmptyQuestion,
            isEmptyChoice,
            isUniqueChoice,
            isMoreThenOneChoice
        };
    },

    createWarningsList(warnings) {
        const warningsList = [];

        warnings.isEmptyQuestion && warningsList.push({
            text: warningsLib.emptyQuestion
        });

        warnings.isEmptyChoice && warningsList.push({
            text: warningsLib.emptyChoice
        });

        warnings.isMoreThenOneChoice && warningsList.push({
            text: warningsLib.moreThenOneChoice
        });

        warnings.isUniqueChoice && warningsList.push({
            text: warningsLib.uniqueChoice
        });

        return warningsList;
    },

    validation(event) {
        event.preventDefault();

        if (this.props.isSaved) {
            return true;
        }

        const warnings = this.checkWarnings();
        const warningsList = this.createWarningsList(warnings);

        warningsList.length === 0 ?
            this.props.dispatch(saveForm(true))
            : this.props.dispatch(setWarnings(warningsList));
    },

    render() {
        const { description,
            isSaved,
            warnings,
            dispatch } = this.props;

        return (
            <div className={styles.wrap}>
                <div className={styles.header}>
                    <h2 className={styles.title}>San Francisco Driver Form</h2>
                    <a className={styles.button} href="#" onClick={this.validation}>Save Form</a>
                </div>

                {isSaved && <Warning text="Form saved" isSaved />}

                {warnings.map((warning, index) => <Warning text={warning.text} key={`warning-${index}`} />)}

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

                    <SortableList
                        items={this.state.items}
                        dispatch={dispatch}
                        onSortEnd={this.onSortEnd}
                        useDragHandle={true}
                        />
                </div>
            </div>
        )
    }
});

const mapStateToProps = (state) => {
    return {
        questions: state.formInfo || [],
        description: state.description,
        isSaved: state.formStatus.isSaved,
        warnings: state.formStatus.warnings
    };
};

export default connect(mapStateToProps)(FormBuilder)