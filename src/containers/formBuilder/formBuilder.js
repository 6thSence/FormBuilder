import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SortableContainer, arrayMove } from 'react-sortable-hoc';

import { setFieldsList } from '../../actions/formInfo';
import { saveForm, setWarnings } from '../../actions/formStatus';
import { warnings } from '../../lib/warnings';

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

    validation(event) {
        event.preventDefault();

        if (this.props.isSaved) {
            return true;
        }

        const questions = this.state.items;
        const currentWarnings = [];

        questions.forEach(question => !question.text ? currentWarnings.push({
            text: warnings.emptyQuestion,
            id: currentWarnings.length
        }) : null);

        currentWarnings.length === 0 ?
            this.props.dispatch(saveForm(true))
            : this.props.dispatch(setWarnings(currentWarnings));
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

                {warnings.map(warning => <Warning text={warning.text} key={`warning-${warning.id}`} />)}

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