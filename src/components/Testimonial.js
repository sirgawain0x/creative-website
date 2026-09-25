import React,{ useState, useEffect } from 'react';
import Swiper from 'react-id-swiper';
import '../css/swiper/swiper.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const leftArrow = <FontAwesomeIcon icon={faAngleLeft} />
const rightArrow = <FontAwesomeIcon icon={faAngleRight} />

const Testimonial = () => {

    const [swiper, setSwiper] = useState(null);

    const swiperParams = {
        getSwiper: setSwiper,
        pagination: {
            el: '.testimonials-pagination',
            clickable: true,
            dynamicBullets: true
        }
    };

    // Debug: Log when component mounts
    useEffect(() => {
        console.log('Testimonial component mounted');
        const paginationEl = document.querySelector('.testimonials-pagination');
        console.log('Pagination element:', paginationEl);
    }, []);

      const goNext = () => {
        if (swiper !== null) {
          swiper.slideNext();
        }
      };

      const goPrev = () => {
        if (swiper !== null) {
          swiper.slidePrev();
        }
      };

    return (

        <section className="testimonials__one" id="testimonials">
            <img src="img/shapes/map-1-1.png" alt="Awesome Image" className="map-img"/>
            <img src="img/shapes/testi-shape-1.png" alt="" className="testimonials__one-shape-1"/>
                <img src="img/shapes/testi-shape-2.png" alt="" className="testimonials__one-shape-2"/>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="my-auto wow fadeInUp" data-wow-duration="1500ms">
                                <div id="testimonials-slider-pager">
                                    <div className="testimonials-slider-pager-one">
                                        <span onClick={goNext} className="pager-item active" data-slide-index="0"><img
                                            src="img/testimonials/singer.png"
                                            alt="Awesome Image"/></span>
                                        <span onClick={goPrev} className="pager-item" data-slide-index="1"><img
                                            src="img/testimonials/artist.png"
                                            alt="Awesome Image"/></span>
                                        <span onClick={goNext} className="pager-item" data-slide-index="2"><img
                                            src="img/testimonials/saxaphone.png"
                                            alt="Awesome Image"/></span>
                                        <span onClick={goPrev} className="pager-item" data-slide-index="3"><img
                                            src="img/testimonials/poet.png"
                                            alt="Awesome Image"/></span>
                                        <span  onClick={goNext} className="pager-item" data-slide-index="4"><img
                                            src="img/testimonials/writer.png"
                                            alt="Awesome Image"/></span>
                                        <span  onClick={goPrev} className="pager-item" data-slide-index="5"><img
                                            src="img/testimonials/actress.png"
                                            alt="Awesome Image"/></span>
                                    </div>
                                    <div className="testimonials-slider-pager-two">
                                        <a href="#" className="pager-item active" data-slide-index="0"><img
                                            src="img/testimonials/creative-logo.png"
                                            alt="Awesome Image"/></a>
                                        <a href="#" className="pager-item" data-slide-index="1"><img
                                            src="img/testimonials/testi-1-2.jpg"
                                            alt="Awesome Image"/></a>
                                        <a href="#" className="pager-item" data-slide-index="2"><img
                                            src="img/testimonials/testi-1-3.jpg"
                                            alt="Awesome Image"/></a>
                                        <a href="#" className="pager-item" data-slide-index="3"><img
                                            src="img/testimonials/testi-1-4.jpg"
                                            alt="Awesome Image"/></a>
                                        <a href="#" className="pager-item" data-slide-index="4"><img
                                            src="img/testimonials/testi-1-5.jpg"
                                            alt="Awesome Image"/></a>
                                        <a href="#" className="pager-item" data-slide-index="5"><img
                                            src="img/testimonials/testi-1-6.jpg"
                                            alt="Awesome Image"/></a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="block-title text-left">
                                <span className="block-title__bubbles"></span>
                                <p>Real Creators. Real Results.</p>
                                <h3>Why Creators are Choosing Creative</h3>
                            </div>
                            <div className="swipe-hint-indicator">
                                <FontAwesomeIcon icon={faChevronLeft} className="swipe-hint-chevron swipe-hint-chevron-left" />
                                <span className="swipe-hint-text">Swipe to view more</span>
                                <FontAwesomeIcon icon={faChevronRight} className="swipe-hint-chevron swipe-hint-chevron-right" />
                            </div>
                            <ul className="slider testimonials-slider">

                                <Swiper {...swiperParams}>

                                    <li className="slide-item">
                                        <div className="testimonials__one__single">
                                            <p>Creative gave me a way to earn directly from my work without giving up control. After years of self-publishing, it finally feels like the platform is working for me, not the other way around.</p>
                                            <h3>I.D., Independent Hip-Hop Artist</h3>
                                        </div>
                                    </li>
                                    <li className="slide-item">
                                        <div className="testimonials__one__single">
                                            <p>My production speed tripled overnight. I had a folder full of lyrics but no time to shoot videos. Using the AI agents on the Creative Platform, I turned my text into full visualizers in minutes. It feels like having a production studio in my pocket. This is the future of content creation.</p>
                                            <h3>Terrilyn Werme, Digital Artist & Producer</h3>
                                        </div>
                                    </li>
                                    <li className="slide-item">
                                        <div className="testimonials__one__single">
                                            <p>The easiest bridge between earnings and cash. Creative Finance made it simple to manage our money—it’s the first dashboard that understands creators.</p>
                                            <h3>Kyle Demayo, Founder</h3>
                                        </div>
                                    </li>
                                    <li className="slide-item">
                                        <div className="testimonials__one__single">
                                            <p>Enterprise-grade trust for independent creators. Creative Platform helps our brand collaborations stay verified and secure.</p>
                                            <h3>Minta Hadad, Brand Partnerships Director</h3>
                                        </div>
                                    </li>
                                    <li className="slide-item">
                                        <div className="testimonials__one__single">
                                            <p>I built Creative Platform because I was tired of waiting on labels. I wanted a factory of AI agents that could handle the business so I could handle the music.</p>
                                            <h3>G2, Founder</h3>
                                        </div>
                                    </li>
                                    <li className="slide-item">
                                        <div className="testimonials__one__single">
                                            <p>It’s like having a CFO in my pocket. Creatives are usually great at art but struggle with the business side. Creative Finance changed that for me. I can finally track my royalties, manage payouts to my collaborators, and secure my assets in one dashboard. It turns my catalog from a hobby into a verifiable business.</p>
                                            <h3>Gary Eyrich,Producer & Label Owner</h3>
                                        </div>
                                    </li>
                                </Swiper>
                                <div className="swiper-pagination testimonials-pagination"></div>

                                <div className="testimonial_pagination">
                                    <div className="testimonials-slider-pager-one testimonials-slider-pager-two" onClick={goPrev}>
                                        <i></i>
                                    </div>
                                    <div className="ml-3" onClick={goNext}>
                                        <i></i>
                                    </div>

                                </div>
                            </ul>
                        </Col>
                    </Row>
                </Container>
        </section>
    )
}
export default Testimonial;