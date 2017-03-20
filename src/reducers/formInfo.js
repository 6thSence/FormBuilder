import { ADD_FIELD } from '../constants/formInfo';

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
            return [
                    ...state,
                    {
                        type: action.fieldType
                    }
                ];
        default:
            return state;
    }

}
