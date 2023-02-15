import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CharacterList.css";

//LINK ROUTER DOM
import { Link } from "react-router-dom";

import CharacterCard from "../CharacterCard/CharacterCard";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios("https://thesimpsonsquoteapi.glitch.me/quotes?count=10").then((res) =>
      setCharacters(res.data)
    );
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <h2>loading...</h2>
      ) : (
        <div className="CharacterList-container">
          {characters.map((char) => {
            return (
              <div key={char.character}>
                <Link to={`/detail/${char.character}`} className="Link">
                  <CharacterCard data={char} />
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default CharacterList;
