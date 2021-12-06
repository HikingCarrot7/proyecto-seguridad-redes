import Link from '@docusaurus/Link';
import clsx from 'clsx';
import React from 'react';
import styles from './HomepageFeatures.module.css';

const TopicList = [
  {
    title: 'Programación con sockets',
    to: '/docs/sockets/introduction-sockets',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Seguridad en la comunicación dentro una red',
    to: '/docs/communication-security/intro',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Seguridad en la web',
    to: '/docs/web-security/introduction-https',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  {
    title: 'Internet of things',
    to: '/docs/iot/exploring-iot',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

const Topic = ({ Svg, title, description, to }) => {
  return (
    <div className={clsx('col col--3 topic')} style={{ cursor: 'pointer' }}>
      <Link {...{ to }} style={{ color: 'black' }}>
        <div className='text--center'>
          <Svg className={styles.featureSvg} alt={title} />
        </div>
        <div className='text--center padding-horiz--md'>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
};

const HomepageTopics = () => {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row' style={{ justifyContent: 'center' }}>
          {TopicList.map((props, idx) => (
            <Topic key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageTopics;
