import { ADD_FIELD } from '../constants/formInfo';

export const addField = (fieldType) => {
    return {
        type: ADD_FIELD,
        fieldType
    }
};