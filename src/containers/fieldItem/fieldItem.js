import React from 'react';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';

import { removeFiled,
    setIsRequired,
    toggleEdit,
    changeQuestionText } from '../../actions/formInfo';
import { questionTypes } from '../../lib/questionTypes';

import FileUpload from '../../components/fileUpload/fileUpload';
import LineText from '../../components/lineText/lineText';
import ListOfChoices from '../listOfChoices/listOfChoices';
import ParagraphText from '../../components/paragraphText/paragraphText';
import EditButton from '../../components/editButton/editButton';

import styles from './fieldItem.css';

const DragHandle = SortableHandle(() => <div className={styles.drag} />);
const switchType = (question, dispatch) => {
    switch (question.type) {
        case questionTypes.lineText:
            return <LineText />;

        case questionTypes.radioButton:
            return <ListOfChoices
                choices={question.choices}
                questionId={question.id}
                dispatch={dispatch}
                type={questionTypes.radioButton}
            />;

        case questionTypes.checkboxes:
            return <ListOfChoices
                choices={question.choices}
                questionId={question.id}
                dispatch={dispatch}
                type={questionTypes.checkboxes}
            />;

        case questionTypes.select:
            return <ListOfChoices
                choices={question.choices}
                questionId={question.id}
                dispatch={dispatch}
                type={questionTypes.select}
            />;

        case questionTypes.fileUploader:
            return <FileUpload />;

        case questionTypes.paragraphText:
            return <ParagraphText />;

        default:
            return <LineText />;
    }
};

export default SortableElement(({ question, dispatch }) => {
    const _onClickRemove = (event, id) => {
        event.preventDefault();
        dispatch(removeFiled(id));
    };

    const _onClickRequired = (event, isRequired, id) => {
        event.preventDefault();
        dispatch(setIsRequired(id, !isRequired));
    };

    const _onKeyPressEdit = (event, id) => {
        if (event.key == 'Enter') {
            dispatch(toggleEdit(id, false));
        }
    };

    const _onClickEdite = (event, id) => {
        event.preventDefault();
        dispatch(toggleEdit(id, true));
    };

    return (
        <li className={styles.wrap}>
            <div className={styles.question}>
                <DragHandle />

                { question.isEditing ?
                    <input type="text"
                           value={question.text}
                           placeholder="Write your question..."
                           className={styles['question-input']}
                           onChange={event => dispatch(changeQuestionText(question.id, event.target.value))}
                           onBlur={() => dispatch(toggleEdit(question.id, !question.isEditing))}
                           onKeyPress={event => _onKeyPressEdit(event, question.id)}
                           autoFocus
                    />
                    : <span className={styles.text}
                            onClick={event => _onClickEdite(event, question.id)}>
                        {question.text || "Write your question..."}
                        </span>
                }

                {question.isRequired && !question.isEditing ?
                    <super className={styles['required-star']}>&nbsp;*</super> : null}

                {!question.isEditing ?
                    <EditButton
                        onClick={event => _onClickEdite(event, question.id)} />
                    : null}
            </div>

            <div className={styles.choices}>
                {switchType(question, dispatch)}
            </div>

            <div className={question.isRequired ? styles.required : styles['not-required']}
                 onClick={event => _onClickRequired(event, question.isRequired, question.id)}>
                <span className={styles['required-text']}>
                    Required
                </span>
            </div>

            <a
                href="#"
                className={styles.remove}
                onClick={event => _onClickRemove(event, question.id)}
            />
        </li>
    )
});
