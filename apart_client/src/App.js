import './App.css';
import { apiGetBackend } from "./services/apiService"
import { useEffect, useState } from 'react';
import Header from './components/Header';
import AllCards from './components/AllCards';
import Cards from './components/Cards';


function App() {
  const [itens, setItens] = useState([]);
  useEffect(() => {
    apiGetBackend()
      .then((getBackend) => {
        setItens(getBackend)
        
      })
      .catch((err) => {
        console.log("erro " + err);
      });
  }, []);
  return (
    <>
      <Header/>
      <AllCards>
        <Cards/>
      </AllCards>
    </>
  );
}

export default App;
