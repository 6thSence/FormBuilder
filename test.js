import test from 'ava';

import { checkIsEmptyQuestion,
    checkIsEmptyChoice,
    checkIsUniqueChoice,
    checkIsMoreThenOneChoice } from './src/utils/helpers';

test('checkIsEmptyQuestion: There is question and isEmptyQuestion = true', t => {
    const question = {
        text: 'Have you driven a car before?'
    };
    const isEmptyQuestion = true;

    checkIsEmptyQuestion(question, isEmptyQuestion);
    t.true(checkIsEmptyQuestion(question, isEmptyQuestion));
});

test('checkIsEmptyQuestion: There is question and isEmptyQuestion = true', t => {
    const question = {
        text: 'Have you driven a car before?'
    };
    const isEmptyQuestion = true;

    t.true(checkIsEmptyQuestion(question, isEmptyQuestion));
});

test('checkIsEmptyQuestion: There is question and isEmptyQuestion = false', t => {
    const question = {
        text: 'Have you driven a car before?'
    };
    const isEmptyQuestion = false;

    t.false(checkIsEmptyQuestion(question, isEmptyQuestion));
});

test('checkIsEmptyQuestion: There isn\'t question and isEmptyQuestion = true', t => {
    const question = {};
    const isEmptyQuestion = true;

    t.true(checkIsEmptyQuestion(question, isEmptyQuestion));
});

test('checkIsEmptyQuestion: There isn\'t question and isEmptyQuestion = false', t => {
    const question = {};
    const isEmptyQuestion = false;

    t.true(checkIsEmptyQuestion(question, isEmptyQuestion));
});

test('checkIsEmptyChoice: Choice is empty and isEmptyChoice = true', t => {
    const question = {
        choices: [
            {},
            {
                text: 'Yes'
            }
        ]
    };
    const isEmptyChoice = true;

    t.true(checkIsEmptyChoice(question, isEmptyChoice));
});

test('checkIsEmptyChoice: Choice is empty and isEmptyChoice = false', t => {
    const question = {
        choices: [
            {},
            {
                text: 'Yes'
            }
        ]
    };
    const isEmptyChoice = true;

    t.true(checkIsEmptyChoice(question, isEmptyChoice));
});

test('checkIsEmptyChoice: Choice isn\'t empty and isEmptyChoice = true', t => {
    const question = {
        choices: [
            {
                text: 'Yes'
            }
        ]
    };
    const isEmptyChoice = true;

    t.true(checkIsEmptyChoice(question, isEmptyChoice));
});

test('checkIsEmptyChoice: Choice isn\'t empty and isEmptyChoice = false', t => {
    const question = {
        choices: [
            {
                text: 'Yes'
            }
        ]
    };
    const isEmptyChoice = false;

    t.false(checkIsEmptyChoice(question, isEmptyChoice));
});

test('checkIsUniqueChoice: Choices isn\'t unique and isUniqueChoice = true', t => {
    const question = {
        choices: [
            {
                text: 'Yes'
            },
            {
                text: 'Yes'
            }
        ]
    };
    const isUniqueChoice = true;

    t.true(checkIsUniqueChoice(question, isUniqueChoice));
});

test('checkIsUniqueChoice: Choices isn\'t unique and isUniqueChoice = false', t => {
    const question = {
        choices: [
            {
                text: 'Yes'
            },
            {
                text: 'Yes'
            }
        ]
    };
    const isUniqueChoice = false;

    t.true(checkIsUniqueChoice(question, isUniqueChoice));
});

test('checkIsUniqueChoice: Choices is unique and isUniqueChoice = true', t => {
    const question = {
        choices: [
            {
                text: 'Yes'
            },
            {
                text: 'No'
            }
        ]
    };
    const isUniqueChoice = true;

    t.true(checkIsUniqueChoice(question, isUniqueChoice));
});

test('checkIsUniqueChoice: Choices is unique and isUniqueChoice = false', t => {
    const question = {
        choices: [
            {
                text: 'Yes'
            },
            {
                text: 'No'
            }
        ]
    };
    const isUniqueChoice = false;

    t.false(checkIsUniqueChoice(question, isUniqueChoice));
});

test('checkIsMoreThenOneChoice: Choices is less than two and isMoreThenOneChoice = true', t => {
    const question = {
        choices: [
            {
                text: 'Yes'
            }
        ]
    };
    const isMoreThenOneChoice = true;

    t.true(checkIsMoreThenOneChoice(question, isMoreThenOneChoice));
});

test('checkIsMoreThenOneChoice: Choices is less than two and isMoreThenOneChoice = false', t => {
    const question = {
        choices: [
            {
                text: 'Yes'
            }
        ]
    };
    const isMoreThenOneChoice = false;

    t.true(checkIsMoreThenOneChoice(question, isMoreThenOneChoice));
});

test('checkIsMoreThenOneChoice: Choices is more than one and isMoreThenOneChoice = false', t => {
    const question = {
        choices: [
            {
                text: 'Yes'
            },
            {
                text: 'No'
            }
        ]
    };
    const isMoreThenOneChoice = false;

    t.false(checkIsMoreThenOneChoice(question, isMoreThenOneChoice));
});

test('checkIsMoreThenOneChoice: Choices is more than one and isMoreThenOneChoice = true', t => {
    const question = {
        choices: [
            {
                text: 'Yes'
            },
            {
                text: 'No'
            }
        ]
    };
    const isMoreThenOneChoice = true;

    t.true(checkIsMoreThenOneChoice(question, isMoreThenOneChoice));
});
