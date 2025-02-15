---
sidebar_label: 单体区块链与模块化的区块链
---

# 单体区块链与模块化区块链的对比

区块链实例化了[复制的状态机](https://dl.acm.org/doi/abs/10.1145/98163.98167)：
在一个无权限的分布式网络中的节点应用一个有序的序列确定性交易的有序序列到初始状态，形成一个共同的
最终状态。这意味着区块链需要以下四个功能：

- **执行** 需要执行正确更新状态的交易。因此，执行必须确保只有有效的交易被执行，也就是导致有效的状态机转换的交易。
- **结算** 需要为执行层提供一个环境来验证证明、解决欺诈纠纷，并在其它执行层之间建立桥梁。
- **共识** 需要就交易的顺序达成一致。
- **数据可用性**（DA）需要使交易数据可用。请注意，执行、结算和共识都需要 DA。

传统的区块链，即*单体区块链*，在单一的基础共识层中实现所有四个功能一起实现在一个基础共识层中。单一区块链的问题是单一区块链的问题是，共识层必须执行大量的不同的任务，它不能只为其中一个功能进行优化。
因此，单体的范式限制了系统的吞吐量。

![模块化VS单体模式](/img/concepts/monolithic-modular.png)

作为一种解决方案，模块化区块链将这些功能在多个专业层中解耦，作为模块化的一部分。作为模块化堆栈的一部分，模块化区块链将这些功能解耦到多个单独的层中。由于专业化提供的灵活性，有许多可能性技术栈可以被安排在其中。例如，一个这样的设计是将四个功能分离成三个专门的层:

基础层由 DA 和共识组成，因此被称为称为共识和 DA 层（或者为了简洁起见，称为 DA 层），而结算和执行都被移到上面。结算和执行都被移到他们自己的层上面。因此、每一层都可以被专门化，以优化执行其功能，从而、增加系统的吞吐量。此外，这种模块化的范式使得多个执行层，即[rollups](https://vitalik.ca/general/2021/01/05/rollup.html)，可以使用相同的结算和 DA 层。
