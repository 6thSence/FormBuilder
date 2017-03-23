import React from 'react';

import { changeChoiceText,
    toggleEditChoice,
    removeChoice,
    addChoice } from '../../actions/formInfo';
import { questionTypes } from '../../lib/questionTypes';

import styles from './listOfChoices.css';

const getLabelClassName = type => {
    switch(type) {
        case questionTypes.radioButton:
            return styles.radio;
        case questionTypes.checkboxes:
            return styles.checkbox;
        case questionTypes.select:
            return styles.select;
        default:
            return styles.radio;
    }
};
const getListClassName = type => {
    switch(type) {
        case questionTypes.select:
            return styles.selectList;
        default:
            return styles.list;
    }
};

export default ({ choices, questionId, dispatch, type }) => {
    const _onClickEdit = (event, questionId, choiceId) => {
        event.preventDefault();
        dispatch(toggleEditChoice(questionId, choiceId, true));
    };

    const _onClickRemove = (event, questionId, choiceId) => {
        event.preventDefault();
        dispatch(removeChoice(questionId, choiceId));
    };

    const _onKeyPressEdit = (event, questionId, choiceId, isEditing) => {
        if (event.key == 'Enter') {
            dispatch(toggleEditChoice(questionId, choiceId, isEditing));
        }
    };

    const _onClickAdd = (event, questionId) => {
        event.preventDefault();
        dispatch(addChoice(questionId))
    };

    return(
        <div className={styles.wrap}>
            <ul className={getListClassName(type, styles)}>

            {choices.map(choice =>
                <li className={styles.item}
                    key={choice.id}>

                    {
                        choice.isEditing ?
                            <input type="text"
                                   value={choice.text}
                                   placeholder="Write choice"
                                   className={styles['choice-input']}
                                   onChange={event => dispatch(changeChoiceText(event.target.value, questionId, choice.id))}
                                   onBlur={() => dispatch(toggleEditChoice(questionId, choice.id, !choice.isEditing))}
                                   onKeyPress={event => _onKeyPressEdit(event, questionId, choice.id, !choice.isEditing)}
                                   autoFocus
                            />
                            :
                            <label className={getLabelClassName(type)}
                                     value={choice.text}
                                     id={choice.id}>

                                { choice.text ? choice.text : "Write choice" }

                            </label>
                    }

                    {
                        !choice.isEditing &&
                            <a href="#"
                               className={styles.edit}
                               onClick={event => _onClickEdit(event, questionId, choice.id)}/>
                    }

                    {
                        !choice.isEditing &&
                            <a href="#"
                               className={styles.remove}
                               onClick={event => _onClickRemove(event, questionId, choice.id)}/>
                    }

                </li>
            )}
            </ul>

            <a href="#"
               className={styles.add}
               onClick={event => _onClickAdd(event, questionId)}>+&nbsp;Add Choice</a>
        </div>
    )
};
