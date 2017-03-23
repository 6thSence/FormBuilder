import { SAVE_FORM,
    SET_WARNINGS } from '../constants/formStatus';

export const saveForm = isSaved => ({
    type: SAVE_FORM,
    isSaved
});

export const setWarnings = warnings => ({
    type: SET_WARNINGS,
    warnings
});
