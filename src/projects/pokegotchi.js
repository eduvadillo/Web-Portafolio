import "./projects-css/betAndFriends.css";
import { useState } from "react";
import macbookPoke from "./macbookPoke.png";
import macbookPoke2 from "./macbookPoke2.png";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

function Pokegotchi() {
  const [photoHome, setPhotoHome] = useState(true);
  const [photoPlay, setPhotoPlay] = useState(false);
  const [projectHome, setProjectHome] = useState(true);

  const handlePhotoProjectLeft = (e) => {
    console.log(`desde el left`);
    if (photoHome === true) {
      setPhotoHome(false);
      setPhotoPlay(true);
    }

    if (photoPlay === true) {
      setPhotoHome(true);
      setPhotoPlay(false);
    }
  };

  const handlePhotoProjectRight = (e) => {
    console.log(`desde el left`);
    if (photoHome === true) {
      setPhotoHome(false);
      setPhotoPlay(true);
    }

    if (photoPlay === true) {
      setPhotoHome(true);
      setPhotoPlay(false);
    }
  };

  const handleDescriptionButton = (e) => {
    if (projectHome === true) {
      setProjectHome(false);
    } else {
      setProjectHome(true);
    }
  };

  return (
    <div className='page-content-bet'>
      {projectHome ? (
        <>
          <div className='photos-container'>
            <AiOutlineLeft size={25} onClick={handlePhotoProjectLeft} />
            {photoHome ? (
              <img src={macbookPoke} className='photo' alt='pokegotchi-home'></img>
            ) : photoPlay ? (
              <img src={macbookPoke2} className='photo' alt='pokegotchi-plasy'></img>
            ) : (
              <></>
            )}
            {/*     <img src={betandfriends2} className='photo2' alt='betandfriends-league'></img> */}
            <AiOutlineRight size={25} onClick={handlePhotoProjectRight} />
          </div>
          <div className='description'>
            <h1>
              <a href='http://pokegotchi-challenge.herokuapp.com/' target='_blank'>
                Pokegotchi Challenge
              </a>
            </h1>
            <button
              name='favorito'
              className='description-button'
              type='button'
              onClick={handleDescriptionButton}
            >
              Description
            </button>
          </div>
        </>
      ) : (
        <div className='description-container'>
          <h1>
            <a href='http://pokegotchi-challenge.herokuapp.com/' target='_blank'>
              Pokegotchi Challenge
            </a>
          </h1>
          <h3>Project description</h3>
          <p>
            Pokegotchi is the technical test to work in Innovating Technologies. A very open
            challenge where the basic requirement was to obtain the pokemons from an API.
          </p>
          <h3> Technical description:</h3>
          <p>
            Web application made with a MERN stack. Back developed with Node Js, Express and Mongo
            DB. Front with React.
          </p>
          <h3> Functionalities:</h3>
          <p>
            Register / login users, create a new game, play in different games at the same time, a
            pokemons search engine, see the qualities of the pokemon, add pokemons to your game. Not
            being able to choose a legendary pokemon because getting it will be the ultimate goal.
          </p>
          <button
            name='favorito'
            className='description-button'
            type='button'
            onClick={handleDescriptionButton}
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
}

export default Pokegotchi;
