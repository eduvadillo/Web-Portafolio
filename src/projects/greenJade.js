import "./projects-css/projects.css";
import { useState } from "react";
import macbookGreen from "./images/macbookGreen.png";
import macbookGreen2 from "./images/macbookGreen2.png";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

function GreenJade() {
  const [photoHome, setPhotoHome] = useState(true);
  const [photoRequiere, setPhotoRequiere] = useState(false);
  const [projectToHome, setProjectToHome] = useState(true);

  const handlePhotoProjectLeft = (e) => {
    console.log(`desde el left`);
    if (photoHome === true) {
      setPhotoHome(false);
      setPhotoRequiere(true);
    }

    if (photoRequiere === true) {
      setPhotoHome(true);
      setPhotoRequiere(false);
    }
  };

  const handlePhotoProjectRight = (e) => {
    console.log(`desde el left`);
    if (photoHome === true) {
      setPhotoHome(false);
      setPhotoRequiere(true);
    }

    if (photoRequiere === true) {
      setPhotoHome(true);
      setPhotoRequiere(false);
    }
  };

  const handleDescriptionButton = (e) => {
    if (projectToHome === true) {
      setProjectToHome(false);
    } else {
      setProjectToHome(true);
    }
  };

  return (
    <div className='page-content-bet'>
      {projectToHome ? (
        <>
          <div className='photos-container'>
            <AiOutlineLeft size={25} onClick={handlePhotoProjectLeft} />
            {photoHome ? (
              <img src={macbookGreen} className='photo' alt='greenjade-home'></img>
            ) : photoRequiere ? (
              <img src={macbookGreen2} className='photo' alt='greenjade-home2'></img>
            ) : (
              <></>
            )}
            {/*     <img src={betandfriends2} className='photo2' alt='betandfriends-league'></img> */}
            <AiOutlineRight size={25} onClick={handlePhotoProjectRight} />
          </div>
          <div className='description'>
            <h1>
              <a
                href='http://jadecoinflip.herokuapp.com/'
                rel='noopener noreferrer'
                target='_blank'
              >
                GreenJade Clone
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
            <a href='http://jadecoinflip.herokuapp.com/' rel='noopener noreferrer' target='_blank'>
              GreenJade Clone
            </a>
          </h1>
          <h3>Project description</h3>
          <p>
            This project has consisted of making a clone of the original page:
            https://greenjade.com/games/coin-flip-deluxe/ without any reference and making it as
            similar as possible.
          </p>
          <h3>Technical description:</h3>
          <p>The web is developed in React.</p>
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
export default GreenJade;
