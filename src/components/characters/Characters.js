import {useState} from "react";

import {Character} from "./Character";

const Characters = () => {

    let [characters, setCharacters] = useState([])

    fetch('https://rickandmortyapi.com/api/character')
        .then((value) => value.json())
        .then(value => setCharacters(value.results.splice(0,5)))

    return (<div>
        {
            characters.map((character, index) => <Character key={index} character={character}
            />)
        }
    </div>);
};

export {Characters};