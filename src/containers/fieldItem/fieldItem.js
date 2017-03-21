import React, {Component} from 'react';

import { removeFiled, setIsRequired, toggleEdit, changeQuestionText } from '../../actions/formInfo';
import { questionTypes } from '../../lib/questionTypes';

import LineText from '../../components/lineText/lineText';
import RadioButtons from '../radioButtons/radioButtons';

import styles from './fieldItem.css';

export default ({ question, dispatch }) => {
    const switchType = (type) => {
        switch (type) {
            case questionTypes.lineText:
                return <LineText />;
            case questionTypes.radioButton:
                return <RadioButtons choices={question.choices}
                                     questionId={question.id}
                                     dispatch={dispatch} />;
            case questionTypes.checkboxes:
                return 'checkboxes';
            case questionTypes.select:
                return 'select';
            case questionTypes.fileUploader:
                return 'fileUploader';
            case questionTypes.paragraphText:
                return 'paragraphText';
            default:
                return 'nontype';
        }
    };

    const _onClickRemove = (event, id) => {
        event.preventDefault();

        dispatch(removeFiled(id));
    };

    const _onClickRequired = (event, isRequired, id) => {
        event.preventDefault();

        dispatch(setIsRequired(id, !isRequired));
    };

    const _onKeyPressEdit = (event, id) => {
        if (event.key == 'Enter') {
            dispatch(toggleEdit(id, false));
        }
    };

    const _onClickEdite = (event, id, isEditing) => {
        event.preventDefault();

        dispatch(toggleEdit(id, isEditing));
    };

    return (
        <div className={styles.wrap}>
            <div className={styles.question}>
                {question.isEditing ?
                    <input type="text"
                           value={question.text}
                           placeholder="Write your question..."
                           className={styles['question-input']}
                           onChange={event => dispatch(changeQuestionText(question.id, event.target.value))}
                           onBlur={() => dispatch(toggleEdit(question.id, !question.isEditing))}
                           onKeyPress={event => _onKeyPressEdit(event, question.id)}
                           autoFocus
                    />
                    : question.text || "Write your question..."
                }

                {question.isRequired && !question.isEditing ?
                    <super className={styles['required-star']}>&nbsp;*</super> : null}

                {!question.isEditing ?
                    <a className={styles['edit-button']}
                        onClick={(event) => _onClickEdite(event, question.id, !question.isEditing)}/> : null}
            </div>

            <div className={styles.choices}>
                {switchType(question.type)}
            </div>

            <div className={styles['required-inner']}>
                <a className={question.isRequired ? styles.required : styles['not-required']}
                   href="#"
                   onClick={event => _onClickRequired(event, question.isRequired, question.id)}
                />
            </div>

            <a href="#"
               className={styles['remove-button']}
               onClick={event => _onClickRemove(event, question.id)}>Remove</a>
        </div>
    )
};
