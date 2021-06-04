import AppLayout from './containers/Layout';
import ModalStack from './containers/ModalStack';
import './App.scss';

function App() {
  return (
    <div className="App">
      <ModalStack />
      <AppLayout/>
    </div>
  );
}

export default App;
