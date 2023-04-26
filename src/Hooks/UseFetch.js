import { useEffect } from "react";
import { useState } from "react";

const UseFetch = ()=>{
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    function fetchAllPokemon() {
        setLoading(true);
        fetch('https://pokeapi.co/api/v2/pokemon/')
            .then((response)=> response.json())
            .then((pokemon)=>{
                console.log(pokemon);
                setData(pokemon.results);
                setLoading(false);
            })
            .catch(error=>{
                console.log('my error',error);
                setLoading(false)
            })
    }

    function fetchData(name) {
        setLoading(true);
        fetch('https://pokeapi.co/api/v2/pokemon/'+ name)
            .then((response)=> response.json())
            .then((pokemon)=>{
                console.log(pokemon);
                setData(pokemon);
                setLoading(false);
            })
            .catch(error=>{
                console.log('my error',error);
                setLoading(false)
            })
    }


    return {fetchData, fetchAllPokemon, data, loading };

}

export default UseFetch;