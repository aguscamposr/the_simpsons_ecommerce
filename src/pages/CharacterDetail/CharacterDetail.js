import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import "./CharacterDetail.css";
import CharacterCard from "../../components/CharacterCard/CharacterCard";

const CharacterDetail = () => {
  const [character, setCharacter] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log(character);

  let { id } = useParams();

  // console.log(userID);

  useEffect(() => {
    axios(`https://thesimpsonsquoteapi.glitch.me/quotes?count=15${id}`).then((res) =>
      setCharacter(res.data)
    );
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [id]);

  return (
    <div className="CharacterList-Container">
      {isLoading ? (
        <h3>Loding...</h3>
      ) : (
        <div className="CharacterList-detail">
          <div key={character.id}>
            <CharacterCard data={character} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterDetail;
