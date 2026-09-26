import React from 'react';
import Layout from '@theme/Layout';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Brands() {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <Layout 
      title="Brands - Authentic Connection at Scale" 
      description="Partner with innovative creators for authentic campaigns across Creative Platform."
    >
      <div className="brands-page">
        <Container>
          <div className="brands-page__content">
            <div className="brands-page__header">
              <span className="brands-page__tagline">Authentic Connection at Scale</span>
              <h1 className="brands-page__headline">
                Advertise Differently. <br/>Collaborate Deeply.
              </h1>
              <p className="brands-page__subheadline">
                Move past &quot;ads&quot; and into &quot;alliances.&quot; Connect with creators and audiences in a transparent, partnership-first environment.
              </p>
            </div>

            <div className="brands-page__section">
              <h2 className="brands-page__section-title">The Brand Experience</h2>
              <ul className="brands-page__features-list">
                <li className="brands-page__feature-item">
                  <FontAwesomeIcon icon={faCheckCircle} className="brands-page__check-icon" />
                  <span>
                    <strong>Clear Reporting:</strong> Track campaign spend and performance with shared reporting you can review with your team.
                  </span>
                </li>
                <li className="brands-page__feature-item">
                  <FontAwesomeIcon icon={faCheckCircle} className="brands-page__check-icon" />
                  <span>
                    <strong>Direct Access:</strong> Work with creators through streamlined collaboration tools and clear agreement terms.
                  </span>
                </li>
              </ul>
            </div>

            <div className="brands-page__section brands-page__section--upgrade">
              <h2 className="brands-page__section-title">
                Brand Membership ($1,000/Month)
              </h2>
              <ul className="brands-page__features-list">
                <li className="brands-page__feature-item">
                  <FontAwesomeIcon icon={faCheckCircle} className="brands-page__check-icon" />
                  <span>
                    <strong>Custom Collaboration Campaigns:</strong> Work with our team to match your brand with the right creatives for high-impact, authentic content.
                  </span>
                </li>
                <li className="brands-page__feature-item">
                  <FontAwesomeIcon icon={faCheckCircle} className="brands-page__check-icon" />
                  <span>
                    <strong>Native Advertising:</strong> Gain premium placement and advertising opportunities across Creative Platform products, including Creative TV.
                  </span>
                </li>
                <li className="brands-page__feature-item">
                  <FontAwesomeIcon icon={faCheckCircle} className="brands-page__check-icon" />
                  <span>
                    <strong>Verified Partnership:</strong> A &quot;Certified Brand&quot; status that builds trust with our creator and fan community.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
}
