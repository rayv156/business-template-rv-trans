import * as React from "react";
import { Link } from "gatsby";
import 'bulma/css/bulma.min.css';
import '../styles/global.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { graphql } from "gatsby";

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

// markup
const NotFoundPage = ({data}) => {
  const { businessInfo, title, description } = data.site.siteMetadata;
  return (
    <main style={pageStyles}>
      <Navbar businessInfo={businessInfo} title={title} description={description}/>
      <div className="content">
        <h1>Page Not Found</h1>
        <p>Please try any of the links below.</p>
      </div>
      <Footer></Footer>
    </main>
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
