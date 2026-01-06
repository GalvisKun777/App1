import { createContext, useContext } from 'react';
import { useGameReducer } from '../hooks/useGameReducer';
import { useQuestionDeck } from '../hooks/useQuestionDeck';

/**
 * Game Context - Provides global state to the component tree
 */
const GameContext = createContext(null);

/**
 * GameProvider Component
 * Wraps the app and provides game state and actions
 */
export const GameProvider = ({ children }) => {
    const { state, dispatch } = useGameReducer();
    const questionDeck = useQuestionDeck(state.selectedCategory);

    const value = {
        // Game state
        gameState: state.gameState,
        players: state.players,
        selectedCategory: state.selectedCategory,
        currentPlayerIndex: state.currentPlayerIndex,
        currentVotes: state.currentVotes,
        currentRoundWinners: state.currentRoundWinners,
        gameHistory: state.gameHistory,

        // Question deck
        currentQuestion: questionDeck.currentQuestion,
        isQuestionsExhausted: questionDeck.isExhausted,
        totalQuestions: questionDeck.totalQuestions,
        currentQuestionNumber: questionDeck.currentQuestionNumber,
        nextQuestion: questionDeck.nextQuestion,

        // Dispatch function
        dispatch
    };

    return (
        <GameContext.Provider value={value}>
            {children}
        </GameContext.Provider>
    );
};

/**
 * Custom Hook: useGame
 * Access game context from any component
 */
export const useGame = () => {
    const context = useContext(GameContext);
    if (!context) {
        throw new Error('useGame must be used within GameProvider');
    }
    return context;
};
