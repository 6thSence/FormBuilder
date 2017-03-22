import React, {Component} from 'react';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';

import { removeFiled, setIsRequired, toggleEdit, changeQuestionText } from '../../actions/formInfo';
import { questionTypes } from '../../lib/questionTypes';

import LineText from '../../components/lineText/lineText';
import FileUpload from '../../components/fileUpload/fileUpload';
import ListOfChoices from '../listOfChoices/listOfChoices';
import Select from '../select/select';
import ParagraphText from '../../components/paragraphText/paragraphText';

import styles from './fieldItem.css';

const DragHandle = SortableHandle(() => <div className={styles.drag}></div>);

export default SortableElement(({ question, dispatch }) => {
    const switchType = (type) => {
        switch (type) {
            case questionTypes.lineText:
                return <LineText />;
            case questionTypes.radioButton:
                return <ListOfChoices choices={question.choices}
                    questionId={question.id}
                    dispatch={dispatch}
                    type={questionTypes.radioButton}
                    />;
            case questionTypes.checkboxes:
                return <ListOfChoices choices={question.choices}
                    questionId={question.id}
                    dispatch={dispatch}
                    type={questionTypes.checkboxes}
                    />;
            case questionTypes.select:
                return <Select choices={question.choices}
                    questionId={question.id}
                    dispatch={dispatch}
                />;
            case questionTypes.fileUploader:
                return <FileUpload />;
            case questionTypes.paragraphText:
                return <ParagraphText />;
            default:
                return <LineText />;
        }
    };

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

    const _onClickEdite = (event, id, isEditing) => {
        event.preventDefault();

        dispatch(toggleEdit(id, isEditing));
    };

    return (
        <li className={styles.wrap}>
            <DragHandle />

            <div className={styles.question}>
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
                    : question.text || "Write your question..."
                }

                {question.isRequired && !question.isEditing ?
                    <super className={styles['required-star']}>&nbsp;*</super> : null}

                {!question.isEditing ?
                    <a className={styles['edit-button']}
                        onClick={(event) => _onClickEdite(event, question.id, !question.isEditing)}/> : null}
            </div>

            <div className={styles.choices}>
                {switchType(question.type)}
            </div>

            <div className={styles['required-inner']}>
                <a className={question.isRequired ? styles.required : styles['not-required']}
                   href="#"
                   onClick={event => _onClickRequired(event, question.isRequired, question.id)}
                />
            </div>

            <a href="#"
               className={styles['remove-button']}
               onClick={event => _onClickRemove(event, question.id)}>Remove</a>
        </li>
    )
});
