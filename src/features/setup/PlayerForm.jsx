import { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { ACTIONS } from '../../utils/constants';
import { categories } from '../../data/categories';
import { Header } from '../../components/layout/Header';
import { Card } from '../../components/ui/Card';
import { TextInput } from '../../components/ui/TextInput';
import { Button } from '../../components/ui/Button';
import { Avatar } from '../../components/ui/Avatar';
import './PlayerForm.css';

export const PlayerForm = () => {
    const { players, selectedCategory, dispatch } = useGame();
    const [playerName, setPlayerName] = useState('');
    const [error, setError] = useState('');

    const handleAddPlayer = () => {
        if (!playerName.trim()) {
            setError('El nombre no puede estar vacío');
            return;
        }

        if (players.some(p => p.toLowerCase() === playerName.trim().toLowerCase())) {
            setError('Este nombre ya existe');
            return;
        }

        dispatch({ type: ACTIONS.ADD_PLAYER, payload: playerName.trim() });
        setPlayerName('');
        setError('');
    };

    const handleRemovePlayer = (index) => {
        dispatch({ type: ACTIONS.REMOVE_PLAYER, payload: index });
    };

    const handleSelectCategory = (categoryId) => {
        dispatch({ type: ACTIONS.SELECT_CATEGORY, payload: categoryId });
    };

    const handleStartGame = () => {
        if (players.length < 2) {
            setError('Necesitas al menos 2 jugadores');
            return;
        }
        if (!selectedCategory) {
            setError('Selecciona una categoría');
            return;
        }
        dispatch({ type: ACTIONS.START_GAME });
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAddPlayer();
        }
    };

    return (
        <div className="player-form">
            <Header
                title="Most Likely To"
                subtitle="Juego de Votación"
            />

            <Card className="player-form__section">
                <h2 className="player-form__section-title">👥 Jugadores</h2>

                <div className="player-form__input-group">
                    <TextInput
                        value={playerName}
                        onChange={(e) => setPlayerName(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Nombre del jugador"
                        error={error}
                    />
                    <Button onClick={handleAddPlayer} size="medium">
                        Agregar
                    </Button>
                </div>

                {players.length > 0 && (
                    <div className="player-form__players">
                        {players.map((player, index) => (
                            <div key={index} className="player-item">
                                <Avatar name={player} size="small" />
                                <span className="player-item__name">{player}</span>
                                <button
                                    className="player-item__remove"
                                    onClick={() => handleRemovePlayer(index)}
                                >
                                    ✕
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </Card>

            <Card className="player-form__section">
                <h2 className="player-form__section-title">🎭 Categoría</h2>
                <div className="category-grid">
                    {categories.map(category => (
                        <div
                            key={category.id}
                            className={`category-card ${selectedCategory === category.id ? 'category-card--selected' : ''}`}
                            onClick={() => handleSelectCategory(category.id)}
                            style={{ background: category.gradient }}
                        >
                            <div className="category-card__icon">{category.name.split(' ')[0]}</div>
                            <div className="category-card__name">{category.name.split(' ')[1]}</div>
                        </div>
                    ))}
                </div>
            </Card>

            <Button
                onClick={handleStartGame}
                variant="primary"
                size="large"
                fullWidth
                disabled={players.length < 2 || !selectedCategory}
            >
                Comenzar Juego
            </Button>
        </div>
    );
};
