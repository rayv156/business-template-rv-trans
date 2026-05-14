import * as React from "react"
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faHandshake, faFileContract } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { graphql } from "gatsby";
import '../styles/global.css';
import companyLogo from '../images/RV_TRANS_LLC_Logo_transparent.png';
import droneVideo from '../images/highway-drone.mp4';
import heroPoster from '../images/trucking-image.jpg';

config.autoAddCss = false;

const IndexPage = ({data}) => {
  const { businessInfo, title, description } = data.site.siteMetadata;

  return (
    <>
      <Navbar businessInfo={businessInfo} title={title} description={description} />

      {/* Hero */}
      <section className="hero-section">
        <video className="hero-video" autoPlay muted loop playsInline poster={heroPoster}>
          <source src={droneVideo} type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <div className="hero-content">
          <img src={companyLogo} alt="RV Trans LLC Logo" className="logo-on-dark" style={{width: '220px', marginBottom: '1.5rem'}} />
          <span className="hero-title">Moving Freight,<br />Building Trust</span>
          <span className="hero-subtitle">
            Your reliable logistics partner in Laredo, TX — connecting shippers and carriers
            with integrity since 2018.
          </span>
          <div className="hero-cta-group">
            <a href="/contact" className="btn-primary">Get a Quote</a>
            <a href="/about" className="btn-outline">Learn More</a>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="stats-bar">
        <div className="stat-item">
          <span className="stat-number">100</span>
          <span className="stat-label">DAT Credit Score</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">35+</span>
          <span className="stat-label">Years of Experience</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">24/7</span>
          <span className="stat-label">Dispatch Support</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">2018</span>
          <span className="stat-label">Established</span>
        </div>
      </div>

      {/* Services */}
      <section className="site-section">
        <span className="section-title">What We Offer</span>
        <hr className="section-divider" />
        <span className="section-subtitle">Full-service freight brokerage built on relationships and results.</span>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <FontAwesomeIcon icon={faTruck} />
            </div>
            <h3>Transportation</h3>
            <p>Domestic freight transport with reliable carriers, on-time pickups, and end-to-end coordination.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <FontAwesomeIcon icon={faFileContract} />
            </div>
            <h3>Import &amp; Export</h3>
            <p>Cross-border logistics expertise connecting US and Mexico markets through our Laredo, TX gateway.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <FontAwesomeIcon icon={faHandshake} />
            </div>
            <h3>Freight Brokerage</h3>
            <p>Matching shippers with the best carriers at competitive rates — backed by a perfect 100 credit score on DAT.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="site-section is-light">
        <span className="section-title">What Our Partners Say</span>
        <hr className="section-divider" />
        <span className="section-subtitle">Trusted by carriers and shippers across the region.</span>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-quote-mark">"</div>
            <p className="testimonial-text">
              Working with RV TRANS LLC these past 2 years has been a pleasure. RV has great customer service,
              great leadership, but above all they pay their freight bills on time — as to why they have a
              100 credit score on the DAT load board. Moving freight for them is always welcomed.
            </p>
            <div className="testimonial-author">Javier Morales Jr</div>
            <div className="testimonial-role">Terminal Manager — MAG International Transport LLC</div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-quote-mark">"</div>
            <p className="testimonial-text">
              For the past 3 years we have been working with RV TRANS LLC without any incidents or issues.
              The customer service is excellent, loads are fairly priced and always paid on time.
              Their dispatching hours are 24/7 — always kind and approachable.
            </p>
            <div className="testimonial-author">Esther Oviedo</div>
            <div className="testimonial-role">Imperio Transport, Inc.</div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-quote-mark">"</div>
            <p className="testimonial-text">
              As long as they've handled my freight deliveries, my shipments have been picked up and delivered
              on time without any issue. I recommend you trust the company I'm now proud to call my
              permanent logistics provider.
            </p>
            <div className="testimonial-author">Matt B</div>
            <div className="testimonial-role">Customer</div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export function Head({data}) {
  const { title, description } = data.site.siteMetadata;
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
    </>
  );
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

export default IndexPage;
