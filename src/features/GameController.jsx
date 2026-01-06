import { useGame } from '../context/GameContext';
import { GAME_STATES } from '../utils/constants';
import { PlayerForm } from './setup/PlayerForm';
import { QuestionCard } from './game/QuestionCard';
import { TransitionScreen } from './game/TransitionScreen';
import { VotingGrid } from './game/VotingGrid';
import { ResultsView } from './game/ResultsView';

/**
 * GameController - Main orchestrator
 * Renders the appropriate component based on current game state
 */
export const GameController = () => {
    const { gameState } = useGame();

    switch (gameState) {
        case GAME_STATES.SETUP:
            return <PlayerForm />;

        case GAME_STATES.QUESTION_REVEAL:
            return <QuestionCard />;

        case GAME_STATES.TRANSITION:
            return <TransitionScreen />;

        case GAME_STATES.VOTING:
            return <VotingGrid />;

        case GAME_STATES.RESULTS:
            return <ResultsView />;

        default:
            return <PlayerForm />;
    }
};
