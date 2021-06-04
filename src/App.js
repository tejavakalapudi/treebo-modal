import AppLayout from './containers/Layout';
import ModalStack from './containers/ModalStack';
import './App.scss';

// implement a Modal Component which can be rendered as Jsx
// implement a Modal component which needs to be called from any component

function App() {
  return (
    <div className="App">
      <ModalStack />
      <AppLayout/>
    </div>
  );
}

export default App;
