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

    const _onClickRequired = (isRequired, id) => dispatch(setIsRequired(id, !isRequired));

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
            
            <div className={styles['required-inner']}>
                <a className={question.isRequired ? styles.required : styles['not-required']}
                        href="#"
                   onClick={() => _onClickRequired(question.isRequired, question.id)}
                />
            </div>
            
            <a href="#"
                className={styles['remove-button']}
                onClick={event => _onClickRemove(event, question.id)}>Remove</a>
        </div>
    )
};
