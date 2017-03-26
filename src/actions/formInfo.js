import {
    ADD_CHOICE,
    ADD_FIELD,
    CHANGE_CHOICE_TEXT,
    CHANGE_QUESTION_TEXT,
    EDIT_QUESTION,
    REMOVE_CHOICE,
    REMOVE_FIELD,
    SET_FIELDS_LIST,
    SET_IS_REQUIRED,
    TOGGLE_EDDIT_CHOICE,
} from '../constants/formInfo';

export const addField = fieldType => ({
    type: ADD_FIELD,
    fieldType,
});

export const removeFiled = id => ({
    type: REMOVE_FIELD,
    id,
});

export const setIsRequired = (id, isRequired) => ({
    type: SET_IS_REQUIRED,
    id,
    isRequired,
});

export const toggleEdit = (id, isEditing) => ({
    type: EDIT_QUESTION,
    id,
    isEditing,
});

export const changeQuestionText = (id, text) => ({
    type: CHANGE_QUESTION_TEXT,
    id,
    text,
});

export const toggleEditChoice = (questionId, choiceId, isEditing) => ({
    type: TOGGLE_EDDIT_CHOICE,
    questionId,
    choiceId,
    isEditing,
});

export const changeChoiceText = (text, questionId, choiceId) => ({
    type: CHANGE_CHOICE_TEXT,
    questionId,
    choiceId,
    text,
});

export const removeChoice = (questionId, choiceId) => ({
    type: REMOVE_CHOICE,
    questionId,
    choiceId,
});

export const addChoice = questionId => ({
    type: ADD_CHOICE,
    questionId,
});

export const setFieldsList = newFieldsList => ({
    type: SET_FIELDS_LIST,
    newFieldsList,
});
