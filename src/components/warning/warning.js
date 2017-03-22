import React from 'react';

import styles from './warning.css';

export default ({ text }) => {
    return (
        <div className={styles.wrap}>
            <span className={styles.text}>
                {text}
            </span>
        </div>
    )
};
