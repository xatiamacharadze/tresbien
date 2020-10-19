/* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/

import React, { Component, useRef } from "react";
import PropTypes from "prop-types";
// import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { Helmet } from "react-helmet"
import { TweenMax } from "gsap";

import "../styles/index.sass";

const TemplateWrapper1 = ({ children }) => {

  // const [showMenu, setShowMenu] = useState(false);
  const [container, nameContainer, mtContainer, mainContainer] = useRef();

  return (
    <StaticQuery
      query={graphql`
				query LayoutQuery {
					datoCmsSite {
						globalSeo {
							siteName
						}
						faviconMetaTags {
							...GatsbyDatoCmsFaviconMetaTags
						}
					}
					datoCmsHome {
						seoMetaTags {
							...GatsbyDatoCmsSeoMetaTags
						}
						introTextNode {
							childMarkdownRemark {
								html
							}
						}
						copyright
					}
					allDatoCmsSocialProfile(sort: { fields: [position], order: ASC }) {
						edges {
							node {
								profileType
								url
							}
						}
					}
				}
			`}

      render={data => (

        <div className="main-container bg-black">

          <div className="logo-container">
            <img src="img/tresbien.svg"/>
          </div>

          <div className="wrapper-for-responsive">

            <div className="description-container">
              <div className="wrapper">
                <div className="decentralized-wrapper">
                  <span className="monument-extended-medium fs-18 fc-beige uppercase">decentralized</span>
                </div>
                <span>&nbsp;</span>
                <span>&nbsp;</span>
                <span className="monument-extended-medium fs-18 fc-beige">creativity</span>
              </div>
            </div>

            <div className="job-container">
              <div className="number bg-black">
                <img src="img/01.svg"/>
              </div>
              <div className="job">
                <p className="fc-beige fs-18 monument-extended-medium">Digital content</p>
                <p className="fc-beige fs-18 monument-extended-medium">Production</p>
              </div>
            </div>

            <div className="scroll-down">
              <span className="fs-30 fc-red monument-extended-book">Scroll down</span>
              <img src="img/arrow-red.svg"/>
            </div>

          </div>

          <div className="about-container">
            <div className="number bg-black">
              <img src="img/02.svg"/>
            </div>
            <div className="header">
              <h1 className="fs-46 fc-red monument-extended-book uppercase">hey there.</h1>
            </div>
            <div className="mid-section">
        <span className="monument-extended-book fs-16 fc-beige">
          We are TRES BIEN, a fully digital and highly scalable agency. Our work is powered by a global family of creatives.
          Storytelling is our communal superpower. And we leverage it to build narratives that cross all
          funnel segments to grow brands, both big and small.
        </span>
            </div>
            <div className="bottom" style="background-image: url('img/bg2.jpg')">
              <div className="who-we-are">
                <span className="fs-18 fc-black monument-extended-bold">Who we are</span>
                <img src="img/arrow.svg"/>
              </div>
            </div>
          </div>

          <div className="we-do-container">
            <div className="number bg-black">
              <img src="img/03.svg"/>
            </div>
            <div className="rotated">
              <div className="p-wrapper">
                <p className="fs-16 fc-beige monument-extended-book">
                  Video, Photo, Design, Writing, Strategy, Branding, Social
                  Campaigns, Performance
                </p>

                <ul>
                  <li className="fs-16 fc-beige monument-extended-book">Video</li>
                  <li className="fs-16 fc-beige monument-extended-book">Photo</li>
                  <li className="fs-16 fc-beige monument-extended-book">Design</li>
                  <li className="fs-16 fc-beige monument-extended-book">Writing</li>
                  <li className="fs-16 fc-beige monument-extended-book">Strategy</li>
                  <li className="fs-16 fc-beige monument-extended-book">Branding</li>
                  <li className="fs-16 fc-beige monument-extended-book">Social Campaigns</li>
                  <li className="fs-16 fc-beige monument-extended-book">Performance</li>
                </ul>
              </div>

              <div className="we-do">
                <span className="uppercase fs-46 fc-red monument-extended-book">we do</span>
              </div>
            </div>

          </div>

          <div className="contact-wrapper">
            <div className="contact-container">
              <div className="number bg-black">
                <img src="img/04.svg"/>
              </div>
              <div className="line"></div>
              <div className="contact-us">
                <div className="contact" style="background-image: url('img/bg1.jpg')">
                  <div className="inner-container">
                    <p className="fs-18 fc-black monument-extended-bold">Contact us</p>
                    <div className="arrows"/>
                      <img src="img/arrow.svg"/>
                        <img src="img/arrow.svg"/>
                          <img src="img/arrow.svg"/>
                            <img src="img/arrow.svg"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="talk-container">
              <div className="number bg-black">
                <img src="img/05.svg"/>
              </div>

              <div className="inner-container">
                <p className="monument-extended-book fs-60 fc-beige">let's talk</p>

                <div className="mail-container">
                  <span className="fs-18 fc-beige monument-extended-book">hello@tresbien.agency</span>
                  <img src="img/letter.svg"/>
                </div>
              </div>
            </div>
          </div>

      )}
    />

  );
};

TemplateWrapper1.propTypes = {
  children: PropTypes.object
};


// export default TemplateWrapper1;
/* eslint-enable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/
// const [container, nameContainer, mtContainer, mainContainer] = useRef();


export default class TemplateWrapper extends Component {

  container = null;
  nameContainer = null;
  mtContainer = null;
  mainContainer = null;

  constructor(props) {
    super(props);
    this.container = React.createRef();
    this.nameContainer = React.createRef();
    this.mtContainer = React.createRef();
    this.mainContainer = React.createRef();
    this.state = {
      open: false
    };
  }

  parallaxIt(e, target, movement) {
    let $this = document.getElementById("container").getBoundingClientRect();

    let relX = e.pageX - $this.left;
    let relY = e.pageY - $this.top;


    TweenMax.to(target, 1, {
      x: (relX - $this.width / 2) / $this.width * movement,
      y: (relY - $this.height / 2) / $this.height * movement
    });
  }

  toggleMenu() {
    this.setState({ open: !this.state.open });
    console.log(this.state.open);
  }

  componentDidMount() {
    document.addEventListener("mousemove", (e) => {
      this.parallaxIt(e, "#nameContainer", 5);
      this.parallaxIt(e, "#mtContainer", -10);
    });

  }

  render() {

    return <div ref={this.mainContainer} id="mainContainer" className="main-container">
      <header>
        <nav className="header-navigation flex-center">
          <div className="nav-left">
            <ul className="header-nav flex-center public-sans-thin bolder fc-black">
              <li className="nav-item">Main</li>
              <li className="nav-item">About me</li>
              <li className="nav-item">Procedures</li>
              <li className="nav-item">Works</li>
            </ul>
          </div>
          <div className="mt-logo bg-white flex-center">
            <span className="emberly-black fs-40 fc-black">MT</span>
          </div>
          <div className="nav-right">
            <ul className="flex-center public-sans-thin bolder fc-black">
              <li className="nav-item">FAQ</li>
              <li className="nav-item bg-white">Contact</li>
            </ul>
          </div>
        </nav>
        <div className="header-responsive">
          <div className="header-responsive-container flex-center bg-white">
            <div className={`burger-menu ${this.state.open ? `open` : ""}`} onClick={() => this.toggleMenu()}>
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
            <div className="mt-logo bg-white flex-center">
              <span className="emberly-black fs-40 fc-black">MT</span>
            </div>
          </div>
          <nav className={`sidebar bg-white ${this.state.open ? `open` : ""}`}>
            <ul className="public-sans-thin fc-black">
              <li className="nav-item">Main</li>
              <li className="nav-item">About me</li>
              <li className="nav-item">Procedures</li>
              <li className="nav-item">Works</li>
              <li className="nav-item">FAQ</li>
              <li className="nav-item contact bg-black fc-white">Contact</li>
              <li className="flex-column fc-black">
                <span className="public-sans-thin bolder">Instagram</span>
                <span className="public-sans-light">@skincare</span>
              </li>
              <li className="flex-column fc-black">
                <span className="public-sans-thin bolder">Facebook</span>
                <span className="public-sans-light">@skincaregeorgia</span>
              </li>
              <li className="flex-column fc-black">
                <span className="public-sans-thin bolder">Mobile</span>
                <span className="public-sans-light">599 98 98 98</span>
              </li>
              <li className="flex-column fc-black">
                <span className="public-sans-thin bolder">Address</span>
                <span className="public-sans-light">Lake Adolphus</span>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section ref={this.container} id="container" className="section-container flex-center">
        <div ref={this.nameContainer} id="nameContainer" className="name-container emberly-black-narrow">
          <span className="name">mariam</span>
          <span className="surname">topuria</span>
        </div>
        <div ref={this.mtContainer} id="mtContainer" className="mt-container">
          <img src={"/mariam_topuria.png"} alt=""/>
        </div>
      </section>
      <footer className="flex-center">
        <div className="footer-section socials">
          <ul className="flex-center">
            <li className="footer-item flex-center-vertically fc-black">
              <span className="public-sans-thin bolder">Instagram</span>
              <span className="public-sans-light">@skincare</span>
            </li>
            <li className="footer-item flex-center-vertically fc-black">
              <span className="public-sans-thin bolder">Facebook</span>
              <span className="public-sans-light">@skincaregeorgia</span>
            </li>
          </ul>
        </div>
        <div className="footer-section contact">
          <ul className="flex-center">
            <li className="footer-item flex-center-vertically fc-black">
              <span className="public-sans-thin bolder">Address</span>
              <span className="public-sans-light">Lake Adolphus</span>
            </li>
            <li className="footer-item flex-center-vertically fc-black">
              <span className="public-sans-thin bolder">Mobile</span>
              <span className="public-sans-light">599 98 98 98</span>
            </li>
          </ul>
        </div>
      </footer>
    </div>;

    // )}
  }
}
