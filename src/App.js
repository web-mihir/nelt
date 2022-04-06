import { createContext } from 'react';
import './App.css';
import {useApi} from './hooks/useApi';
function App() {
  const url = "https://fakestoreapi.com/products";
  const [data] = useApi(url);
  console.log(data);
  const contextProvider = createContext();
  return (
    <div className="App">

    </div>
  );
}

export default App;
