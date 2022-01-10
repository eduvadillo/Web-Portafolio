import "./projects-css/betAndFriends.css";
import { useState } from "react";
import macbookHousfy from "./macbookHousfy.png";
import macbookHousfy2 from "./macbookHousfy2.png";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

function Housfy() {
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
              <img src={macbookHousfy} className='photo' alt='housfy-home'></img>
            ) : photoPlay ? (
              <img src={macbookHousfy2} className='photo' alt='housfy-play'></img>
            ) : (
              <></>
            )}
            {/*     <img src={betandfriends2} className='photo2' alt='betandfriends-league'></img> */}
            <AiOutlineRight size={25} onClick={handlePhotoProjectRight} />
          </div>
          <div className='description'>
            <h1>
              <a href='http://housfy-mars-challenge.herokuapp.com/' target='_blank'>
                Housfy Challenge
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
            <a href='http://housfy-mars-challenge.herokuapp.com/' target='_blank'>
              Housfy Challenge
            </a>
          </h1>
          <h3>Project description</h3>
          <p>
            Housfy Challenge has been the technical test to work for the StartUp Housfy. The project
            consists of making a Rover in a delimited space. He has to receive orders from the earth
            and carry them out. The Rover should only be able to move forward, turn right, and turn
            left. There must also be an obstacle that the rover must avoid.
          </p>
          <h3>Technical description:</h3>
          <p>Web application made with React and deployed in Heroku.</p>
          <h3> Functionalities:</h3>
          <p>
            The Rover can move forward, turn right and left. It has a protection and warning system
            with which it avoids collisions with the obstacle and the edges of the space. If it
            detects that you are very close to the obstacle or edge of the space, it changes color.
            If in spite of that you decide to give the order, the rover has a mechanism that will
            automatically redirect you so that you do not crash. The obstacle is placed in a
            different random location each time.
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

export default Housfy;
