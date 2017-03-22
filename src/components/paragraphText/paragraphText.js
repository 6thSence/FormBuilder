import React from 'react';

import styles from './paragraphText.css';

export default () => {
    return (
        <textarea placeholder="Paragraph text" className={styles.input} readOnly />
    )
};
