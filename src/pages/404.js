import * as React from "react";
import 'bulma/css/bulma.min.css';
import '../styles/global.css';
import Navbar from "../components/Navbar";
import Seo from "../components/Seo";
import Footer from "../components/Footer";
import { graphql } from "gatsby";


// markup
const NotFoundPage = ({data}) => {
  const { businessInfo } = data.site.siteMetadata;
  return (<div>
      <Navbar businessInfo={businessInfo}/>
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

export function Head({ data }) {
  const { title, description } = data.site.siteMetadata;
  return <Seo title={title} description={description} />;
}

export default NotFoundPage
