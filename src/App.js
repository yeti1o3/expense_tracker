import './style/App.css';
import HomePage from './HomePage';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <HomePage />
      </GlobalProvider>
    </div>
  );
}

export default App;
