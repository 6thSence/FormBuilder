import {
    CHANGE_DESCRIPTION,
    TOGGLE_DESC_EDIT,
} from '../constants/description';

const initialState = {
    isEditing: false,
};

export default function description(state = initialState, action) {
    switch (action.type) {
        case CHANGE_DESCRIPTION:
            return {
                ...state,
                text: action.description,
            };
        case TOGGLE_DESC_EDIT:
            return {
                ...state,
                isEditing: action.isEditing,
            };
        default:
            return state;
    }
}
