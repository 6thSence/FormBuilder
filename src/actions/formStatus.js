import { SAVE_FORM,
    SET_WARNINGS } from '../constants/formStatus';

export const saveForm = isSaved => {
    return {
        type: SAVE_FORM,
        isSaved
    }
};

export const setWarnings = warnings => {
    return {
        type: SET_WARNINGS,
        warnings
    }
};