/* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/

import React, { Component, useRef } from "react";
import PropTypes from "prop-types";
// import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { Helmet } from "react-helmet";

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

        <div ref={mainContainer} className="main-container bg-black">
          <div className="logo-container">
            <img src={"tresbien.svg"}/>
          </div>

          <div className="wrapper-for-responsive">

            <div className="description-container">
              <div className="wrapper">
                <div className="decentralized-wrapper">
                  <span className="monument-extended-medium fs-18 fc-beige uppercase">decentralized</span>
                  <img src={"lines.svg"}/>
                </div>
                <span>&nbsp;</span>
                <span>&nbsp;</span>
                <span className="monument-extended-medium fs-18 fc-beige">creativity</span>
              </div>
            </div>

            <div className="job-container">
              <div className="number bg-black">
                <img className={"visible"} src={"01.svg"}/>
                <img className={"hover"} src={"01-red.svg"}/>
              </div>
              <div className="job">
                <p className="fc-beige fs-18 monument-extended-medium">Digital content</p>
                <p className="fc-beige fs-18 monument-extended-medium">Production</p>
              </div>
            </div>

            <div className="scroll-down">
              <span className="fs-30 fc-red monument-extended-medium">Scroll down</span>
              <img src={"arrow-red.svg"}/>
            </div>

          </div>

          <div className="about-container">
            <div className="number bg-black">
              <img className={"visible"} src={"02.svg"}/>
              <img className={"hover"} src={"02-red.svg"}/>
            </div>
            <div className="header">
              <h1 className="fs-46 fc-red monument-extended-book uppercase">hey there</h1>
            </div>
            <div className="mid-section">
        <span className="monument-extended-book fs-16 fc-beige">
          We are a decentralized creative agency. Storytelling is our superpower.
          And we leverage it to build narratives that cross all funnel segments to grow brands, both big and small.
        </span>
            </div>
            <div className="bottom">
              <div className="who-we-are">
                <div className={"rotate-container"}>
                  <span className="fs-18 fc-black monument-extended-medium">Who we are</span>
                </div>
                <img src={"arrow.svg"}/>

                <div className="arrows">
                  <img src={"arrow.svg"}/>
                  <img src={"arrow.svg"}/>
                  <img src={"arrow.svg"}/>
                  <img src={"arrow.svg"}/>
                </div>
              </div>
            </div>
          </div>

          <div className="we-do-container">
            <div className="number bg-black">
              <img className={"visible"} src={"03.svg"}/>
              <img className={"hover"} src={"03-red.svg"}/>
            </div>
            <div className="rotated">
              <div className="p-wrapper">
                <p className="fs-16 fc-beige monument-extended-book">
                  Video, Photo, Design, Writing, Strategy, Branding,
                  Campaigns, Performance
                </p>

                <ul>
                  <li className="fs-16 fc-beige monument-extended-book">Video</li>
                  <li className="fs-16 fc-beige monument-extended-book">Photo</li>
                  <li className="fs-16 fc-beige monument-extended-book">Design</li>
                  <li className="fs-16 fc-beige monument-extended-book">Writing</li>
                  <li className="fs-16 fc-beige monument-extended-book">Strategy</li>
                  <li className="fs-16 fc-beige monument-extended-book">Branding</li>
                  <li className="fs-16 fc-beige monument-extended-book">Campaigns</li>
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
                <img className={"visible"} src={"04.svg"}/>
                <img className={"hover"} src={"04-red.svg"}/>
              </div>
              <div className="line"/>
              <div className="contact-us">
                <div className="contact">
                  <div className="inner-container">
                    <p className="fs-18 fc-black monument-extended-medium">Contact us</p>
                    <div className="arrows">
                      <img src={"arrow.svg"}/>
                      <img src={"arrow.svg"}/>
                      <img src={"arrow.svg"}/>
                      <img src={"arrow.svg"}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="talk-container">
              <div className="number bg-black">
                <img className={"visible"} src={"05.svg"}/>
                <img className={"hover"} src={"05-red.svg"}/>
              </div>

              <div className="inner-container">
                <p className="monument-extended-book fs-60 fc-beige">let's talk</p>

                <div className="mail-container">
                  <span className="fs-18 fc-beige monument-extended-book">hello@tresbien.agency</span>
                  <img src={"letter.svg"}/>
                </div>
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

  constructor(props) {
    super(props);
  }


  componentDidMount() {
  }

  render() {

    return <div id="mainContainer" className="main-container bg-black">

      <div className="logo-container">
        <img src={"tresbien.svg"}/>
      </div>

      <div className="wrapper-for-responsive">

        <div className="description-container">
          <div className="wrapper">
            <div className="decentralized-wrapper">
              <span className="monument-extended-medium fs-18 fc-beige uppercase">decentralized</span>
              <img src={"lines.svg"}/>
            </div>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span className="monument-extended-medium fs-18 fc-beige">creativity</span>
          </div>
        </div>

        <div className="job-container">
          <div className="number bg-black">
            <img className={"visible"} src={"01.svg"}/>
            <img className={"hover"} src={"01-red.svg"}/>
          </div>
          <div className="job">
            <p className="fc-beige fs-18 monument-extended-medium">Digital content</p>
            <p className="fc-beige fs-18 monument-extended-medium">Production</p>
          </div>
        </div>

        <div className="scroll-down">
          <span className="fs-30 fc-red monument-extended-medium">Scroll down</span>
          <img src={"arrow-red.svg"}/>
        </div>

      </div>

      <div className="about-container">
        <div className="number bg-black">
          <img className={"visible"} src={"02.svg"}/>
          <img className={"hover"} src={"02-red.svg"}/>
        </div>
        <div className="header">
          <h1 className="fs-46 fc-red monument-extended-book uppercase">hey there</h1>
        </div>
        <div className="mid-section">
        <span className="monument-extended-book fs-16 fc-beige">
          We are a decentralized creative agency. Storytelling is our superpower.
          And we leverage it to build narratives that cross all funnel segments to grow brands, both big and small.
        </span>
        </div>
        <div className="bottom">
          <div className="who-we-are">
            <div className={"rotate-container"}>
              <span className="fs-18 fc-black monument-extended-medium">Who we are</span>
            </div>
            <img src={"arrow.svg"}/>

            <div className="arrows">
              <img src={"arrow.svg"}/>
              <img src={"arrow.svg"}/>
              <img src={"arrow.svg"}/>
              <img src={"arrow.svg"}/>
            </div>
          </div>
        </div>
      </div>

      <div className="we-do-container">
        <div className="number bg-black desktop">
          <img className={"visible"} src={"03.svg"}/>
          <img className={"hover"} src={"03-red.svg"}/>
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

            <div className="number bg-black responsive">
              <img className={"visible"} src={"03.svg"}/>
              <img className={"hover"} src={"03-red.svg"}/>
            </div>
          </div>
        </div>

      </div>

      <div className="contact-wrapper">
        <div className="contact-container">
          <div className="number bg-black">
            <img className={"visible"} src={"04.svg"}/>
            <img className={"hover"} src={"04-red.svg"}/>
          </div>
          <div className="line"/>
          <div className="contact-us">
            <div className="contact">
              <div className="inner-container">
                <p className="fs-18 fc-black monument-extended-medium">Contact us</p>
                <div className="arrows">
                  <img src={"arrow.svg"}/>
                  <img src={"arrow.svg"}/>
                  <img src={"arrow.svg"}/>
                  <img src={"arrow.svg"}/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="talk-container">
          <div className="number bg-black">
            <img className={"visible"} src={"05.svg"}/>
            <img className={"hover"} src={"05-red.svg"}/>
          </div>

          <div className="inner-container">
            <p className="monument-extended-book fs-60 fc-beige">let's talk</p>

            <a className="mail-container" href={"mailto:hello@tresbien.agency"}>
              <span className="fs-18 fc-beige monument-extended-book">hello@tresbien.agency</span>
              {/*<img src={"letter.svg"}/>*/}
            </a>
          </div>
        </div>
      </div>

    </div>;

    // )}
  }
}
