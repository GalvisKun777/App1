import { useGame } from '../../context/GameContext';
import { ACTIONS } from '../../utils/constants';
import { getVoteBreakdown } from '../../utils/arrayUtils';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Avatar } from '../../components/ui/Avatar';
import './ResultsView.css';

export const ResultsView = () => {
    const {
        currentRoundWinners,
        currentVotes,
        currentQuestion,
        isQuestionsExhausted,
        nextQuestion,
        dispatch
    } = useGame();

    const voteBreakdown = getVoteBreakdown(currentVotes);

    const handleNextRound = () => {
        if (!isQuestionsExhausted) {
            nextQuestion();
            dispatch({
                type: ACTIONS.NEXT_ROUND,
                payload: { question: currentQuestion }
            });
        }
    };

    const handleRestart = () => {
        dispatch({ type: ACTIONS.RESTART });
    };

    return (
        <div className="results-view">
            <h1 className="results-view__title">🎉 Resultados</h1>

            <Card className="results-view__winners" glow>
                <h2 className="results-view__subtitle">
                    {currentRoundWinners.length > 1 ? '¡Empate!' : '¡Ganador!'}
                </h2>

                <div className="results-view__winner-grid">
                    {currentRoundWinners.map((winner, index) => (
                        <div key={index} className="winner-card">
                            <Avatar name={winner} size="large" />
                            <span className="winner-card__name">{winner}</span>
                            <div className="winner-card__trophy">👑</div>
                        </div>
                    ))}
                </div>
            </Card>

            <Card className="results-view__breakdown">
                <h3 className="results-view__breakdown-title">Desglose de Votos</h3>

                <div className="vote-breakdown">
                    {Object.entries(voteBreakdown)
                        .sort(([, a], [, b]) => b - a)
                        .map(([player, votes]) => (
                            <div key={player} className="vote-breakdown__item">
                                <div className="vote-breakdown__player">
                                    <Avatar name={player} size="small" />
                                    <span className="vote-breakdown__name">{player}</span>
                                </div>
                                <div className="vote-breakdown__bar-container">
                                    <div
                                        className="vote-breakdown__bar"
                                        style={{
                                            width: `${(votes / currentVotes.length) * 100}%`
                                        }}
                                    />
                                    <span className="vote-breakdown__count">{votes} voto{votes !== 1 ? 's' : ''}</span>
                                </div>
                            </div>
                        ))}
                </div>

                <div className="results-view__voters">
                    <h4 className="results-view__voters-title">¿Quién votó por quién?</h4>
                    <div className="voters-list">
                        {currentVotes.map((vote, index) => (
                            <div key={index} className="voter-item">
                                <span className="voter-item__text">
                                    <strong>{vote.voter}</strong> → {vote.votedFor}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </Card>

            <div className="results-view__actions">
                {!isQuestionsExhausted ? (
                    <Button
                        onClick={handleNextRound}
                        variant="primary"
                        size="large"
                        fullWidth
                    >
                        Siguiente Pregunta →
                    </Button>
                ) : (
                    <div className="results-view__game-over">
                        <p className="results-view__game-over-text">
                            ¡Se acabaron las preguntas! 🎊
                        </p>
                        <Button
                            onClick={handleRestart}
                            variant="secondary"
                            size="large"
                            fullWidth
                        >
                            Jugar de Nuevo
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};
