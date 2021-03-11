
import './App.css';
import Background from './Component/Background';
import Weather from './Component/Weather';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Background/>
      <Weather/>
    </div>
    </BrowserRouter>


  );
}

export default App;
