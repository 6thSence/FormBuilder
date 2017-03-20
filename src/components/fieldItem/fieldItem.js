import React, { Component } from 'react';

import styles from './fieldItem.css';

export default ({ questionTitle, choices, isRequired }) => {
    const switchType = (type) => {
        switch (type) {
            case 'lineText':
                return 'lineText';
            case 'radioButton':
                return 'radioButton';
            case 'checkboxes':
                return 'checkboxes';
            default:
                return 'nontype';
        }
    };

    return (
        <div className={styles.wrap}>
            <div className={styles.question}>
                {questionTitle}
                {isRequired ? <super className={styles['required-star']}>&nbsp;*</super> : null}
                </div>
            <div className={styles.choices}>
                {switchType(choices.type)}
            </div>
            <div className={styles.required}>{isRequired ? 'yep' : 'nop'}</div>
        </div>
    )
};
