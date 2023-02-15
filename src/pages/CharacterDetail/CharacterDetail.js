import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import "./CharacterDetail.css";
import CharacterCard from "../../components/CharacterCard/CharacterCard";

const CharacterDetail = () => {
  let { id } = useParams();
  const [character, setCharacter] = useState();
  const [isLoading, setIsLoading] = useState(true);

  console.log(character);

  

  useEffect(() => {
    axios(`https://thesimpsonsquoteapi.glitch.me/quotes?character=${id}`).then((res) =>
      setCharacter(res.data)
    );
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [id]);
  //In the return im using an array whit position 0 because the API return only one Array whit an only Objet.
  return (
    <div className="CharacterList-Container">
      {(isLoading|| !character) ? (
        <h3>Loding...</h3>
      ) : (
        <div className="CharacterList-detail">
          <div key={character[0].character}>
            <CharacterCard data={character[0]} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterDetail;
