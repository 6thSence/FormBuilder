import {
    ADD_FIELD,
    REMOVE_FIELD,
    SET_IS_REQUIRED,
    EDIT_QUESTION,
    CHANGE_QUESTION_TEXT,
    TOGGLE_EDDIT_CHOICE,
    CHANGE_CHOICE_TEXT,
    REMOVE_CHOICE,
    ADD_CHOICE,
    SET_FIELDS_LIST
} from '../constants/formInfo';

export const addField = fieldType => ({
    type: ADD_FIELD,
    fieldType
});

export const removeFiled = id => ({
    type: REMOVE_FIELD,
    id
});

export const setIsRequired = (id, isRequired) => ({
    type: SET_IS_REQUIRED,
    id,
    isRequired
});

export const toggleEdit = (id, isEditing) => ({
    type: EDIT_QUESTION,
    id,
    isEditing
});

export const changeQuestionText = (id, text) => ({
    type: CHANGE_QUESTION_TEXT,
    id,
    text
});

export const toggleEditChoice = (questionId, choiceId, isEditing) => ({
    type: TOGGLE_EDDIT_CHOICE,
    questionId,
    choiceId,
    isEditing
});

export const changeChoiceText = (text, questionId, choiceId) => ({
    type: CHANGE_CHOICE_TEXT,
    questionId,
    choiceId,
    text
});

export const removeChoice = (questionId, choiceId) => ({
    type: REMOVE_CHOICE,
    questionId,
    choiceId
});

export const addChoice = questionId => ({
    type: ADD_CHOICE,
    questionId
});

export const setFieldsList = newFieldsList => ({
    type: SET_FIELDS_LIST,
    newFieldsList
});