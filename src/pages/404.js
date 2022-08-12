import * as React from "react";
import 'bulma/css/bulma.min.css';
import '../styles/global.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { graphql } from "gatsby";


// markup
const NotFoundPage = ({data}) => {
  const { businessInfo, title, description } = data.site.siteMetadata;
  return (<div>
      <Navbar businessInfo={businessInfo} title={title} description={description}/>
      <div className="content">
        <h1>Page Not Found</h1>
        <p>Please try any of the links below.</p>
      </div>
      <Footer></Footer>
    </div>
  )
}

export const query = graphql`
  query ErrorPageQuery {
    site {
      siteMetadata {
        title
        description
        businessInfo {
          businessLogo
          phoneNumber
        }
      }
    }
  }
`

export default NotFoundPage
