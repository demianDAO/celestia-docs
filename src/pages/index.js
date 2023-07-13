import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className='container'>
        <h1 className='hero__title'>{siteConfig.title}</h1>
        <div className={styles.buttons}>
          <Link
            className='front-page-link'
            to='/concepts/how-celestia-works/introduction'>
            <p className='button-heading'>概念</p>
            学习 Celestia 如何工作
          </Link>
          <Link className='front-page-link' to='/developers/node-tutorial'>
            <p className='button-heading'>Celestia 节点</p>
            运行一个节点
          </Link>
          <Link className='front-page-link' to='/developers/rollkit'>
            <p className='button-heading'>主权区块链</p>
            部署 rollup 在 Celestia上
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description='Celestia 模块化区块链中文文档开发和节点指南'>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
