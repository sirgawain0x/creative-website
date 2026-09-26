import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const CreatorsModal = ({ show, onHide }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
      className="creators-modal"
      aria-labelledby="creators-modal-title"
    >
      <Modal.Header className="creators-modal__header">
        <Modal.Title id="creators-modal-title" className="creators-modal__title">
          Own Your Craft, Own Your IP
        </Modal.Title>
        <button
          type="button"
          className="creators-modal__close"
          onClick={onHide}
          aria-label="Close modal"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </Modal.Header>
      <Modal.Body className="creators-modal__body">
        <div className="creators-modal__content">
          <h2 className="creators-modal__headline">
            Stop Being a Product. Start Being a Platform.
          </h2>
          <p className="creators-modal__subheadline">
            On Creative TV, keep 100% of revenue and your IP. Grow your audience and build a lasting business from your first upload.
          </p>

          <div className="creators-modal__section">
            <h3 className="creators-modal__section-title">What You Can Do (Free Account)</h3>
            <ul className="creators-modal__features-list">
              <li className="creators-modal__feature-item">
                <FontAwesomeIcon icon={faCheckCircle} className="creators-modal__check-icon" />
                <span>
                  <strong>Reliable Hosting:</strong> Upload video, podcasts, and films safely.
                </span>
              </li>
              <li className="creators-modal__feature-item">
                <FontAwesomeIcon icon={faCheckCircle} className="creators-modal__check-icon" />
                <span>
                  <strong>IP Management:</strong> Register work and secure your rights.
                </span>
              </li>
              <li className="creators-modal__feature-item">
                <FontAwesomeIcon icon={faCheckCircle} className="creators-modal__check-icon" />
                <span>
                  <strong>Collaborative Splits:</strong> Split earnings with your team automatically.
                </span>
              </li>
              <li className="creators-modal__feature-item">
                <FontAwesomeIcon icon={faCheckCircle} className="creators-modal__check-icon" />
                <span>
                  <strong>Launch Your meToken:</strong> Launch your meToken and grow a supporter community.
                </span>
              </li>
            </ul>
          </div>

          <div className="creators-modal__section creators-modal__section--upgrade">
            <h3 className="creators-modal__section-title">
              Upgrade to the Creator Membership ($10/Month)
            </h3>
            <ul className="creators-modal__features-list">
              <li className="creators-modal__feature-item">
                <FontAwesomeIcon icon={faCheckCircle} className="creators-modal__check-icon" />
                <span>
                  <strong>Go Live:</strong> Go live and stream to your fans.
                </span>
              </li>
              <li className="creators-modal__feature-item">
                <FontAwesomeIcon icon={faCheckCircle} className="creators-modal__check-icon" />
                <span>
                  <strong>The AI Agent Factory:</strong> AI agents that run business tasks for you.
                </span>
              </li>
              <li className="creators-modal__feature-item">
                <FontAwesomeIcon icon={faCheckCircle} className="creators-modal__check-icon" />
                <span>
                  <strong>Prediction Markets:</strong> Fans call your next milestone and ride along with your journey.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CreatorsModal;
