import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';
import HomepageTopics from '../components/HomepageFeatures';
import styles from './index.module.css';

const HomepageHeader = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className='container'>
        <h1 className='hero__title'>{siteConfig.title}</h1>
        <p className='hero__subtitle'>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className='button button--secondary button--lg'
            to='/docs/sockets/introduction-sockets'
          >
            Iniciar recorrido️ ➜
          </Link>
        </div>
      </div>
    </header>
  );
};

const Home = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title}`}
      description='Proyecto integrador para la asignatura de redes y seguridad de compuatdoras'
    >
      <HomepageHeader />
      <main>
        <HomepageTopics />
      </main>
    </Layout>
  );
};

export default Home;
