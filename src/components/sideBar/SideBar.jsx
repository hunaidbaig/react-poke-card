import React, { useEffect } from 'react'
import UseFetch from '../../Hooks/UseFetch'
import './SlideBar.css'
import Card from '../card/Card';

function SideBar({fetchAllPokemon, loading, data, handleClick}) {

    useEffect(()=>{
        fetchAllPokemon();
    },[])

  return (
    <div className='side-bar'>
        <h1>Pokemon Names</h1>
        {loading ? <p>Loading...</p> :
            data.map((pokemon)=>{
                return (
                    <Card name={pokemon.name} url={pokemon?.url} handleClick={handleClick} />
                )
            })
        }
    </div>
  )
}

export default SideBar