import { CHANGE_DESCRIPTION } from '../constants/description';

const initialState = {
    text: ''
};

export default function description(state = initialState, action) {
    switch (action.type) {
        case CHANGE_DESCRIPTION:
            return {
                text:  action.description
            };
        default:
            return state;
    }
}
