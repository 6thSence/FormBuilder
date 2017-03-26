import {
    SAVE_FORM,
    SET_WARNINGS,
} from '../constants/formStatus';

const initialState = {
    isSaved: false,
    warnings: [],
};

export default function formStatus(state = initialState, action) {
    switch (action.type) {
        case SAVE_FORM:
            return {
                ...state,
                isSaved: action.isSaved,
                warnings: action.isSaved ? [] : state.warnings,
            };

        case SET_WARNINGS:
            return {
                ...state,
                warnings: action.warnings,
                isSaved: false,
            };
        default:
            return state;
    }
}
