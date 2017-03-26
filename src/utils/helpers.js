export const checkIsEmptyQuestion = (question, isEmptyQuestion) => {
    const newIsEmptyQuestion = !question.text ? true : isEmptyQuestion;
    return newIsEmptyQuestion;
};
export const checkIsEmptyChoice = (question, isEmptyChoice) => {
    let newIsEmptyChoice = isEmptyChoice;

    if (question.choices) {
        question.choices.forEach(choice => {
            newIsEmptyChoice = !choice.text ? true : isEmptyChoice;
        });
    }

    return newIsEmptyChoice;
};
export const checkIsMoreThenOneChoice = (question, isMoreThenOneChoice) => {
    let newIsMoreThenOneChoice = isMoreThenOneChoice;

    if (question.choices) {
        newIsMoreThenOneChoice = question.choices.length < 2 ? true : isMoreThenOneChoice;
    }

    return newIsMoreThenOneChoice;
};
export const checkIsUniqueChoice = (question, isUniqueChoice) => {
    let newIsUniqueChoice = isUniqueChoice;

    if (question.choices) {
        question.choices.forEach((currentChoice, currentIndex) =>
            question.choices.forEach((choice, index) => {
                if (choice.text
                    && !!choice.text.length
                    && choice.text === currentChoice.text
                    && index !== currentIndex) {
                    newIsUniqueChoice = true;
                }
            }));
    }

    return newIsUniqueChoice;
};
