import RoutesTable from './components/RoutesTable.tsx';
import { routesData } from './types/routes.ts';

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>Таблица маршрутов</h1>
      <RoutesTable routes={routesData} />
    </div>
  );
};

export default App
