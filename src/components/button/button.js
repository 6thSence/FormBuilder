import React from 'react';

import styles from './button.css';

export default ({ text, onClick }) => {
    return (
        <a href="#" className={styles.link} onClick={onClick}>
            {text}
        </a>
    )
};
