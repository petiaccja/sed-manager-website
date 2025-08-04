import type { ReactNode } from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import Link from '@docusaurus/Link';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link className="button button--secondary button--lg" to="/downloads" style={{ flex: 1, minWidth: '200px', maxWidth: '250px' }}>
            ⬇️ Download
          </Link>
          <Link className="button button--secondary button--lg" to="/docs/theory/how_does_encryption_work" style={{ flex: 1, minWidth: '200px', maxWidth: '250px' }}>
            📖 Learn about SEDs
          </Link>
          <Link className="button button--secondary button--lg" to="/docs/usage/introduction" style={{ flex: 1, minWidth: '200px', maxWidth: '250px' }}>
            📝 Set up your drive
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title={`Home`}
      description="An easy to use application to enable your TCG (Opal & more) self-encrypting drives. Supports pre-boot authentication and many TCG standards.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
