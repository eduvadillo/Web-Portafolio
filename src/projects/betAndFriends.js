import "./projects-css/betAndFriends.css";
import { useState } from "react";
import macbook from "./macbookBet.png";
import macbook2 from "./macbookBet2.png";

import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

function BetAndFriends() {
  const [photoHome, setPhotoHome] = useState(true);
  const [photoLeague, setPhotoLeague] = useState(false);
  const [projectHome, setProjectHome] = useState(true);

  const handlePhotoProjectLeft = (e) => {
    console.log(`desde el left`);
    if (photoHome === true) {
      setPhotoHome(false);
      setPhotoLeague(true);
    }

    if (photoLeague === true) {
      setPhotoHome(true);
      setPhotoLeague(false);
    }
  };

  const handlePhotoProjectRight = (e) => {
    console.log(`desde el left`);
    if (photoHome === true) {
      setPhotoHome(false);
      setPhotoLeague(true);
    }

    if (photoLeague === true) {
      setPhotoHome(true);
      setPhotoLeague(false);
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
              <img src={macbook} className='photo' alt='betandfriends-home'></img>
            ) : photoLeague ? (
              <img src={macbook2} className='photo' alt='betandfriends-league'></img>
            ) : (
              <></>
            )}
            {/*     <img src={betandfriends2} className='photo2' alt='betandfriends-league'></img> */}
            <AiOutlineRight size={25} onClick={handlePhotoProjectRight} />
          </div>
          <div className='description'>
            <h1>
              <a href='http://betandfriends.com/' target='_blank' rel='noopener noreferrer'>
                BetAndFriends
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
            <a href='http://betandfriends.com/' target='_blank' rel='noopener noreferrer'>
              BetAndFriends
            </a>
          </h1>
          <h3>Project description:</h3>
          <p>
            BetAndFriends is the first sports betting fantasy. Where you can create private leagues
            to play with your friends or public leagues with hundreds of people from all over the
            world. Deposit money to join the leagues, each user of the league receives the same
            coins, bet and according to your classification receives the corresponding prize!
          </p>
          <h3> Technical description:</h3>
          <p>
            Web application made with a MERN stack. Back developed with Node Js, Express and Mongo
            DB. Front with React.
          </p>
          <h3> Functionalities:</h3>
          <p>
            User registration / login, deposit / withdraw money with the Stripe platform, create
            highly customizable public or private leagues, see all football and basketball matches
            and odds thanks to an external api, bet on them if you have enough coins and the game is
            within the term of the league, check if the bet has been lost or won and in this case
            add the corresponding coins, see league classification in real time, during the league
            partially see the bets of the rivals, at the end of the league see all bets, if a user
            runs out of coins possibility of repurchase. At the end of the league quiz to collect
            feedback, see all the available leagues, see all the leagues in which you have
            participated, etc.
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

export default BetAndFriends;
