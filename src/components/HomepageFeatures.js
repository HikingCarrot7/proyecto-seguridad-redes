import Link from '@docusaurus/Link';
import clsx from 'clsx';
import React from 'react';
import styles from './HomepageFeatures.module.css';

const TopicList = [
  {
    title: 'Programación con sockets',
    to: '/docs/sockets/introduction-sockets',
    Svg: require('../../static/img/home/socket.svg').default,
    description: (
      <>
        ¿Cómo se comunican programas de software escritos en diferentes de
        programación?
      </>
    ),
  },
  {
    title: 'Seguridad en la comunicación dentro una red',
    to: '/docs/communication-security/intro',
    Svg: require('../../static/img/home/communication_security.svg').default,
    description: (
      <>
        Conozca la importancia de la seguridad en la comunicación dentro de una
        red.
      </>
    ),
  },
  {
    title: 'Seguridad en la web',
    to: '/docs/web-security/introduction-https',
    Svg: require('../../static/img/home/web_security.svg').default,
    description: (
      <>Conozca la importa de visitar páginas seguras en internet.</>
    ),
  },
  {
    title: 'Internet of things',
    to: '/docs/iot/exploring-iot',
    Svg: require('../../static/img/home/iot.svg').default,
    description: <>¿Qué es IoT y por qué es tan popular actualmente?</>,
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
