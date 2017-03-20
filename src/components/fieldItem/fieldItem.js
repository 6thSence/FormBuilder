import React, { Component } from 'react';

import { questionTypes } from '../../lib/questionTypes';

import styles from './fieldItem.css';

export default ({ question }) => {
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
            <div className={styles.required}>{question.isRequired ? 'yep' : 'nop'}</div>
        </div>
    )
};
