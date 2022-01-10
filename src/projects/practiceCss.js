import "./projects-css/projects.css";
import { useState } from "react";
import macbookCss from "./images/macbookCss.png";
import macbookCss2 from "./images/macbookCss2.png";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

function PracticeCss() {
  const [photoHome, setPhotoHome] = useState(true);
  const [photoHome2, setPhotoHome2] = useState(false);
  const [projectHome, setProjectHome] = useState(true);

  const handlePhotoProjectLeft = (e) => {
    console.log(`desde el left`);
    if (photoHome === true) {
      setPhotoHome(false);
      setPhotoHome2(true);
    }

    if (photoHome2 === true) {
      setPhotoHome(true);
      setPhotoHome2(false);
    }
  };

  const handlePhotoProjectRight = (e) => {
    console.log(`desde el left`);
    if (photoHome === true) {
      setPhotoHome(false);
      setPhotoHome2(true);
    }

    if (photoHome2 === true) {
      setPhotoHome(true);
      setPhotoHome2(false);
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
              <img src={macbookCss} className='photo' alt='practice1'></img>
            ) : photoHome2 ? (
              <img src={macbookCss2} className='photo' alt='practice2'></img>
            ) : (
              <></>
            )}
            {/*     <img src={betandfriends2} className='photo2' alt='betandfriends-league'></img> */}
            <AiOutlineRight size={25} onClick={handlePhotoProjectRight} />
          </div>
          <div className='description'>
            <h1>
              <a
                href='http://eduvadillosite.herokuapp.com/'
                rel='noopener noreferrer'
                target='_blank'
              >
                My Socials
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
              href='http://eduvadillosite.herokuapp.com/'
              rel='noopener noreferrer'
              target='_blank'
            >
              My Socials
            </a>
          </h1>
          <h3>Project description</h3>
          <p>
            My Socials is a project that aims to practice CSS and show my different social networks.
          </p>
          <h3> Technical description:</h3>
          <p>
            Web application made with a MERN stack. Back developed with Node Js, Express and Mongo
            DB. Front with React.
          </p>
          <h3> Characteristics:</h3>
          <p>
            There are 3 web models visible to the user, all of them show my social networks with a
            different design. In each reload it shows a different interface thanks to the Back. I
            discarded the random mode to see all the options more easily. Creation of a quite
            original loader.
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

export default PracticeCss;
