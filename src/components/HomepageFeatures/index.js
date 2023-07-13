import Translate from '@docusaurus/Translate';
import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: <Translate>建设模块化区块链</Translate>,
    Svg: require('@site/static/img/modular.svg').default,
    description: (
      <>
        <Translate>
          Celestia是首个模块化区块链网络，它使开发者能够像部署新的智能合约一样简单地部署自己的区块链。
        </Translate>
      </>
    )
  },
  {
    title: <Translate>运行不同的节点</Translate>,
    Svg: require('@site/static/img/run_node.svg').default,
    description: (
      <>
        <Translate>
          Celestia允许你运行一个验证器节点、一个桥节点或一个轻型客户端，以便能够支持网络。
        </Translate>
      </>
    )
  },
  {
    title: <Translate>以数据可用性层为动力</Translate>,
    Svg: require('@site/static/img/data_availability.svg').default,
    description: (
      <>
        <Translate>
          Celestia引入了所谓的数据可用性层，用于实现高效的扩展，并允许L2
          Rollups为其需要的交易做数据采样。
        </Translate>
      </>
    )
  }
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center'>
        <Svg className={styles.featureSvg} role='img' />
      </div>
      <div className='text--center padding-horiz--md'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
