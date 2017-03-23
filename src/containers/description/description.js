import React from 'react';
import { connect } from 'react-redux';

import { changeDescription } from '../../actions/description';

import styles from './description.css';

const Description = React.createClass({
    onChangeDescription(event) {
        this.props.dispatch(changeDescription(event.target.value));
    },

    render() {
        const { description } = this.props;

        return (
            <div className={styles.wrap}>
                <p className={styles.description}>Optional form description.</p>
                <h2 className={styles.title}>Form Description</h2>

                <textarea className={styles.textarea}
                    placeholder={description.text || 'Write your description...'}
                    onChange={this.onChangeDescription}
                    />
            </div>
        )
    }
});


const mapStateToProps = state => ({
        description: state.description || ''
    });

export default connect(mapStateToProps)(Description);
