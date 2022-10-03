import * as React from "react"
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import chrisImage from '../../src/images/IMG_1041.png'
import { faPeopleArrowsLeftRight, faBusinessTime, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { graphql } from "gatsby";

// markup
const IndexPage = ({data}) => {
  const { businessInfo, title, description } = data.site.siteMetadata;
  return (<>
    <main className="parallax">
      <Navbar businessInfo={businessInfo} title={title} description={description}/>
      <Hero businessInfo={businessInfo}/>
      <div className="container" style={{gap: '1rem'}}>
        <div className="tile is-child box">
          <div className="content" style={{textAlign: 'center'}}>
          <p className="title">Honoring Breast Cancer Survivors</p>
        <img src={chrisImage} alt="cancer survivor image" style={{width: '300px'}}/>
        </div>
        </div>
      <div className="tile is-ancestor">
      <div className="tile is-parent">
    <article className="tile is-child box">
      <div className="content">
        <p className="title">What we offer</p>
        <div className="subtitle">
       
        <h1 className="title is-size-4">
          <FontAwesomeIcon icon={faPeopleArrowsLeftRight} size="lg" />
          <div>Personalized services</div>
          </h1>
      
      <hr></hr>
        <h1 className="title is-size-4">
        <FontAwesomeIcon icon={faBusinessTime} size="lg" />
          <div>Over 35 years of experience</div>
          </h1>
      
      <hr></hr>
      
        <h1 className="title is-size-4">
        <FontAwesomeIcon icon={faCircleCheck} size="lg" />
          <div>100 freight broker credit score</div>
          </h1>
      
        </div>
      </div>
    </article>
  </div>
  <div className="tile is-vertical is-6">
    <div className="tile">
      <div className="tile is-parent is-vertical">
        <article className="tile is-child box">
        <p className="title">Testimonials</p>
          <p>"Working with RV TRANS these past 2 years and still going has been a pleasure to work with, and the relationship that MAG INTERNATIONAL TRANSPORT LLC has proven growth to our company. RV has great customer service, great leadership, but above all they pay their freight bills on time as to why they have a 100 credit score on DAT load board, that is why moving freight for them is always welcomed.  Thank you Mr. Roy Velasquez for being a valued customer."</p>
          <p style={{textAlign: 'right'}}>-Javier Morales Jr</p>
          <p style={{textAlign: 'right'}}>MAG INTERNATIONAL TRANSPORT LLC</p>
          <p style={{textAlign: 'right'}}>Terminal Manager</p>
        </article>
        <article className="tile is-child box">
          <p>"For the past 3 years we have been working with RV TRANS without any incidents or issues. The Customer Service is excellent. The loads are fairly priced and always paid on time. Their dispatching hours are 24/7, always kind and approachable which in this kind of Industry is definitely a plus."</p>
          <p style={{textAlign: 'right'}}>-Esther Oviedo</p>
          <p style={{textAlign: 'right'}}>Imperio Transport, Inc.</p>
        </article>
      </div>
     
    </div>
    
  </div>
  
</div>
      
      </div>
      <Footer />
    </main>
    </>
  )
}

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        title
        description
        businessInfo {
          phoneNumber
          businessLogo
          name
          reviews {
            name
            message
            title
          }
        }
      }
    }
  }
`

export default IndexPage
