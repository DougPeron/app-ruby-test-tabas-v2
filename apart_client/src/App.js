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
      {itens.map(({id, title, locale, price, pic1, pic2, pic3, pic4, pic5})=>{
        return <Cards key={id} title={title} locale={locale} price={price} pic1={pic1} pic2={pic2} pic3={pic3} pic4={pic4} pic5={pic5}/>
      })}
      </AllCards>
    </>
  );
}

export default App;
