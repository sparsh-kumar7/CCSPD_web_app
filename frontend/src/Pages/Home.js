import React from "react";
import Footer from "../component/Footer";
import './../Pages/Home.css'
// import { Navigate, useNavigate } from "react-router";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
const stopMarquee = () =>{
  var marque = document.getElementById('marID');
  if(marque != null)
  {
    marque.stop();
  }
}

const startMarquee = () =>{
  var marque = document.getElementById('marID');
  if(marque != null)
  {
    marque.start();
  }
}


const Home = () => {
  useEffect(() => {
    refreshlist();
  }, []);
    const[announcements,setAnnouncements] = useState([]);
  
    function refreshlist() {
    axios
        .get("http://localhost:8000/api/Announcements/")
        .then(res => {
          const result = Object.values(res)
          setAnnouncements([...result[0]])
        })
        .catch(error => console.log(error));
      }
  const history = useHistory();
  console.log(document.getElementById('headerFile'))

  // const navigate = useNavigate();
  return (
    <React.StrictMode>
      <div className="main-page-content">
        <div id="home">
          <div id="particles-js"></div>
          <div className="home-content-main">
            <div className="table-cell">
              <div className="container">
                <div className="row home-row">
                  <div className="col-md-12 col-sm-12">
                    <div className="home-text wow fadeIn text-center">
                      <h1 className="cd-headline clip is-full-width">
                        <span
                          className="cd-words-wrapper"
                          style={{ width: "266px", overflow: "hidden" }}
                        >
                          <b className="is-hidden">Communication Skills</b>
                          <b className="is-hidden">Personality Development</b>
                          <b className="is-visible">Soft Skills</b>
                        </span>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="parallax" data-velocity="-.1"></div>
          <div className="parallax" data-velocity="-.5" data-fit="525"></div>
        </div>

        {/* <!-- ================================ ABOUT =============================== --> */}

        <div id="about">
          <div className="about-content">
            <div className="love-grid text-center">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-title text-center wow fadeIn">
                      <h3>Center for Communication, Soft-Skills and Personality Development</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        <ul>
                          <li> The centre will strengthen communication skills, soft skills and
                            overall personality of students and participating individuals. </li>
                          <li> The activities of this virtual centre are: Conducting Workshops, Training
                            on Interview Skills, Employability skills and personality development for students.
                            Faculty and Staff Development Programmes will also be organized under this centre. </li>
                          <li> The centre works towards training the participants which the nuances of effective communication,
                            workplace etiquette and socio-professional interaction and thus foster their employability and
                            professional success. </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-back"></div>
            <div className="me-grid">
              <div className="container">
                <div className="row">
                  <div className="col-md-4 col-sm-6 col-xs-12 about-col">
                    <div className="about-image">
                      <img
                        src="assets/img/about-image.jpg"
                        alt="gittyAditya"
                        className="about-img wow fadeIn"
                      />
                    </div>
                  </div>
                  <div className="col-md-8 col-sm-6 col-xs-12 about-col">
                    <div className="about-details wow fadeIn">
                      <div className="main-title left-title text-left wow fadeIn">
                        <h3>This is C-CSPD WebApp!</h3>
                        <div className="underline1 no-margin"></div>
                        <div className="underline2 no-margin"></div>
                      </div>
                      <p className="wow fadeIn">
                        As a scholar in English language, pragmatics and communication,
                        I’m interested in devising linguistic and socio-pragmatic methodologies that can inform
                        language teaching and communication in higher education contexts.
                        Multilingualism and hybridity in internet communication intrigues me.
                        I love to observe and explore how individuals exploit language as a semiotic system
                        to express themselves, and to create, communicate and interpret meaning in diverse contexts,
                        both online and offline.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- ================================ Announcements =============================== --> */}
        
        <div id="announcements">
          <div className="announcements-main">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="main-title text-center wow fadeIn">
                    <h3>Announcements</h3>
                    <div className="underline1"></div>
                    <div className="underline2"></div>
                    <p onMouseOver={()=>stopMarquee()} onMouseOut={()=>startMarquee()}>
                    <marquee id='marID' direction="up" style={{ height: "400px", display: "grid", placeItems: "center", overflow: "hidden", width: "100%", textAlign:"center"}}>
                    {announcements.map((row) =>{
                    return (
                          <div className="alert alert-success" role="alert">
                            {row.announcement}
                          </div>
                    )})}
                      </marquee>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ================================ Resources =============================== --> */}

        <div id="resources">
          <div className="resources-content">
            <div className="resources-grid text-center">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-title text-center wow fadeIn">
                      <h3>Resources</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        Pick one of the roadmaps to get started.
                      </p>
                    </div>
                  </div>
                </div>
                <div  className="row love-row wow fadeIn">
                  <div onClick={()=>history.push('/communication')} className="col-md-4 col-sm-4">
                    <div className="resources-details" data-wow-delay=".2s">
                      <div className="resources-hover"></div>
                      <div  className="resources-main">
                        <i
                          className="fa fa-home resources-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Communication Skills</h3>
                        <h2>Listening - Speaking</h2>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          You will learn about: Presentation, Active listening, Nonverbal communication,
                          Giving/taking feedback.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div onClick={()=>history.push('/softskills')} className="col-md-4 col-sm-4">
                    <div className="resources-details" data-wow-delay=".3s">
                      <div className="resources-hover"></div>
                      <div className="resources-main">
                        <i
                          className="fa fa-graduation-cap resources-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Soft-Skills</h3>
                        <h2>Team Work - Interpersonal Skills</h2>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          You will learn about: Character traits, Attitudes, and Mindsets,
                          as well as social and emotional characteristics.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div onClick={()=>history.push('/resources')} className="col-md-4 col-sm-4">
                    <div className="resources-details" data-wow-delay=".4s">
                      <div className="resources-hover"></div>
                      <div className="resources-main">
                        <i
                          className="fa fa-graduation-cap resources-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Personality Development</h3>
                        <h2>Positive Personality traits</h2>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          You will learn about: Extroversion , Agreeableness, Openness,
                          Conscientiousness, and Neuroticism (aka 'The Big 5')
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- ================================ CONTACT ========================== --> */}

        <div id="contact">
          <div className="contact-content">
            <div className="text-grid">
              <div className="text-grid-main">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 col-sm-12">
                      <div className="main-title text-center wow fadeIn">
                        <h3>Contact Us</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          We are always open to more discussion and ideas. Use the below information
                          to reach out to us regarding your queries and concerns.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-grid">
              <div className="contact-form-details wow fadeIn">
                <div className="container">
                  <div className="row contact-info-row text-center wow fadeIn">
                    <div className="col-md-3 col-sm-6 contact-colamn">
                      <div className="contact-col-info" data-wow-delay=".2s">
                        <i
                          className="fa fa-map-marker contact-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Address</h3>
                        <p>LNMIIT - Jaipur, Rajasthan, India</p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 contact-colamn">
                      <div className="contact-col-info" data-wow-delay=".4s">
                        <i
                          className="fa fa-envelope contact-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Email</h3>
                        <a
                          href="mailto:contact.usha.kanoongo@lnmiit.ac.in"
                          style={{
                            color: "black",
                            textDecoration: "none",
                            fontSize: "17px",
                          }}
                        >
                          usha.kanoongo@lnmiit.ac.in
                        </a>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 contact-colamn">
                      <div className="contact-col-info" data-wow-delay=".6s">
                        <i
                          className="fa fa-mobile contact-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Phone</h3>
                        <a
                          href="tel:9950656775"
                          style={{
                            color: "black",
                            textDecoration: "none",
                            fontSize: "17px",
                          }}
                        >
                          +91 9950656775
                        </a>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 contact-colamn">
                      <div className="contact-col-info" data-wow-delay=".6s">
                        <i
                          className="fa fa-television contact-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Office</h3>
                        <p>Extension No. 1103</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <Footer />
      </div>
    </React.StrictMode>
  );
};


export default Home;

