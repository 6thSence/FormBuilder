export const checkIsEmptyQuestion = (question, isEmptyQuestion) => !question.text ? true : isEmptyQuestion;
export const checkIsEmptyChoice = (question, isEmptyChoice) => {
    if (question.choices) {
        question.choices.forEach(choice => isEmptyChoice = !choice.text ? true : isEmptyChoice);
    }

    return isEmptyChoice;
};
export const checkIsMoreThenOneChoice = (question, isMoreThenOneChoice) => {
    if (question.choices) {
        isMoreThenOneChoice = question.choices.length < 2 ? true : isMoreThenOneChoice;
    }

    return isMoreThenOneChoice;
};
export const checkIsUniqueChoice = (question, isUniqueChoice) => {
    if (question.choices) {
        question.choices.forEach((currentChoice , currentIndex) =>
            question.choices.forEach((choice, index) => {
                if (choice.text
                    && !!choice.text.length
                    && choice.text === currentChoice.text
                    && index != currentIndex) {
                    isUniqueChoice = true;
                }
            }));
    }

    return isUniqueChoice;
};
