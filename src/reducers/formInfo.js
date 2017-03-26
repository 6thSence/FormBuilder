import uuidV1 from 'uuid/v1';

import { questionTypes } from '../lib/questionTypes';
import { ADD_FIELD,
    REMOVE_FIELD,
    SET_IS_REQUIRED,
    EDIT_QUESTION,
    CHANGE_QUESTION_TEXT,
    TOGGLE_EDDIT_CHOICE,
    CHANGE_CHOICE_TEXT,
    REMOVE_CHOICE,
    ADD_CHOICE,
    SET_FIELDS_LIST } from '../constants/formInfo';

const initialState = [
    {
        type: 'lineText',
        text: 'SSN',
        isRequired: true,
        id: 1
    },
    {
        type: 'radioButton',
        choices: [
            {
                id: 1,
                text: 'Yes'
            },
            {
                id: 2,
                text: 'No'
            }
        ],
        text: 'Have you driven a car before?',
        isRequired: false,
        id: 2,
        isEditing: false
    },
    {
        type: 'checkboxes',
        choices: [
            {
                id: 1,
                text: 'Barkeley'
            },
            {
                id: 2,
                text: 'Oakland'
            },
            {
                id: 3,
                text: 'San Mateo'
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
            const question = {
                type: action.fieldType,
                id
            };

            switch (action.fieldType) {
                case questionTypes.radioButton:
                case questionTypes.checkboxes:
                case questionTypes.select:
                    question.choices = [
                        {
                            id: uuidV1()
                        },
                        {
                            id: uuidV1()
                        }
                    ];
                default:
                    break;
            }

            return [
                ...state,
                question
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

        case EDIT_QUESTION:
            return [ ...state.map(item => {
                if (item.id === action.id) {
                    item.isEditing = action.isEditing;
                }

                return item;
            }) ];

        case CHANGE_QUESTION_TEXT:
            return [ ...state.map(item => {
                if (item.id === action.id) {
                    item.text = action.text;
                }

                return item;
            }) ];

        case TOGGLE_EDDIT_CHOICE:
            return [ ...state.map(item => {
                if (item.id === action.questionId) {
                    item.choices.forEach(choice => {
                        if (choice.id === action.choiceId) {
                            choice.isEditing = action.isEditing;
                        };
                    });
                }

                return item;
            }) ];

        case CHANGE_CHOICE_TEXT:
            return [ ...state.map(item => {
                if (item.id === action.questionId) {
                    item.choices.forEach(choice => {
                        if (choice.id === action.choiceId) { choice.text = action.text };
                    });
                }

                return item;
            }) ];

        case REMOVE_CHOICE:
            return [ ...state.map(item => {
                if (item.id === action.questionId) {
                    item.choices = item.choices.filter(choice => choice.id !== action.choiceId) ;
                };

                return item;
            }) ];

        case ADD_CHOICE:
            return [ ...state.map(item => {
                if (item.id === action.questionId) {
                    item.choices.push({
                        id: uuidV1(),
                        isEditing: true
                    });
                };

                return item;
            }) ];

        case SET_FIELDS_LIST:
            return [ ...action.newFieldsList ];
        default:
            return state;
    }

}
