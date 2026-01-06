import { useState, useEffect, useMemo } from 'react';
import { shuffle } from '../utils/arrayUtils';
import { getQuestionsByCategory } from '../data/questions';

/**
 * Custom Hook: Manages the question deck
 * Shuffles questions on load and tracks current position
 */
export const useQuestionDeck = (categoryId) => {
    const [deck, setDeck] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Initialize and shuffle deck when category changes
    useEffect(() => {
        if (categoryId) {
            const categoryQuestions = getQuestionsByCategory(categoryId);
            const shuffled = shuffle(categoryQuestions);
            setDeck(shuffled);
            setCurrentIndex(0);
        }
    }, [categoryId]);

    // Compute current question using useMemo (no setState during render)
    const currentQuestion = useMemo(() => {
        if (currentIndex >= deck.length || deck.length === 0) {
            return null;
        }
        return deck[currentIndex];
    }, [deck, currentIndex]);

    // Compute if exhausted using useMemo (derived state, no setState)
    const isExhausted = useMemo(() => {
        return deck.length > 0 && currentIndex >= deck.length;
    }, [deck.length, currentIndex]);

    // Move to next question
    const nextQuestion = () => {
        if (currentIndex < deck.length - 1) {
            setCurrentIndex(prev => prev + 1);
        }
    };

    // Reset deck
    const resetDeck = () => {
        const shuffled = shuffle(deck);
        setDeck(shuffled);
        setCurrentIndex(0);
    };

    return {
        currentQuestion,
        nextQuestion,
        resetDeck,
        isExhausted,
        totalQuestions: deck.length,
        currentQuestionNumber: currentIndex + 1
    };
};
