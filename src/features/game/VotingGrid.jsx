import { useGame } from '../../context/GameContext';
import { ACTIONS } from '../../utils/constants';
import { Card } from '../../components/ui/Card';
import { Avatar } from '../../components/ui/Avatar';
import './VotingGrid.css';

export const VotingGrid = () => {
    const { players, currentPlayerIndex, currentQuestion, dispatch } = useGame();
    const currentPlayer = players[currentPlayerIndex];

    const handleVote = (votedFor) => {
        dispatch({ type: ACTIONS.CAST_VOTE, payload: votedFor });
        dispatch({ type: ACTIONS.NEXT_STEP });
    };

    return (
        <div className="voting-grid">
            <div className="voting-grid__header">
                <p className="voting-grid__voter">Votando: <strong>{currentPlayer}</strong></p>
                <Card className="voting-grid__question">
                    <p className="voting-grid__question-text">{currentQuestion?.text}</p>
                </Card>
            </div>

            <h2 className="voting-grid__title">¿Quién crees que es?</h2>

            <div className="voting-grid__players">
                {players.map((player, index) => (
                    <div
                        key={index}
                        className="vote-option"
                        onClick={() => handleVote(player)}
                    >
                        <Avatar name={player} size="medium" />
                        <span className="vote-option__name">{player}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
