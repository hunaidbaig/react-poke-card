import './App.css';
import SideBar from './components/sideBar/SideBar';
import Main from './components/main/Main';
import UseFetch from './Hooks/UseFetch';
import { useState } from 'react';

function App() {

  const [searchName, setSearchName] = useState('');
  const { fetchData, data, loading } = UseFetch();
  const { fetchAllPokemon, data: myData, loading: myLoading } = UseFetch();
  const [showCard, setShowCard] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchData(searchName);
    console.log('submit');
    console.log(data);
    setSearchName('')
    setShowCard(true);
  }

  const handleClick = (name)=>{
    fetchData(name);
    setShowCard(true);
  }

  return (
    <div className="App">
      <main className='main-section'>
        <SideBar fetchAllPokemon={fetchAllPokemon} data={myData} loading={myLoading} handleClick={handleClick} />
        <Main handleSubmit={handleSubmit} loading={loading} data={data} showCard={showCard} searchName={searchName} setSearchName={setSearchName} />
      </main>
    </div>
  );
}

export default App;
