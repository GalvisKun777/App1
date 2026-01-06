import { useReducer } from 'react';
import { GAME_STATES, ACTIONS } from '../utils/constants';
import { getWinners } from '../utils/arrayUtils';

/**
 * Initial State for Game Reducer
 */
const initialState = {
    gameState: GAME_STATES.SETUP,
    players: [],
    selectedCategory: null,
    currentPlayerIndex: 0,
    currentVotes: [],
    currentRoundWinners: [],
    gameHistory: []
};

/**
 * Game Reducer - The Brain of the App
 * Manages all state transitions using a finite state machine
 */
const gameReducer = (state, action) => {
    switch (action.type) {

        case ACTIONS.ADD_PLAYER:
            return {
                ...state,
                players: [...state.players, action.payload]
            };

        case ACTIONS.REMOVE_PLAYER:
            return {
                ...state,
                players: state.players.filter((_, index) => index !== action.payload)
            };

        case ACTIONS.SELECT_CATEGORY:
            return {
                ...state,
                selectedCategory: action.payload
            };

        case ACTIONS.START_GAME:
            // Validate: must have at least 2 players and a category
            if (state.players.length < 2 || !state.selectedCategory) {
                return state;
            }
            return {
                ...state,
                gameState: GAME_STATES.QUESTION_REVEAL,
                currentPlayerIndex: 0,
                currentVotes: [],
                gameHistory: []
            };

        case ACTIONS.NEXT_STEP:
            // Transition logic based on current state
            if (state.gameState === GAME_STATES.QUESTION_REVEAL) {
                // Move to transition screen for first player
                return {
                    ...state,
                    gameState: GAME_STATES.TRANSITION,
                    currentPlayerIndex: 0,
                    currentVotes: []
                };
            }

            if (state.gameState === GAME_STATES.TRANSITION) {
                // Move to voting for current player
                return {
                    ...state,
                    gameState: GAME_STATES.VOTING
                };
            }

            if (state.gameState === GAME_STATES.VOTING) {
                // Check if all players have voted
                if (state.currentPlayerIndex < state.players.length - 1) {
                    // More players to vote, go to transition for next player
                    return {
                        ...state,
                        gameState: GAME_STATES.TRANSITION,
                        currentPlayerIndex: state.currentPlayerIndex + 1
                    };
                } else {
                    // All voted, show results
                    const winners = getWinners(state.currentVotes);
                    return {
                        ...state,
                        gameState: GAME_STATES.RESULTS,
                        currentRoundWinners: winners
                    };
                }
            }

            return state;

        case ACTIONS.CAST_VOTE:
            // Record the vote
            const voter = state.players[state.currentPlayerIndex];
            const newVote = {
                voter,
                votedFor: action.payload
            };

            return {
                ...state,
                currentVotes: [...state.currentVotes, newVote]
            };

        case ACTIONS.NEXT_ROUND:
            // Save current round to history and prepare for next question
            const roundData = {
                question: action.payload.question,
                votes: state.currentVotes,
                winners: state.currentRoundWinners
            };

            return {
                ...state,
                gameState: GAME_STATES.QUESTION_REVEAL,
                currentPlayerIndex: 0,
                currentVotes: [],
                currentRoundWinners: [],
                gameHistory: [...state.gameHistory, roundData]
            };

        case ACTIONS.RESTART:
            return {
                ...initialState
            };

        default:
            return state;
    }
};

/**
 * Custom Hook: useGameReducer
 * Provides game state and dispatch function
 */
export const useGameReducer = () => {
    const [state, dispatch] = useReducer(gameReducer, initialState);

    return { state, dispatch };
};
