import React from 'react';
import Layout from '@theme/Layout';
import Banner from '../components/Banner';
import Services from '../components/Services';
import FeaturesOne from '../components/FeaturesOne';
import FeaturesTwo from '../components/FeaturesTwo';
import Video from '../components/Video';
import Testimonial from '../components/Testimonial';
import Brands from '../components/Brands';
import Faq from '../components/Faq';
import CallToAction from '../components/CallToAction';
import useIsBrowser from '@docusaurus/useIsBrowser';

import 'bootstrap/dist/css/bootstrap.min.css';

function HomepageHeader() {
  return (
    <>
      <Banner />
    </>
  );
}

export default function Home() {
  const isBrowser = useIsBrowser();
  return (
    <Layout
      title="Creative Platform — get discovered, get paid, own your audience"
      description="Get discovered, get paid, and own your audience on Creative TV."
      >
      <HomepageHeader />
      <main>
        <Services />
        <FeaturesOne />
        <FeaturesTwo />
        { isBrowser && <Video />}
        <Testimonial />
        <Brands />
        <Faq />
        <CallToAction />
      </main>
    </Layout>
  );
}
