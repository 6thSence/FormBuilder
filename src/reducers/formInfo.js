import uuidV1 from 'uuid/v1';

import questionTypes from '../lib/questionTypes';
import {
    ADD_CHOICE,
    ADD_FIELD,
    CHANGE_CHOICE_TEXT,
    CHANGE_QUESTION_TEXT,
    EDIT_QUESTION,
    REMOVE_CHOICE,
    REMOVE_FIELD,
    SET_FIELDS_LIST,
    SET_IS_REQUIRED,
    TOGGLE_EDDIT_CHOICE,
} from '../constants/formInfo';

const initialState = [
    {
        type: 'lineText',
        text: 'SSN',
        isRequired: true,
        id: 1,
    },
    {
        type: 'radioButton',
        choices: [
            {
                id: 1,
                text: 'Yes',
            },
            {
                id: 2,
                text: 'No',
            },
        ],
        text: 'Have you driven a car before?',
        isRequired: false,
        id: 2,
        isEditing: false,
    },
    {
        type: 'checkboxes',
        choices: [
            {
                id: 1,
                text: 'Barkeley',
            },
            {
                id: 2,
                text: 'Oakland',
            },
            {
                id: 3,
                text: 'San Mateo',
            },
        ],
        text: 'Where do you want to work?',
        isRequired: false,
        id: 3,
    },
];

export default function formInfo(state = initialState, action) {
    switch (action.type) {
        case ADD_FIELD: {
            const id = uuidV1();
            const question = {
                type: action.fieldType,
                id,
            };

            switch (action.fieldType) {
                case questionTypes.radioButton:
                case questionTypes.checkboxes:
                case questionTypes.select:
                    question.choices = [
                        {
                            id: uuidV1(),
                        },
                        {
                            id: uuidV1(),
                        },
                    ];
                    break;
                default:
                    break;
            }

            return [
                ...state,
                question,
            ];
        }

        case REMOVE_FIELD:
            return [...state.filter(item => item.id !== action.id)];

        case SET_IS_REQUIRED:
            return [...state.map(item => {
                const newIterm = item;

                if (item.id === action.id) {
                    newIterm.isRequired = action.isRequired;
                }

                return newIterm;
            })];

        case EDIT_QUESTION:
            return [...state.map(item => {
                const newIterm = item;

                if (item.id === action.id) {
                    newIterm.isEditing = action.isEditing;
                }

                return newIterm;
            })];

        case CHANGE_QUESTION_TEXT:
            return [...state.map(item => {
                const newIterm = item;

                if (item.id === action.id) {
                    newIterm.text = action.text;
                }

                return newIterm;
            })];

        case TOGGLE_EDDIT_CHOICE:
            return [...state.map(item => {
                const newIterm = item;

                if (item.id === action.questionId) {
                    newIterm.choices = item.choices.map(choice => {
                        const newChoice = choice;

                        if (choice.id === action.choiceId) {
                            newChoice.isEditing = action.isEditing;
                        }

                        return newChoice;
                    });
                }

                return newIterm;
            })];

        case CHANGE_CHOICE_TEXT:
            return [...state.map(item => {
                const newIterm = item;

                if (item.id === action.questionId) {
                    newIterm.choices = item.choices.map(choice => {
                        const newChoice = choice;

                        if (choice.id === action.choiceId) {
                            newChoice.text = action.text;
                        }

                        return newChoice;
                    });
                }

                return newIterm;
            })];

        case REMOVE_CHOICE:
            return [...state.map(item => {
                const newIterm = item;

                if (item.id === action.questionId) {
                    newIterm.choices = item.choices
                        .filter(choice => choice.id !== action.choiceId);
                }

                return newIterm;
            })];

        case ADD_CHOICE:
            return [...state.map(item => {
                const newIterm = item;

                if (item.id === action.questionId) {
                    newIterm.choices.push({
                        id: uuidV1(),
                        isEditing: true,
                    });
                }

                return newIterm;
            })];

        case SET_FIELDS_LIST:
            return [...action.newFieldsList];
        default:
            return state;
    }
}
