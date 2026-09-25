import React from 'react';
import Layout from '@theme/Layout';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Fans() {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <Layout 
      title="Fans - From Viewer to Professional" 
      description="The Creative platform blurs the line between audience and owner. Support the artists you love with professional tools designed for the Web3 creative economy."
    >
      <div className="fans-page">
        <Container>
          <div className="fans-page__content">
            <div className="fans-page__header">
              <span className="fans-page__tagline">From Viewer to Professional</span>
              <h1 className="fans-page__headline">
                Don't Just Watch the Future. <br/>Own a Piece of It.
              </h1>
              <p className="fans-page__subheadline">
                The Creative platform blurs the line between audience and owner. Support the artists you love with professional tools designed for the Web3 creative economy.
              </p>
            </div>

            <div className="fans-page__section">
              <h2 className="fans-page__section-title">What You Can Do (Free Account)</h2>
              <ul className="fans-page__features-list">
                <li className="fans-page__feature-item">
                  <FontAwesomeIcon icon={faCheckCircle} className="fans-page__check-icon" />
                  <span>
                    <strong>Discovery:</strong> Explore original onchain media before it goes mainstream.
                  </span>
                </li>
                <li className="fans-page__feature-item">
                  <FontAwesomeIcon icon={faCheckCircle} className="fans-page__check-icon" />
                  <span>
                    <strong>Collect:</strong> Support creators by collecting live clips and trading tokens.
                  </span>
                </li>
                <li className="fans-page__feature-item">
                  <FontAwesomeIcon icon={faCheckCircle} className="fans-page__check-icon" />
                  <span>
                    <strong>Participate:</strong> Join the conversation in Discord and share your favorite content.
                  </span>
                </li>
              </ul>
            </div>

            <div className="fans-page__section fans-page__section--upgrade">
              <h2 className="fans-page__section-title">
                Upgrade to the Professional Membership ($100/Month)
              </h2>
              <ul className="fans-page__features-list">
                <li className="fans-page__feature-item">
                  <FontAwesomeIcon icon={faCheckCircle} className="fans-page__check-icon" />
                  <span>
                    <strong>Pro Tools:</strong> Access advanced analytics and tools designed for the Web3 creative economy.
                  </span>
                </li>
                <li className="fans-page__feature-item">
                  <FontAwesomeIcon icon={faCheckCircle} className="fans-page__check-icon" />
                  <span>
                    <strong>Exclusive Opportunities:</strong> Get first-look access to new token launches, IP drops, and DAO-specific opportunities.
                  </span>
                </li>
                <li className="fans-page__feature-item">
                  <FontAwesomeIcon icon={faCheckCircle} className="fans-page__check-icon" />
                  <span>
                    <strong>Ecosystem Access:</strong> Unlock unique roles and governance influence within the Creative Organization DAO.
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
