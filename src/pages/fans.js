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
      title="Fans - From Viewer to Superfan" 
      description="Discover creators on Creative Platform, hold meTokens for exclusive access, and take part in the community."
    >
      <div className="fans-page">
        <Container>
          <div className="fans-page__content">
            <div className="fans-page__header">
              <span className="fans-page__tagline">From Viewer to Superfan</span>
              <h1 className="fans-page__headline">
                Don't Just Watch. <br/>Show Up for Creators You Love.
              </h1>
              <p className="fans-page__subheadline">
                Discover new work across Creative Platform, back creators you believe in, and unlock member-only streams and premium content on Creative TV.
              </p>
            </div>

            <div className="fans-page__section">
              <h2 className="fans-page__section-title">What You Can Do (Free Account)</h2>
              <ul className="fans-page__features-list">
                <li className="fans-page__feature-item">
                  <FontAwesomeIcon icon={faCheckCircle} className="fans-page__check-icon" />
                  <span>
                    <strong>Discovery:</strong> Explore shows, music, podcasts, and live streams on Creative TV.
                  </span>
                </li>
                <li className="fans-page__feature-item">
                  <FontAwesomeIcon icon={faCheckCircle} className="fans-page__check-icon" />
                  <span>
                    <strong>Collect:</strong> Hold a creator&apos;s meToken to back them and unlock exclusive live streams and premium content.
                  </span>
                </li>
                <li className="fans-page__feature-item">
                  <FontAwesomeIcon icon={faCheckCircle} className="fans-page__check-icon" />
                  <span>
                    <strong>Participate:</strong> Comment on the shows and music you love and join the conversation in the feed. Take part in Prediction Markets—call the next milestone and ride along with a creator&apos;s journey.
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
                    <strong>Pro Tools:</strong> Deeper analytics and fan tools to follow the creators you care about.
                  </span>
                </li>
                <li className="fans-page__feature-item">
                  <FontAwesomeIcon icon={faCheckCircle} className="fans-page__check-icon" />
                  <span>
                    <strong>Exclusive Opportunities:</strong> Early access to new releases, drops, and community programs.
                  </span>
                </li>
                <li className="fans-page__feature-item">
                  <FontAwesomeIcon icon={faCheckCircle} className="fans-page__check-icon" />
                  <span>
                    <strong>Ecosystem Access:</strong> Expanded membership perks and a voice in Creative Organization DAO governance.
                  </span>
                </li>
              </ul>
              <p className="fans-page__disclaimer">
                Holding a meToken is for access and community participation—not an investment or ownership stake in a creator.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
}
