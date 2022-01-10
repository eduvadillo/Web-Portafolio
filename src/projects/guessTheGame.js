import "./projects-css/betAndFriends.css";
import { useState } from "react";
import macbookGuess from "./macbookGuess.png";
import macbookGuess2 from "./macbookGuess2.png";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

function GuessTheGame() {
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
              <img src={macbookGuess} className='photo' alt='guess-the-number-home'></img>
            ) : photoPlay ? (
              <img src={macbookGuess2} className='photo' alt='guess-the-number-play'></img>
            ) : (
              <></>
            )}
            {/*     <img src={betandfriends2} className='photo2' alt='betandfriends-league'></img> */}
            <AiOutlineRight size={25} onClick={handlePhotoProjectRight} />
          </div>
          <div className='description'>
            <h1>
              <a
                href='https://game-guess-the-number.herokuapp.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Guess The Number
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
            <a
              href='https://game-guess-the-number.herokuapp.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Guess The Number
            </a>
          </h1>
          <h3>Project description</h3>
          <p>
            Guees The Number is a game where you have to guess a random number, you have 10 attempts
            to get it right, each attempt is one point less than you can get and with each hit your
            points go up. It has different levels of difficulty
          </p>
          <h3> Technical description:</h3>
          <p>
            Web application made with a MERN stack. Back developed with Node Js, Express and Mongo
            DB. Front with React.
          </p>
          <h3> Functionalities:</h3>
          <p>
            The user can write his name to record his score. The game consists of 6 levels of
            difficulty, in each level you have to match 4 words. In each level you start with 60
            seconds of time to match the number and with each success 5 seconds are reduced to match
            the next number. To motivate the player and promote competitiveness, a ranking of the
            players with the best scores is displayed.
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

export default GuessTheGame;
