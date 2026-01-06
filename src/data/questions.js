import { hotQuestions } from './questions/hot';
import { spicyQuestions } from './questions/spicy';
import { lifestyleQuestions } from './questions/lifestyle';
import { funQuestions } from './questions/fun';

/**
 * Question Database mapper
 */
const formatQuestions = (questionsArray, category) => {
    return questionsArray.map((text, index) => ({
        id: `${category}-${index}`,
        text,
        category
    }));
};

export const questions = [
    ...formatQuestions(hotQuestions, 'hot'),
    ...formatQuestions(spicyQuestions, 'spicy'),
    ...formatQuestions(lifestyleQuestions, 'lifestyle'),
    ...formatQuestions(funQuestions, 'fun')
];

/**
 * Get questions by category
 * @param {string} categoryId - Category ID
 * @returns {Array} - Filtered questions
 */
export const getQuestionsByCategory = (categoryId) => {
    return questions.filter(q => q.category === categoryId);
};
