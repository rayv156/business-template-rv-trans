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
  const { businessInfo } = data.site.siteMetadata;
  return (
    <main >
      <Navbar businessInfo={businessInfo}/>
      <Hero businessInfo={businessInfo}/>
      <div className="columns">
      <div className="container">
      <section className="section">
        <h1 className="title">
          <FontAwesomeIcon icon={faPeopleArrowsLeftRight} size="lg" />
          Personalized services
          </h1>
      </section>
      <hr></hr>
      <section className="section">
        <h1 className="title">
        <FontAwesomeIcon icon={faBusinessTime} size="lg" />
          Over 35 years of experience
          </h1>
      </section>
      <hr></hr>
      <section className="section">
        <h1 className="title">
        <FontAwesomeIcon icon={faCircleCheck} size="lg" />
          100 freight broker credit score
          </h1>
      </section>
      </div>
      </div>
        {/* {businessInfo.reviews.map((review, index)=> (
          
          <div className="card" key={index}>
  <div className="card-content">
    <p className="title">
      {review.message}
    </p> 
    <p className="subtitle">
      {review.name}/{review.title}
        </p>
  <footer className="card-footer">
    <p className="card-footer-item">
      <span>
        View on <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
      </span>
    </p>
    <p className="card-footer-item">
      <span>
        Share on <a href="#">Facebook</a>
      </span>
    </p>
  </footer>
</div>
          ))}
</div> */}
      <Footer />
    </main>
  )
}

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
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
