import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  illustration: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Support for TCG drives',
    illustration: require("@site/static/img/illustrations/home/feature_sed.png").default,
    description: (
      <>
        TCG <b>Opal</b>, <b>Opalite</b>, <b>Pyrite</b>, and <b>Ruby</b> drives
        {' '}are fully supported. <b>Enterprise</b> and <b>Key Per I/O</b>
        {' '}drives have limited support, but are identified.
      </>
    ),
  },
  {
    title: 'Easy to Use GUI',
    illustration: require("@site/static/img/illustrations/home/feature_gui.png").default,
    description: (
      <>
        You can configure your drives in just a few minutes thanks to the
        {' '}intuitive GUI. You can access all information related to your
        {' '} drive at a glance.
      </>
    ),
  },
  {
    title: 'Pre-Boot Authentication',
    illustration: require("@site/static/img/illustrations/home/feature_pba.png").default,
    description: (
      <>
        Encrypt your boot drive using the PBA environment on devices. This is
        {' '}invisible to your OS, and does not interfere with the boot process.
      </>
    ),
  },
];

function Feature({ title, illustration, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureIllustration} src={illustration} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <div className="text--center"></div>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
