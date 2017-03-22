import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SortableContainer, arrayMove } from 'react-sortable-hoc';

import { setFieldsList } from '../../actions/formInfo';

import FieldItem from '../fieldItem/fieldItem';
import Warning from '../../components/warning/warning';

import styles from './formBuilder.css';

const SortableList = SortableContainer(({ items, dispatch}) => {
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
            items: nextProps.questions,
        });
    },

    onSortEnd({ oldIndex, newIndex }) {
        const newFieldList = arrayMove(this.state.items, oldIndex, newIndex);

        this.setState({
            items: newFieldList,
        });

        this.props.dispatch(setFieldsList(newFieldList));
    },

    render() {
        const { questions,
            description } = this.props;

        return (
            <div className={styles.wrap}>
                <div className={styles.header}>
                    <h2 className={styles.title}>San Francisco Driver Form</h2>
                    <a className={styles.button} href="#">Save Form</a>
                </div>

                <Warning text="Choices must be non empty" />

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
                        dispatch={this.props.dispatch}
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
        description: state.description
    };
};

export default connect(mapStateToProps)(FormBuilder)