import React, { useState } from "react";
import Modal from "react-modal";
import Social from "./Social";
import './news.css'




import ReactMapGL from "react-map-gl";
import emailjs from "emailjs-com";

Modal.setAppElement("#root");

const News = () => {

  const [viewport, setViewport] = useState({
    latitude: 34.059761,
    longitude: -118.276802,
    zoom: 7,
  });


  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }


  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n4mkhz9",
        "template_ugoztxr",
        e.target,
        "user_vYmDSd9PwIuRXUQEDjYwN"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    e.target.reset();
  }

  return (
    <>
    <div className="tokyo_tm_contact">
      <div className="tokyo_tm_title">
        <div className="title_flex">
          <div className="left">
            {/* <span>Contact</span> */}
            <h3 className='reachOut'>Reach out!</h3>
          </div>
        </div>
      </div>
      {/* END TITLE */}

      <div className="map_wrap">
        <div className="map">
          <ReactMapGL
            mapStyle={"mapbox://style/mapbox/dark-v9"}
            mapboxApiAccessToken="pk.eyJ1IjoiYmF5YXppZGgiLCJhIjoiY2tvemdwc3ByMDg1YzJubzQxcDR0cDR3dyJ9.s1zXEb5OPqgBDcmupj3GBA"
            {...viewport}
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
          />
        </div>
      </div>
      {/* MENU WRAP */}
      <div className='emailContactPage'>
        <h3 className='emailContactPage'><a href="mailto:maxtgrigg@gmail.com" className='emailContactPage'>Email: maxtgrigg@gmail.com</a></h3>
      </div>
      <div className='phoneContactPage'>
        <h3 className='phoneContactPage'> <a href="tel:3109939031" className='phoneContactPage'> Phone: 310-993-9031</a></h3>
      </div>

      <div className='linkedinCSS'>
        <h3 className='linkedinCSS'><a href="https://www.linkedin.com/in/maxim-grigg/" className='linkedinCSS'>Linkedin</a></h3>
      </div>
      <div className='gitHubCSS'>
        <h3 className='gitHubCSS'><a href="https://github.com/mtgrigg" className='gitHubCSS'>GitHub</a></h3>
      </div>

      </div>
  </>
  );
};

export default News;
