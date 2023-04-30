import React from "react";
import BackgroundCover from "./BackgroundCover";
import Presentation from "./Presentation";
import Cover from "./Cover";
import Footer from "../fragments/footer/Footer";
import Header1 from "../fragments/header/Header1";

import style from "../../../css/Footer.module.css";
import TravelWidget from "./TravelWidget";

const Main = () => {
  return (
    <>
          <Header1></Header1>

                     <div className="showcase-img ">
                              <TravelWidget></TravelWidget>


                    </div>





        <div className="about-area mt-95">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="about-container">
                            <h3>BCD TRAVEL <span className="orange-color">VISAS</span> for you</h3>
                            <h4><span className="whycolor">We are the Fastest Way to Get a Visa</span></h4>
                            <p>The leading global travel visa service with unrivaled capability to obtain business and other travel visas
                                for corporations and individuals worldwide in a fast, convenient and secure manner</p>
                            <h4><span className="whycolor">We are the World Leader in Global Mobility</span></h4>
                            <p>Over 1,600 expert immigration and visa professionals utilizing industry-leading technology to ensure that you
                                always have the correct legal documents required for your travel</p>
                            <h4><span className="whycolor">We are Fast, Easy, and Secure</span></h4>
                            <p>Strict adherence to complex global and national legislation and regulations in addition to the secure safeguarding
                                of your personal data</p>
                            <a  className="simple-link" href="event-details.html">Learn More ></a>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <br></br>
                        <br></br>
                        <br></br>



                        <div className="about-image-area img-full">
                            <img src="img/image01.avif" alt="small images"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title-wrapper">
                            <div className="section-title">
                                <br></br>

                                <h3>TOP TRAVEL DESTINATIONS</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="single-item">
                            <div className="single-item-image overlay-effect">
                                <a href="courses-details.html"><img src="img/course/1.jpg" alt=""></img></a>
                                <div className="courses-hover-info">
                                    <div className="courses-hover-action">
                                        <div className="courses-hover-thumb">
                                            <img src="img/teacher/1.png" alt="small images"></img>
                                        </div>
                                        <span className="crs-separator">/</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="single-item">
                            <div className="single-item-image overlay-effect">
                                <a href="courses-details.html"><img src="img/course/2.jpg" alt=""></img></a>
                                <div className="courses-hover-info">
                                    <div className="courses-hover-action">
                                        <div className="courses-hover-thumb">
                                            <img src="img/teacher/1.png" alt="small images"></img>
                                        </div>
                                        <span className="crs-separator">/</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="single-item">
                            <div className="single-item-image overlay-effect">
                                <a href="courses-details.html"><img src="img/course/3.jpg" alt=""></img></a>
                                <div className="courses-hover-info">
                                    <div className="courses-hover-action">
                                        <div className="courses-hover-thumb">
                                            <img src="img/teacher/1.png" alt="small images"></img>
                                        </div>
                                        <span className="crs-separator">/</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        <div className="event-area section-padding bg-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title-wrapper">
                            <div className="section-title">
                                <h3>Travelling Soon ?</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-event-item">

                            <div className="single-event-text">
                                <h3><a href="event-details.html">Entry and Health Guidance</a></h3>
                                <p>Accurate and up-to-the-minute regulations for your destination, including COVID-19 and rules for vaccinated traveler</p>
                                <a  className="simple-link" href="event-details.html">Learn More ></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-event-item">

                            <div className="single-event-text">
                                <h3><a href="event-details.html">Informed Traveller</a></h3>
                                <p>Travel regulations are changing by the hour. Get an itinerary review and the guidance you need to travel safely and securely</p>
                                <a  className="simple-link" href="event-details.html">Learn More ></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-event-item">

                            <div className="single-event-text">
                                <h3><a href="event-details.html">Guided Entry</a></h3>
                                <p>
                                    Simplify complex travel regulations with Guided-Entry, our step by step solution for navigating this turbulent era of travel
                                </p>
                                <a  className="simple-link" href="event-details.html">Learn More ></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

          <Footer></Footer>

    </>
  );
};

export default Main;
