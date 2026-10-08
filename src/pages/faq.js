import React from 'react';
import Layout from '@theme/Layout';
import Faq from '../components/Faq';

export default function FaqPage() {
  return (
    <Layout
      title="FAQ"
      description="Frequently asked questions about Creative Platform for creators, fans, and brands."
    >
      <main>
        <Faq />
      </main>
    </Layout>
  );
}
