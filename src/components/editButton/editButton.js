import React from 'react';

import styles from './editButton.css';

export default ({ onClick }) => {
    return (
        <a className={styles.edit}
           onClick={onClick} />
    )
};
