import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './sidebar.css';

export default class Sidebar extends Component {

    render() {
        return (
            <div className={styles.wrap}>
                <div className={styles.inner}>

                    <h1 className={styles.title}>San Francisco Driver Form</h1>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <Link to='/customFields' className={styles.link} activeClassName={styles.linkActive}>Custom fields</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to='/description' className={styles.link} activeClassName={styles.linkActive}>Description (Optional)</Link>
                        </li>
                    </ul>
                    {this.props.children}
                </div>
            </div>
        )
    }
};
