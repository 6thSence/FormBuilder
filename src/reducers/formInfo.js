import uuidV1 from 'uuid/v1';

import { ADD_FIELD, REMOVE_FIELD, SET_IS_REQUIRED } from '../constants/formInfo';

const initialState = [
    {
        type: 'lineText',
        text: 'SSN',
        isRequired: true,
        id: 1
    },
    {
        type: 'radioButton',
        variables: [
            {
                id: 1,
                variable: 'Yes'
            },
            {
                id: 2,
                variable: 'No'
            }
        ],
        text: 'Have you driven a car before?',
        isRequired: false,
        id: 2,
        isEditing: false
    },
    {
        type: 'checkboxes',
        variables: [
            {
                id: 1,
                variable: 'Barkeley'
            },
            {
                id: 2,
                variable: 'Oakland'
            },
            {
                id: 3,
                variable: 'San Mateo'
            }
        ],
        text: 'Where do you want to work?',
        isRequired: false,
        id: 3
    }
];

export default function formInfo(state = initialState, action) {
    switch (action.type) {
        case ADD_FIELD:
            const id = uuidV1();

            return [
                    ...state,
                    {
                        type: action.fieldType,
                        id
                    },
                ];
        case REMOVE_FIELD:
            return [ ...state.filter(item => item.id !== action.id) ];
        case SET_IS_REQUIRED:
            return [ ...state.map(item => {
                if (item.id === action.id) {
                    item.isRequired = action.isRequired;
                }

                return item;
            }) ];
        default:
            return state;
    }

}
