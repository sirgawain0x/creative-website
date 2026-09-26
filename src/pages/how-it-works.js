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

  const stepData = [
    {
      number: 1,
      title: "Join the Movement (Login in Seconds)",
      simple: "Sign in with your email or social account—no wallet setup required.",
      tech: "Using Account Kit (Social Auth), you can join Creative Platform with your existing email or social accounts. Account Abstraction creates a smart contract wallet behind the scenes, so you can use TV, Finance, and other products without managing seed phrases yourself. Onchain wallet and contract interactions for the product today run on Base (Coinbase's Layer 2 network)—Creative Platform's primary supported chain.",
      protocols: ["Base"]
    },
    {
      number: 2,
      title: "Choose Your Role (Unlock Your Key)",
      simple: "Pick your role: Creator, Fan, or Brand. Your membership key stays with you as you grow. Comment on the shows and music you love and join the conversation in the feed.",
      tech: "Memberships are issued through Unlock Protocol as NFT Keys you control—not just a recurring login. Start free or upgrade into a Creator, Fan (Professional), or Brand membership, each with its own access and tools. Social feeds and comments on videos, music, and posts are powered by Lens Protocol so fans engage in-product—not only on third-party chat apps.",
      protocols: ["Unlock Protocol", "Lens"]
    },
    {
      number: 3,
      title: "Create & Protect (Own Your IP)",
      simple: "Upload your work, stream live, and keep control of how your content is used and credited.",
      tech: "Upload & Stream: Host music videos, podcasts, and films on infrastructure powered by Livepeer; creators can stream live with Livepeer. Programmable IP: Register work on Story Protocol to set terms for reuse and remix, with attribution and payment rules you define. AI Enhancement: Creative Pixels, our AI Agent Factory, helps generate visuals, sync lyrics, and produce cinematic content.",
      protocols: ["Livepeer", "Story Protocol"]
    },
    {
      number: 4,
      title: "Get Paid & Engage (Splits, meTokens & Markets)",
      simple: "Collaborators get paid automatically when revenue comes in. Launch your meToken so fans can back you and unlock exclusive streams and premium content. Fans call your next milestone and ride along with your journey through Prediction Markets.",
      tech: "Base: meTokens, revenue-split contracts, and on-platform Prediction Markets are deployed on Base—the first and primary chain Creative Platform supports today. Revenue Splits: Smart contracts on Base route earnings to you and collaborators according to the split you configure when payments arrive—no manual invoicing for each payout. meTokens: Your meToken is your personal brand currency. Fans hold it to back you and unlock exclusive live streams and premium content; meToken balances and prices can change and are not an investment or ownership stake. Prediction Markets: Reality.eth powers community Prediction Markets where fans forecast milestones for engagement—not cash wagering. Fans call your next milestone and ride along with your journey.",
      protocols: ["Base", "Reality.eth"]
    },
    {
      number: 5,
      title: "Shape the Future (DAO Governance)",
      simple: "Help guide what Creative builds next by voting with CRTV tokens in community proposals.",
      tech: "Creative Organization is a DAO: members use CRTV on Snapshot to vote on platform updates, features, and treasury allocations. Governance is collective—no single operator decides the roadmap alone.",
      protocols: ["Snapshot"]
    }
  ];

  return (
    <Layout 
      title="How It Works - The Ecosystem" 
      description="How Creative Platform works for creators, fans, and brands—TV, Finance, Mixtape, Pixels, Beat Me, Books, and more, supported by the Creative Organization DAO."
    >
      <div className="how-it-works-page" ref={pageRef}>
        <Container>
          <div className="how-it-works-page__content">
            <div className="how-it-works-page__header">
              <h1 className="how-it-works-page__headline">
                The Ecosystem: How It Works
              </h1>
              <p className="how-it-works-page__subheadline">
                Everything you need to create, connect, and grow—all in one place.
              </p>
              <p className="how-it-works-page__intro">
                Creative Platform is the ecosystem for creators, fans, and brands—products include Creative TV (streaming), Creative Finance (payouts and treasury tools), Mixtape, Pixels, Beat Me, and Books. Use the toggle below for a quick overview or the technical details.
              </p>
              
              <div className="how-it-works-page__toggle">
                <button 
                  type="button"
                  className={`how-it-works-page__toggle-btn ${isSimpleMode ? 'active' : ''}`}
                  onClick={() => setIsSimpleMode(true)}
                  aria-pressed={isSimpleMode}
                  aria-label="Explain like I'm 5"
                >
                  Explain like I'm 5
                </button>
                <button 
                  type="button"
                  className={`how-it-works-page__toggle-btn ${!isSimpleMode ? 'active' : ''}`}
                  onClick={() => setIsSimpleMode(false)}
                  aria-pressed={!isSimpleMode}
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
                  {!isSimpleMode && step.protocols.length > 0 && (
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
