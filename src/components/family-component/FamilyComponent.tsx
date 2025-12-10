import {simpsons} from "../../data/data.ts";
import CharacterComponent from "../character-component/CharacterComponent.tsx";

const FamilyComponent = () => {
    return (
        <ul className='flex flex-col gap-4'>
            {simpsons.map((character, index)=>
                <CharacterComponent key={index}>
                <h3>{character.name}</h3>
                    <p>{character.age}</p>
                    <p>{character.info}</p>
                    <p>{character.surname}</p>
                    <img src={character.photo} alt={character.name} />
            </CharacterComponent>)}
        </ul>
    );
};

export default FamilyComponent;