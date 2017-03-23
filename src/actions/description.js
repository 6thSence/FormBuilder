import { CHANGE_DESCRIPTION } from '../constants/description';

export const changeDescription = description => ({
    type: CHANGE_DESCRIPTION,
    description
});