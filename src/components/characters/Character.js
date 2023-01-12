const Character = ({character}) => {

    return (
        <div>
            <h2>{character.id}. {character.name}</h2>
            <p>{character.status}</p>
            <img src={character.image} alt = {character.name}/>
            <hr/>
        </div>
    );
};

export {Character};