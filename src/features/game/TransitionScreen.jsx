import { useGame } from '../../context/GameContext';
import { ACTIONS } from '../../utils/constants';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Avatar } from '../../components/ui/Avatar';
import './TransitionScreen.css';

export const TransitionScreen = () => {
    const { players, currentPlayerIndex, dispatch } = useGame();
    const currentPlayer = players[currentPlayerIndex];

    const handleReady = () => {
        dispatch({ type: ACTIONS.NEXT_STEP });
    };

    return (
        <div className="transition-screen">
            <Card className="transition-screen__card" gradient glow>
                <div className="transition-screen__icon">🔒</div>
                <h2 className="transition-screen__title">Privacidad</h2>
                <p className="transition-screen__message">
                    Pásale el dispositivo a:
                </p>

                <div className="transition-screen__player">
                    <Avatar name={currentPlayer} size="large" />
                    <h3 className="transition-screen__player-name">{currentPlayer}</h3>
                </div>

                <p className="transition-screen__instruction">
                    Solo {currentPlayer} debe ver la siguiente pantalla
                </p>

                <Button
                    onClick={handleReady}
                    variant="secondary"
                    size="large"
                    fullWidth
                >
                    Estoy Listo
                </Button>
            </Card>
        </div>
    );
};
