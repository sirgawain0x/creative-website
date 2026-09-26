import React from 'react';
import Layout from '@theme/Layout';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export default function Creators() {
  return (
    <Layout 
      title="Creators - Own Your Craft, Own Your IP" 
      description="On Creative TV, keep your revenue and IP. Grow your audience and build a lasting business."
    >
      <div className="creators-page">
        <Container>
          <div className="creators-page__content">
            <div className="creators-page__header">
              <span className="creators-page__tagline">Own Your Craft, Own Your IP</span>
              <h1 className="creators-page__headline">
                Stop Being a Product. <br/>Start Being a Platform.
              </h1>
              <p className="creators-page__subheadline">
                On Creative TV, keep 100% of revenue and your IP. Grow your audience and build a lasting business from your first upload.
              </p>
            </div>

            <div className="creators-page__section">
              <h2 className="creators-page__section-title">What You Can Do (Free Account)</h2>
              <ul className="creators-page__features-list">
                <li className="creators-page__feature-item">
                  <FontAwesomeIcon icon={faCheckCircle} className="creators-page__check-icon" />
                  <span>
                    <strong>Reliable Hosting:</strong> Upload video, podcasts, and films safely.
                  </span>
                </li>
                <li className="creators-page__feature-item">
                  <FontAwesomeIcon icon={faCheckCircle} className="creators-page__check-icon" />
                  <span>
                    <strong>IP Management:</strong> Register work and secure your rights.
                  </span>
                </li>
                <li className="creators-page__feature-item">
                  <FontAwesomeIcon icon={faCheckCircle} className="creators-page__check-icon" />
                  <span>
                    <strong>Collaborative Splits:</strong> Split earnings with your team automatically.
                  </span>
                </li>
                <li className="creators-page__feature-item">
                  <FontAwesomeIcon icon={faCheckCircle} className="creators-page__check-icon" />
                  <span>
                    <strong>Launch Your meToken:</strong> Launch your meToken and grow a supporter community.
                  </span>
                </li>
              </ul>
            </div>

            <div className="creators-page__section creators-page__section--upgrade">
              <h2 className="creators-page__section-title">
                Upgrade to the Creator Membership ($10/Month)
              </h2>
              <ul className="creators-page__features-list">
                <li className="creators-page__feature-item">
                  <FontAwesomeIcon icon={faCheckCircle} className="creators-page__check-icon" />
                  <span>
                    <strong>Go Live:</strong> Stream live with Livepeer.
                  </span>
                </li>
                <li className="creators-page__feature-item">
                  <FontAwesomeIcon icon={faCheckCircle} className="creators-page__check-icon" />
                  <span>
                    <strong>The AI Agent Factory:</strong> AI agents that run business tasks for you.
                  </span>
                </li>
                <li className="creators-page__feature-item">
                  <FontAwesomeIcon icon={faCheckCircle} className="creators-page__check-icon" />
                  <span>
                    <strong>Prediction Markets:</strong> Fans call your next milestone and ride along with your journey.
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
