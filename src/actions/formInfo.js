import { ADD_FIELD, REMOVE_FIELD, SET_IS_REQUIRED } from '../constants/formInfo';

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