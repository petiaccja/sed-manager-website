import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Wide Range of SEDs',
    description: (
      <>
        SEDManager has full support for TCG <b>Opal</b>, <b>Opalite</b>,&nbsp;
        <b>Pyrite</b>, and <b>Ruby</b> drives. Enterprise and Key Per I/O
        drives are also recognized.
      </>
    ),
  },
  {
    title: 'Easy to Use GUI',
    description: (
      <>
        SEDManager's graphical user interface is easy to use and intuitive,
        so you can configure your drives in just a few minutes
      </>
    ),
  },
  {
    title: 'Pre-Boot Authentication',
    description: (
      <>
        SEDManager's Alpine Linux-based PBA environment allows you to unlock
        your drives with a password before booting the operating system
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
