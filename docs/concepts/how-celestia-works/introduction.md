---
sidebar_label: 介绍
---

# 介绍

Celestia 是一个模块化的区块链网络，其目标是建立一个可扩展的[数据可用性层](https://blog.celestia.org/celestia-a-scalable-general-purpose-data-availability-layer-for-decentralized-apps-and-trust-minimized-sidechains)、启用下一代可扩展的区块链架构------[模块化区块链](https://celestia.org/learn)。Celestia 通过以下方式进行扩展[解耦执行层与共识层](https://arxiv.org/abs/1905.09274)和引入了一个新的基本要素[数据可用性采样](https://arxiv.org/abs/1809.09044)。

前者意味着 Celestia 只负责对交易进行排序并保证其数据可用性；这与类似于[将共识简化为原子广播](https://en.wikipedia.org/wiki/Atomic_broadcast#Equivalent_to_Consensus)。

后者提供了一个有效的解决方案来解决[数据可用性问题](https://coinmarketcap.com/alexandria/article/what-is-data-availability)只需要资源有限的轻节点从每个块中抽取少量的随机块来验证数据的可用性。

有趣的是，更多的轻节点参与采样增加了网络可以安全处理的数据量、使得区块大小增加而不同样增加验证链的成本。
