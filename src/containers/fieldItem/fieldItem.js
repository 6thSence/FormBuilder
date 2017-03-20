import React, { Component } from 'react';

import { removeFiled, setIsRequired } from '../../actions/formInfo';
import { questionTypes } from '../../lib/questionTypes';

import styles from './fieldItem.css';

export default ({ question, dispatch }) => {
    const switchType = (type) => {
        switch (type) {
            case questionTypes.lineText:
                return 'lineText';
            case questionTypes.radioButton:
                return 'radioButton';
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

    const _onClickRequired = (event, id) => dispatch(setIsRequired(id, event.target.checked));

    return (
        <div className={styles.wrap}>
            <div className={styles.question}>
                {question.isEditing ?
                    <input type="text"
                         value={question.text}
                         placeholder="Write your question..."
                         className={styles['question-input']} />
                    : question.text || "Write your question..."
                }

                {question.isRequired ? <super className={styles['required-star']}>&nbsp;*</super> : null}
                </div>
            
            <div className={styles.choices}>
                {switchType(question.type)}
            </div>
            
            <div className={styles.required}>
                <input type="checkbox"
                    checked={question.isRequired}
                    onClick={event => _onClickRequired(event, question.id)} />
            </div>
            
            <a href="#"
                className={styles['remove-button']}
                onClick={event => _onClickRemove(event, question.id)}>Remove</a>
        </div>
    )
};
