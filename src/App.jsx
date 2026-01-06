import { GameProvider } from './context/GameContext';
import { MainLayout } from './components/layout/MainLayout';
import { GameController } from './features/GameController';
import './App.css';

function App() {
  return (
    <GameProvider>
      <MainLayout>
        <GameController />
      </MainLayout>
    </GameProvider>
  );
}

export default App;

