import { ADD_FIELD,
    REMOVE_FIELD,
    SET_IS_REQUIRED,
    EDIT_QUESTION,
    CHANGE_QUESTION_TEXT,
    TOGGLE_EDDIT_CHOICE,
    CHANGE_CHOICE_TEXT,
    REMOVE_CHOICE,
    ADD_CHOICE } from '../constants/formInfo';

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

export const toggleEditChoice = (questionId, choiceId, isEditing) => {
    return {
        type: TOGGLE_EDDIT_CHOICE,
        questionId,
        choiceId,
        isEditing
    }
};

export const changeChoiceText = (text, questionId, choiceId) => {
    return {
        type: CHANGE_CHOICE_TEXT,
        questionId,
        choiceId,
        text
    }
};

export const removeChoice = (questionId, choiceId) => {
    return {
        type: REMOVE_CHOICE,
        questionId,
        choiceId
    }
};

export const addChoice = (questionId) => {
    return {
        type: ADD_CHOICE,
        questionId
    }
};