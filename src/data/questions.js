/**
 * Question Database - Mock data for testing
 * User will add real questions later
 */
export const questions = [
    // HOT Category
    { id: 1, text: "¿Quién es más probable que envíe un mensaje atrevido sin pensarlo?", category: 'hot' },
    { id: 2, text: "¿Quién es más probable que tenga una historia de amor secreta?", category: 'hot' },
    { id: 3, text: "¿Quién es más probable que coquetee sin darse cuenta?", category: 'hot' },
    { id: 4, text: "¿Quién es más probable que se sonroje con una mirada?", category: 'hot' },
    { id: 5, text: "¿Quién es más probable que use ropa interior atrevida?", category: 'hot' },

    // FUNNY Category
    { id: 6, text: "¿Quién es más probable que se ría de su propio chiste?", category: 'funny' },
    { id: 7, text: "¿Quién es más probable que haga algo ridículo en público?", category: 'funny' },
    { id: 8, text: "¿Quién es más probable que se caiga por las escaleras?", category: 'funny' },
    { id: 9, text: "¿Quién es más probable que imite a alguien mal pero con confianza?", category: 'funny' },
    { id: 10, text: "¿Quién es más probable que confunda sal con azúcar cocinando?", category: 'funny' },

    // PARTY Category
    { id: 11, text: "¿Quién es más probable que sea el alma de la fiesta?", category: 'party' },
    { id: 12, text: "¿Quién es más probable que baile sobre una mesa?", category: 'party' },
    { id: 13, text: "¿Quién es más probable que organice una fiesta sorpresa?", category: 'party' },
    { id: 14, text: "¿Quién es más probable que se duerma primero en la fiesta?", category: 'party' },
    { id: 15, text: "¿Quién es más probable que cante karaoke sin pena?", category: 'party' },

    // DEEP Category
    { id: 16, text: "¿Quién es más probable que dé el mejor consejo?", category: 'deep' },
    { id: 17, text: "¿Quién es más probable que sea el más empático del grupo?", category: 'deep' },
    { id: 18, text: "¿Quién es más probable que guarde un secreto por años?", category: 'deep' },
    { id: 19, text: "¿Quién es más probable que llore viendo una película?", category: 'deep' },
    { id: 20, text: "¿Quién es más probable que tenga sueños profundos sobre el futuro?", category: 'deep' },
];

/**
 * Get questions by category
 * @param {string} categoryId - Category ID
 * @returns {Array} - Filtered questions
 */
export const getQuestionsByCategory = (categoryId) => {
    return questions.filter(q => q.category === categoryId);
};
