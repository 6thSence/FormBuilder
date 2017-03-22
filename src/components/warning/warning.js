import React from 'react';

import styles from './warning.css';

export default ({ text, isSaved }) => {
    return (
        <div className={isSaved ? styles.success : styles.error }>
            {text}
        </div>
    )
};
