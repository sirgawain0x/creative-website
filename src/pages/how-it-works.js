import React, { useState, useEffect, useRef } from 'react';
import Layout from '@theme/Layout';
import { Container } from 'react-bootstrap';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function HowItWorks() {
  const {siteConfig} = useDocusaurusContext();
  const [isSimpleMode, setIsSimpleMode] = useState(true);
  const [activeStep, setActiveStep] = useState(0);
  const stepsRef = useRef([]);
  const keyRef = useRef(null);
  const pageRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const updateTrackHeight = () => {
      if (trackRef.current && stepsRef.current.length > 0 && pageRef.current) {
        const firstStep = stepsRef.current[0];
        const lastStep = stepsRef.current[stepsRef.current.length - 1];
        const contentElement = pageRef.current.querySelector('.how-it-works-page__content');
        
        if (firstStep && lastStep && contentElement) {
          const firstRect = firstStep.getBoundingClientRect();
          const lastRect = lastStep.getBoundingClientRect();
          const contentRect = contentElement.getBoundingClientRect();
          
          // Calculate center points of first and last steps
          const firstStepCenter = firstRect.top - contentRect.top + (firstRect.height / 2);
          const lastStepCenter = lastRect.top - contentRect.top + (lastRect.height / 2);
          
          // Set track to start at first step center and end at last step center
          trackRef.current.style.top = `${firstStepCenter}px`;
          trackRef.current.style.height = `${lastStepCenter - firstStepCenter}px`;
        }
      }
    };

    // Initial calculation after a short delay to ensure DOM is ready
    const timer = setTimeout(updateTrackHeight, 200);
    window.addEventListener('resize', updateTrackHeight);
    window.addEventListener('scroll', updateTrackHeight);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateTrackHeight);
      window.removeEventListener('scroll', updateTrackHeight);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!pageRef.current) return;

      const scrollPosition = window.scrollY + window.innerHeight / 3;
      const steps = stepsRef.current;
      let newActiveStep = 0;

      steps.forEach((step, index) => {
        if (step) {
          const rect = step.getBoundingClientRect();
          const stepTop = rect.top + window.scrollY;
          const stepBottom = stepTop + rect.height;
          
          if (scrollPosition >= stepTop && scrollPosition < stepBottom) {
            newActiveStep = index;
          } else if (scrollPosition >= stepTop && index === steps.length - 1) {
            newActiveStep = index;
          }
        }
      });

      setActiveStep(newActiveStep);
    };

    const updateKeyPosition = () => {
      if (keyRef.current && stepsRef.current[activeStep] && trackRef.current && pageRef.current) {
        const stepElement = stepsRef.current[activeStep];
        const contentElement = pageRef.current.querySelector('.how-it-works-page__content');
        const firstStep = stepsRef.current[0];
        
        if (stepElement && contentElement && firstStep) {
          const stepRect = stepElement.getBoundingClientRect();
          const contentRect = contentElement.getBoundingClientRect();
          const firstRect = firstStep.getBoundingClientRect();
          
          // Calculate step center relative to content
          const stepCenter = stepRect.top - contentRect.top + (stepRect.height / 2);
          const firstStepCenter = firstRect.top - contentRect.top + (firstRect.height / 2);
          
          // Position key relative to track start (first step center)
          const keyTop = stepCenter - firstStepCenter - 30; // 30px is half the key height
          keyRef.current.style.top = `${Math.max(0, keyTop)}px`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateKeyPosition);
    handleScroll(); // Initial check
    
    // Use requestAnimationFrame for smooth updates
    const rafId = requestAnimationFrame(() => {
      updateKeyPosition();
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateKeyPosition);
      cancelAnimationFrame(rafId);
    };
  }, [activeStep]);

  const toggleMode = () => {
    setIsSimpleMode(!isSimpleMode);
  };

  const stepData = [
    {
      number: 1,
      title: "Join the Movement (Login in Seconds)",
      simple: "Sign in with your email or social account—no complicated crypto setup needed!",
      tech: "Forget seed phrases and complicated setups. Using our Account Kit (Social Auth), you can join the ecosystem using your existing email or social accounts. We use Account Abstraction to create a secure, smart contract-based wallet for you behind the scenes. You get all the power of the blockchain with none of the hassle.",
      protocols: []
    },
    {
      number: 2,
      title: "Choose Your Role (Unlock Your Key)",
      simple: "Pick your role: Creator, Fan, or Brand. Your membership is a key that you own!",
      tech: "Our ecosystem is powered by Unlock Protocol. Your membership isn't just a subscription; it's an NFT Key that you own. You can start for free or upgrade to a specialized role: Creators (the heartbeat of the platform), Professionals/Fans (the fuel for creative growth), or Brands (the partners in cultural innovation).",
      protocols: ["Unlock Protocol"]
    },
    {
      number: 3,
      title: "Create & Protect (Own Your IP)",
      simple: "Upload your videos and get paid. We help you own your content and get credit for your work.",
      tech: "Upload & Stream: Use our decentralized infrastructure (powered by Livepeer) to host music videos, podcasts, and films. Programmable IP: With a single click, register your work on Story Protocol. This turns your content into \"Programmable IP,\" meaning you set the rules for how others can use or remix your work, ensuring you always get credited and paid. AI Enhancement: Step into Creative Pixels, our AI Agent Factory, to generate visuals, sync lyrics, and create cinematic content in real-time.",
      protocols: ["Livepeer", "Story Protocol"]
    },
    {
      number: 4,
      title: "The Economy (Automated Rewards)",
      simple: "Get paid automatically! When you collaborate, money splits instantly. Launch your own token and let fans bet on your success.",
      tech: "Revenue Splits: Collaborating on a project? Our smart contracts automatically split earnings between you and your team the second they hit your wallet. No invoices, no waiting. meTokens: Launch your own personal brand token. As your influence grows, so does your liquid economy. Prediction Markets: Members can use Reality.eth to create \"Future Markets.\" Fans can predict your next big milestone, creating a fun, gamified way to engage and support your career.",
      protocols: ["Reality.eth"]
    },
    {
      number: 5,
      title: "Shape the Future (DAO Governance)",
      simple: "You're not just a user—you're an owner! Vote on what happens next with your CRTV tokens.",
      tech: "Because we are a DAO (Decentralized Autonomous Organization), the community holds the steering wheel. Vote on Proposals: Use your CRTV tokens on Snapshot to vote on platform updates, new features, and treasury allocations. No Central Boss: You aren't just a user; you're a stakeholder in the future of decentralized media.",
      protocols: ["Snapshot"]
    }
  ];

  return (
    <Layout 
      title="How It Works - The Ecosystem" 
      description="Everything you need to create, invest, and grow—all in one place. Creative TV isn't just a streaming site; it's a decentralized media engine powered by the Creative Organization DAO."
    >
      <div className="how-it-works-page" ref={pageRef}>
        <Container>
          <div className="how-it-works-page__content">
            <div className="how-it-works-page__header">
              <h1 className="how-it-works-page__headline">
                The Ecosystem: How It Works
              </h1>
              <p className="how-it-works-page__subheadline">
                Everything you need to create, invest, and grow—all in one place.
              </p>
              <p className="how-it-works-page__intro">
                Creative TV isn't just a streaming site; it's a decentralized media engine powered by the Creative Organization DAO. We've removed the "crypto-friction" so you can focus on the art.
              </p>
              
              <div className="how-it-works-page__toggle">
                <button 
                  className={`how-it-works-page__toggle-btn ${isSimpleMode ? 'active' : ''}`}
                  onClick={toggleMode}
                  aria-label="Explain like I'm 5"
                >
                  Explain like I'm 5
                </button>
                <button 
                  className={`how-it-works-page__toggle-btn ${!isSimpleMode ? 'active' : ''}`}
                  onClick={toggleMode}
                  aria-label="Show me the Tech"
                >
                  Show me the Tech
                </button>
              </div>
            </div>

            <div 
              className="how-it-works-page__visual-track"
              ref={trackRef}
            >
              <div 
                className="how-it-works-page__key"
                ref={keyRef}
                aria-hidden="true"
              >
                🔑
              </div>
            </div>

            {stepData.map((step, index) => (
              <div 
                key={index}
                className={`how-it-works-page__step ${activeStep === index ? 'active' : ''}`}
                ref={el => stepsRef.current[index] = el}
              >
                <div className="how-it-works-page__step-number">
                  <span className="how-it-works-page__step-label">Step</span>
                  <span className="how-it-works-page__step-digit">{step.number}</span>
                </div>
                <div className="how-it-works-page__step-content">
                  <h2 className="how-it-works-page__step-title">
                    {step.title}
                  </h2>
                  <div className="how-it-works-page__step-description">
                    {isSimpleMode ? (
                      <p>{step.simple}</p>
                    ) : (
                      <p>{step.tech}</p>
                    )}
                  </div>
                  {step.protocols.length > 0 && (
                    <div className="how-it-works-page__protocols">
                      {step.protocols.map((protocol, pIndex) => (
                        <span 
                          key={pIndex}
                          className={`how-it-works-page__protocol ${activeStep === index ? 'lit' : ''}`}
                        >
                          {protocol}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            <div className="how-it-works-page__cta">
              <h2 className="how-it-works-page__cta-title">Ready to get started?</h2>
              <div className="how-it-works-page__cta-buttons">
                <a href="https://tv.creativeplatform.xyz" className="thm-btn how-it-works-page__cta-btn">Visit Creative TV</a>
                <a href="https://finance.creativeplatform.xyz" className="thm-btn how-it-works-page__cta-btn">Earn More with Creative Finance</a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
}
