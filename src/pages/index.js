import * as React from "react"
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import 'bulma/css/bulma.min.css';
import '../styles/global.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleArrowsLeftRight, faBusinessTime, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { graphql } from "gatsby";

// markup
const IndexPage = ({data}) => {
  const { businessInfo, title, description } = data.site.siteMetadata;
  return (<>
    <main >
      <Navbar businessInfo={businessInfo} title={title} description={description}/>
      <Hero businessInfo={businessInfo}/>
      <div className="container">
      <section className="section">
        <h1 className="title">
          <FontAwesomeIcon icon={faPeopleArrowsLeftRight} size="lg" />
          <div>Personalized services</div>
          </h1>
      </section>
      <hr></hr>
      <section className="section">
        <h1 className="title">
        <FontAwesomeIcon icon={faBusinessTime} size="lg" />
          <div>Over 35 years of experience</div>
          </h1>
      </section>
      <hr></hr>
      <section className="section">
        <h1 className="title">
        <FontAwesomeIcon icon={faCircleCheck} size="lg" />
          <div>100 freight broker credit score</div>
          </h1>
      </section>
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
