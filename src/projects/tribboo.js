import "./projects-css/betAndFriends.css";
import { useState } from "react";
import macbookTribboo from "./macbookTribboo.png";
import macbookTribboo2 from "./macbookTribboo2.png";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

function Tribboo() {
  const [photoHome, setPhotoHome] = useState(true);
  const [photoRequiere, setPhotoRequiere] = useState(false);
  const [projectHome, setProjectHome] = useState(true);

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
              <img src={macbookTribboo} className='photo' alt='tribbo-home'></img>
            ) : photoRequiere ? (
              <img src={macbookTribboo2} className='photo' alt='tribbo-chellenge'></img>
            ) : (
              <></>
            )}
            {/*     <img src={betandfriends2} className='photo2' alt='betandfriends-league'></img> */}
            <AiOutlineRight size={25} onClick={handlePhotoProjectRight} />
          </div>
          <div className='description'>
            <h1>
              <a href='https://tribboo.herokuapp.com/' target='_blank'>
                Tribboo Challenge
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
            <a href='https://tribboo.herokuapp.com/' target='_blank'>
              Tribboo Challenge
            </a>
          </h1>
          <h3>Project description</h3>
          <p>
            {" "}
            Tribbo Challenge has been the technical test to work for the StartUp Tribbo. Given an
            image in pdf, I had to make a web and with a Json file simulating a database, show and
            order the tasks.
          </p>
          <h3>Technical description:</h3>
          <p>Front con React</p>
          <h3> Functionalities:</h3>
          <p>
            When you press the navbar buttons, a line appears so that you know where you are. In the
            upper buttons it is also marked by changing the style of the button{" "}
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

export default Tribboo;
