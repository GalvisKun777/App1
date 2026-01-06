import { useGame } from '../../context/GameContext';
import { ACTIONS } from '../../utils/constants';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import './QuestionCard.css';

export const QuestionCard = () => {
    const { currentQuestion, currentQuestionNumber, totalQuestions, dispatch } = useGame();

    const handleNext = () => {
        dispatch({ type: ACTIONS.NEXT_STEP });
    };

    return (
        <div className="question-card">
            <div className="question-card__header">
                <span className="question-card__number">
                    Pregunta {currentQuestionNumber} de {totalQuestions}
                </span>
            </div>

            <Card className="question-card__main" glow>
                <div className="question-card__icon">🤔</div>
                <h2 className="question-card__text">
                    {currentQuestion?.text || 'Cargando pregunta...'}
                </h2>
            </Card>

            <Button
                onClick={handleNext}
                variant="primary"
                size="large"
                fullWidth
            >
                Comenzar Votación →
            </Button>
        </div>
    );
};
