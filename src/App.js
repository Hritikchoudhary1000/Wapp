
import './App.css';

import Weather from './Component/Weather';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="app-container">
      
      <Weather/>
    </div>
    </BrowserRouter>


  );
}

export default App;
