import { CHANGE_DESCRIPTION,
    TOGGLE_DESC_EDIT } from '../constants/description';

export const changeDescription = description => ({
    type: CHANGE_DESCRIPTION,
    description
});

export const toggleDescriptionEdit = isEditing => ({
    type: TOGGLE_DESC_EDIT,
    isEditing
});