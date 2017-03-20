import { CHANGE_DESCRIPTION } from '../constants/description';

export const changeDescription = (description) => {
    return {
        type: CHANGE_DESCRIPTION,
        description
    }
};