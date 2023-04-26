import React, { useState } from 'react'
import './Main.css'
import UseFetch from '../../Hooks/UseFetch'
import PokemonCard from '../main-card/PokemonCard';
import SideBar from '../sideBar/SideBar';

const Main = ({handleSubmit, loading, showCard, data, searchName, setSearchName}) => {
    // const [searchName, setSearchName] = useState('');
    // const {fetchData , data, loading} = UseFetch();
    // const [showCard, setShowCard] = useState(false);

    // const handleSubmit = async (e)=>{
    //     e.preventDefault();
    //     fetchData(searchName);
    //     console.log('submit');
    //     console.log(data);
    //     setSearchName('')
    //     setShowCard(true);
    // }

  return (
    <div className='section'>
        <h1>Pokemon Information</h1>
        <form className="d-flex" onSubmit={handleSubmit}>
            <input className="form-control me-2" value={searchName} placeholder='Search by name' onChange={(e)=>setSearchName(e.target.value)} type="search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        {/* <SideBar /> */}
        {loading ? <p>loading...</p> : 
            showCard ? <PokemonCard name={data?.name} sprites={data?.sprites} weight={data?.weight}  /> : null
        }
    </div>
  )
}


export default Main;
