

import { ADD_FIELD, REMOVE_FIELD, SET_IS_REQUIRED, EDIT_QUESTION, CHANGE_QUESTION_TEXT } from '../constants/formInfo';

export const addField = (fieldType) => {
    return {
        type: ADD_FIELD,
        fieldType
    }
};

export const removeFiled = (id) => {
    return {
        type: REMOVE_FIELD,
        id
    }
};

export const setIsRequired = (id, isRequired) => {
    return {
        type: SET_IS_REQUIRED,
        id,
        isRequired
    }
};

export const toggleEdit = (id, isEditing) => {
    return {
        type: EDIT_QUESTION,
        id,
        isEditing
    }
};

export const changeQuestionText = (id, text) => {
    return {
        type: CHANGE_QUESTION_TEXT,
        id,
        text
    }
};