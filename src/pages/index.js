import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import servicesImage from '../images/personalized_services.jpg'
import experienceImage from '../images/experience.jpg'
import creditImage from '../images/invoice.jpg'
import { faPeopleArrowsLeftRight, faBusinessTime, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { graphql } from "gatsby";

// markup
const IndexPage = ({data}) => {
  const { businessInfo, title, description } = data.site.siteMetadata;
  return (<>
    <main className="parallax">
      <Navbar businessInfo={businessInfo} title={title} description={description}/>
      <Hero businessInfo={businessInfo}/>
      <div className="container">
        <div className="card">
  <div className="card-image">
    <figure className="image is-4by3">
      <img src={servicesImage} alt="Placeholder image" />
    </figure>
  </div>
  <div className="card-content">
    <p className="title is-4">
    Personalized services
    </p>
  </div>
</div>

<div className="card">
  <div className="card-image">
    <figure className="image is-4by3">
      <img src={experienceImage} alt="Placeholder image" />
    </figure>
  </div>
  <div className="card-content">
    <p className="title is-4">
    Over 35 years of experience
    </p>
  </div>
</div>

<div className="card">
  <div className="card-image">
    <figure className="image is-4by3">
      <img src={creditImage} alt="Placeholder image" />
    </figure>
  </div>
  <div className="card-content">
    <p className="title is-4">
    100 freight broker credit score
    </p>
  </div>
</div>
   
 
        <article className="tile is-child box">
        <p className="title">Testimonials</p>
          <p>"Working with RV TRANS these past 2 years and still going has been a pleasure to work with, and the relationship that MAG INTERNATIONAL TRANSPORT LLC has proven growth to our company. RV has great customer service, great leadership, but above all they pay their freight bills on time as to why they have a 100 credit score on DAT load board, that is why moving freight for them is always welcomed.  Thank you Mr. Roy Velasquez for being a valued customer."</p>
          <p className="right-align-text">-Javier Morales Jr</p>
          <p className="right-align-text">MAG INTERNATIONAL TRANSPORT LLC</p>
          <p className="right-align-text">Terminal Manager</p>
        </article>
        <article className="tile is-child box">
          <p className="right-align-text">"For the past 3 years we have been working with RV TRANS without any incidents or issues. The Customer Service is excellent. The loads are fairly priced and always paid on time. Their dispatching hours are 24/7, always kind and approachable which in this kind of Industry is definitely a plus."</p>
          <p className="right-align-text">-Esther Oviedo</p>
          <p className="right-align-text">Imperio Transport, Inc.</p>
        </article>
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
        siteUrl
        businessInfo {
          phoneNumber
          businessLogo
          name
          address
          email
          reviews {
            name
            message
            title
            company
          }
        }
      }
    }
  }
`

export default IndexPage
