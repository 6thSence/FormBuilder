import React from 'react';
import { connect } from 'react-redux';
import { SortableContainer, arrayMove } from 'react-sortable-hoc';

import { setFieldsList } from '../../actions/formInfo';
import { saveForm, setWarnings } from '../../actions/formStatus';
import { changeDescription, toggleDescriptionEdit } from '../../actions/description';
import { warnings as warningsLib } from '../../lib/warnings';
import { checkIsEmptyQuestion,
    checkIsEmptyChoice,
    checkIsUniqueChoice,
    checkIsMoreThenOneChoice } from '../../utils/helpers';

import CustomFields from '../customFields/customFields';
import FieldItem from '../fieldItem/fieldItem';
import Warning from '../../components/warning/warning';
import EditButton from '../../components/editButton/editButton';

import styles from './formBuilder.css';

const SortableList = SortableContainer(({ items, dispatch }) => {
    return(
        <ul className={styles['fields-list']}>
            {items.map((item, index) =>
                <FieldItem
                    question={item}
                    key={`item-${index}`}
                    index={index}
                    dispatch={dispatch}
                />
            )}
        </ul>
    )
});

const FormBuilder = React.createClass({
    shouldComponentUpdate(nextProps) {
        if (nextProps.isSaved && this.props.isSaved) {
            this.props.dispatch(saveForm(false));
        }

        return true;
    },

    onSortEnd({ oldIndex, newIndex }) {
        const sortableList = arrayMove(this.props.questions, oldIndex, newIndex);

        this.props.dispatch(setFieldsList(sortableList));
    },

    checkWarnings() {
        const questions = this.props.questions;
        let isEmptyQuestion = false;
        let isEmptyChoice = false;
        let isMoreThenOneChoice = false;
        let isUniqueChoice = false;

        questions.forEach(question => {
            isEmptyQuestion = checkIsEmptyQuestion(question, isEmptyQuestion);
            isEmptyChoice = checkIsEmptyChoice(question, isEmptyChoice);
            isUniqueChoice = checkIsUniqueChoice(question, isMoreThenOneChoice);
            isMoreThenOneChoice = checkIsMoreThenOneChoice(question, isMoreThenOneChoice);
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

    validation() {
        if (this.props.isSaved) {
            return true;
        }

        const warnings = this.checkWarnings();
        const warningsList = this.createWarningsList(warnings);

        warningsList.length === 0 ?
            this.props.dispatch(saveForm(true))
            : this.props.dispatch(setWarnings(warningsList));
    },

    saveForm(event) {
        event.preventDefault();

        this.validation();
    },

    _onKeyPressDescEdit(event) {
        if (event.key == 'Enter') {
            this.props.dispatch(toggleDescriptionEdit(false));
        }
    },

    _onClickDescEdit(event) {
        event.preventDefault();
        this.props.dispatch(toggleDescriptionEdit(true));
    },

    render() {
        const { questions,
            description,
            isSaved,
            warnings,
            dispatch } = this.props;

        return (
            <div className={styles.wrap}>
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        San Francisco Driver Form
                    </h2>
                </div>

                {isSaved && <Warning text="Form saved" isSaved />}

                {warnings.map((warning, index) =>
                    <Warning text={warning.text} key={`warning-${index}`} />)}

                <p className={styles.description}>
                    <span className={styles['description-title']}>
                        Description:&nbsp;
                    </span>

                    {description.isEditing ?
                        <input type="text"
                               value={description.text}
                               placeholder="Write your question..."
                               className={styles['question-input']}
                               onChange={event => dispatch(changeDescription(event.target.value))}
                               onBlur={() => dispatch(toggleDescriptionEdit(!description.isEditing))}
                               onKeyPress={event => this._onKeyPressDescEdit(event)}
                               autoFocus
                        />
                        :
                        <span className={styles.text}>
                            {description.text || 'You need to add description...'}
                        </span>
                    }

                    {!description.isEditing ?
                        <EditButton
                            onClick={event => this._onClickDescEdit(event, !description.isEditing)} />
                        : null}
                </p>

                <div className={styles.list}>
                    <SortableList
                        items={questions}
                        dispatch={dispatch}
                        onSortEnd={this.onSortEnd}
                        useDragHandle={true}
                        />
                </div>

                <CustomFields />

                <a className={styles.button} href="#" onClick={this.saveForm}>
                    Save Form
                </a>
            </div>
        )
    }
});

const mapStateToProps = state => {
    return {
        questions: state.formInfo || [],
        description: state.description,
        isSaved: state.formStatus.isSaved,
        warnings: state.formStatus.warnings
    };
};

export default connect(mapStateToProps)(FormBuilder)