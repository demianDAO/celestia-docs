---
sidebar_label: 如何在Celestia App创建归属帐户
description: 学习如何使用Celestia App生成归属帐户。
---

# 如何在 Celestia App 创建归属帐户

<!-- markdownlint-disable MD013 -->

在本指南中，我们将学习如何使用 celestia-app 创建本地开发网和 Mocha 测试网的归属账户。

:::tip note
本教程针对的是**连续**归属账户、如果您想创建一个延迟归属账户，只需在您的归属交易中添加"--delayed 标记。
:::

## 本地开发网络

首先，下载并[安装 Celestia 应用程序](../../nodes/celestia-app)、

选择[网络和相应版本](../../nodes/participate)

您想使用的[网络和相应版本](../../nodes/participate)。

### 设置本地开发网络

#### 运行一个本地网络

接下来, 进入到 `$HOME/celestia-app` 并运行 `single-node-devnet` 的脚本.

```bash
cd $HOME/celestia-app
./scripts/build-run-single-node.sh
```

#### 保存到家目录

在输出的顶部，您将看到 "主目录 "的路径、从输出中找到您的主目录（**每次都是唯一的**）：

```bash
./scripts/build-run-single-node.sh
Home directory: /var/folders/_8/ljj6hspn0kn09qf9fy8kdyh40000gn/T/celestia_app_XXXXXXXXXXXXX.XV92a3qx
--> Updating go.mod
```

并设置位置为`CElESTIA_APP_HOME`变量。我们将在用于本地网络部分的其余部分。

```bash
export CElESTIA_APP_HOME=/var/folders/_8/ljj6hspn0kn09qf9fy8kdyh40000gn/T/celestia_app_XXXXXXXXXXXXX.XV92a3qx
```

:::tip note
这并不会替换与`celestia-appd`一起安装的`celestia-appd`二进制文件。
二进制文件，而是在`$HOME/celestia-app-/build`目录下构建并运行一个目录中的`celestia-appd`二进制文件。
:::

#### 检查本地网络版本

如果您想检查本地 devnet 的版本，可以使用：

```bash
cd $HOME/celestia-app/build
./celestia-appd version
```

#### 下一步

恭喜您！您现在已经在您的机器上本地运行了一个私有的 devnet。devnet 由一个正在创建新块的验证器组成。这就是您机器上的 Celestia 共识网络！为运行验证器而创建的密钥运行验证器的密钥也存在于开发网络的临时目录中。

现在您已经准备好在我们的开发网上测试创建一个归属账户，然后再去 Mocha，一个实时测试网络。

### 在 devnet 上设置归属帐户

您已经设置了一个密钥，但您还需要一个密钥来创建归属帐户。

#### 创建新钥匙

首先，创建归属密钥：

```bash
cd $HOME/celestia-app/build
./celestia-appd keys add vesting-key --home $CElESTIA_APP_HOME
```

您将在输出中看到地址、助记词以及有关密钥的更多详细信息在输出的信息中：

```bash
- address: celestia127fpaygehlsgjdknwvlr2mux7h5uvhkxktgkc5
  name: vesting-key
  pubkey: '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"A5JF/we+s5gFt6g944XbKVVYgQB9OY+U/l5dhZjLDczO"}'
  type: local


**重要** 将此记忆短语写在安全的地方。如果您忘记了密码，这是恢复帐户的唯一方法。

index enter egg broken ostrich duty bitter blind all car hollow coral youth early verify point void anger daring sausage decline net shove oil
```

#### 列出你的私钥

```bash
./celestia-appd keys list --home $CElESTIA_APP_HOME
```

Output:

```bash
- address: celestia1adgkqcmzuxvg7x5avx8a8rjwpmxgzex3ztef6j
  name: validator
  pubkey: '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"Ahzu6yr9XMPIxLquhgBhj9xL3wIaOz6PE3CvML/oPQym"}'
  type: local
- address: celestia127fpaygehlsgjdknwvlr2mux7h5uvhkxktgkc5
  name: vesting-key
  pubkey: '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"A5JF/we+s5gFt6g944XbKVVYgQB9OY+U/l5dhZjLDczO"}'
  type: local
```

#### 设置变量

将密钥设置为变量，将验证器地址作为`FROM_ADDRESS`，将 vesting-key 作为`TO_ADDRESS`和 vesting-key 作为`TO_ADDRESS`。

```bash
export FROM_ADDRESS=celestia1adgkqcmzuxvg7x5avx8a8rjwpmxgzex3ztef6j
export TO_ADDRESS=celestia127fpaygehlsgjdknwvlr2mux7h5uvhkxktgkc5
```

#### 创建您的 devnet 归属帐户

使用以下命令创建归属帐户：

:::tip note
其余说明适用于**连续**归属账户、如果您想创建一个延迟归属账户，请使用`--delayed`标志。

例如，创建延迟归属帐户的命令如下:

```bash
./celestia-appd tx vesting create-vesting-account $TO_ADDRESS 100000utia 1686748051 --from $FROM_ADDRESS --gas auto --fees 100000utia --chain-id private --home $CElESTIA_APP_HOME --delayed
```

:::

```bash
./celestia-appd tx vesting create-vesting-account $TO_ADDRESS 100000utia 1686748051 --from $FROM_ADDRESS --gas auto --fees 100000utia --chain-id private --home $CElESTIA_APP_HOME
```

选择 "Y" 之后选 "yes".

:::tip 可选参数
如果你想运行带有`-y`标志的命令，它将执行事务而不需要提供上面的 "y "答案。执行事务，而不需要提供上面的 "y "答案。

```bash
./celestia-appd tx vesting create-vesting-account $TO_ADDRESS 100000utia 1686748051 --from $FROM_ADDRESS --gas auto --fees 100000utia --chain-id private --home $CElESTIA_APP_HOME -y
```

:::

Output:

```bash
gas estimate: 96112
auth_info:
  fee:
    amount:
    - amount: "100000"
      denom: utia
    gas_limit: "96112"
    granter: ""
    payer: ""
  signer_infos: []
  tip: null
body:
  extension_options: []
  memo: ""
  messages:
  - '@type': /cosmos.vesting.v1beta1.MsgCreateVestingAccount
    amount:
    - amount: "100000"
      denom: utia
    delayed: false
    end_time: "1686748051"
    from_address: celestia1adgkqcmzuxvg7x5avx8a8rjwpmxgzex3ztef6j
    to_address: celestia127fpaygehlsgjdknwvlr2mux7h5uvhkxktgkc5
  non_critical_extension_options: []
  timeout_height: "0"
signatures: []
confirm transaction before signing and broadcasting [y/N]: y
code: 0
codespace: ""
data: ""
events: []
gas_used: "0"
gas_wanted: "0"
height: "0"
info: ""
logs: []
raw_log: '[]'
timestamp: ""
tx: null
txhash: 6093DF76DBA90F04FF63D197FC1569F04ED3DBE64081A0BBA9BAD4E69AA570D2
```

上一条命令的时间戳已经过去，所以一旦您创建了归属账户，代币就会归属。您可以检查您的账户余额来验证。

#### 查询 devnet 归属帐户详细信息

通过查询`TO_ADDRESS`账户的详细信息：

```bash
./celestia-appd query account $TO_ADDRESS --home $CElESTIA_APP_HOME
```

在输出中，您会注意到账户类型是 `ContinuousVestingAccount`:

```bash
'@type': /cosmos.vesting.v1beta1.ContinuousVestingAccount
base_vesting_account:
  base_account:
    account_number: "7"
    address: celestia127fpaygehlsgjdknwvlr2mux7h5uvhkxktgkc5
    pub_key: null
    sequence: "0"
  delegated_free: []
  delegated_vesting: []
  end_time: "1686748051"
  original_vesting:
  - amount: "100000"
    denom: utia
start_time: "1687908352"
```

#### 查询 devnet 基本账户详细信息

查询 `FROM_ADDRESS` 帐户详细信息：

```bash
./celestia-appd query account $FROM_ADDRESS --home $CElESTIA_APP_HOME
```

在这个输出中, 你将会注意到账户的类型是 `BaseAccount`:

```bash
'@type': /cosmos.auth.v1beta1.BaseAccount
account_number: "0"
address: celestia1adgkqcmzuxvg7x5avx8a8rjwpmxgzex3ztef6j
pub_key:
  '@type': /cosmos.crypto.secp256k1.PubKey
  key: Ahzu6yr9XMPIxLquhgBhj9xL3wIaOz6PE3CvML/oPQym
sequence: "2"
```

#### 查询 devnet 账户余额

接下来，我们可以检查账户余额：

```bash
./celestia-appd query bank balances $TO_ADDRESS --home $CElESTIA_APP_HOME
```

输出将显示归属帐户的余额：

```bash
balances:
- amount: "100000"
  denom: utia
pagination:
  next_key: null
  total: "0"
```

```bash
./celestia-appd query bank balances $FROM_ADDRESS --home $CElESTIA_APP_HOME
```

输出将显示验证器的剩余余额：

```bash
balances:
- amount: "999994999800000"
  denom: utia
pagination:
  next_key: null
  total: "0"
```

恭喜您！您现在已经在本地开发网上创建了自己的归属帐户。

接下来，您可以学习如何在 Mocha Testnet 上创建一个归属帐户。

## Mocha

在本教程的前一部分，我们学习了如何在本地开发网中创建归属帐户。

帐户, 在本教程的这一部分，我们将介绍如何建立一个共识完整节点，并在 `Mocha Testnet`。

首先，请确认您已在此[页面](../../nodes/celestia-app) 上安装了最新版本的 Mocha Testnet 的 Celestia 应用程序。

### 创建一个钱包

设置 keyring 后台，这样就不需要在每个命令中都使用该标志：

```bash
celestia-appd config keyring-backend test
```

为一个完整节点添加一个新密钥，为一个归属账户添加一个新密钥：

```bash
celestia-appd keys add origin && celestia-appd keys add vesting
```

列出所有钥匙:

```bash
celestia-appd keys list
```

设置你的私钥环境变量:

```bash
export FROM_ADDRESS=address_of_origin_account
export TO_ADDRESS=address_of_vesting_account
```

### 领取测试币到你的账户

前往[水龙头]并为您的原始地址提供资金。

### 在 Mocha 上创建一个归属账户

要在 Mocha 上创建一个归属账户，你需要一个 RPC URL 来将交易发送到交易。你可以找到一个[RPC] 列表。

设置你德 RPC 地址:

```bash
export RPC_URL=https://rpc-mocha.pops.one:443
```

我们将在 vesting 命令中使用一些不同于

devnet 版本不同。由于我们没有使用自己的验证器或完整节点，我们将使用 RPC URL。

我们还需要将链 ID 声明为`mocha`。

请查看 vesting 的帮助菜单以进一步了解这些标识：

```bash
celestia-appd tx vesting --help
```

下面是一个设置归属帐户的命令示例：

```bash
celestia-appd tx vesting create-vesting-account $TO_ADDRESS 100000utia 1686748051 --from $FROM_ADDRESS --gas 100000 --fees 100000utia --node $RPC_URL --chain-id mocha --delayed
```

### 可选： 设置共识完整节点或验证器

运行共识完整节点或验证器将避免您需要使用使用 RPC。

您可以设置一个 [validator](../../nodes/full-consensus-node) 或 [full node](../../nodes/validator-node) 来执行前一部分教程。

注意：这可能需要一些时间，取决于您选择同步链状态的方式。

### 可选:改变你的 client.toml 配置

如果您在`client.toml`中编辑您的客户端配置，您可以同时设置链 ID 和节点 RPC URL。这将避免您需要运行每个标识。

```toml
# This is a TOML config file.
# For more information, see https://github.com/toml-lang/toml

###############################################################################
###                           Client Configuration                            ###
###############################################################################

# The network chain ID
chain-id = "mocha"
# The keyring's backend, where the keys are stored (os|file|kwallet|pass|test|memory)
keyring-backend = "test"
# CLI output format (text|json)
output = "text"
# <host>:<port> to Tendermint RPC interface for this chain
node = "tcp://rpc-mocha.pops.one:443"
# Transaction broadcasting mode (sync|async|block)
broadcast-mode = "sync"
```

## 笔记

并不是所有的归属帐户都可以用信息创建，有些需要在创始时设置。
了解更多[查看](https://docs.cosmos.network/v0.46/modules/auth/05_vesting.html#note).

## 总结

恭喜您！您已经学会了如何创建一个本地开发网，在上面创建一个和如何在 Mocha Testnet 上创建归属帐户！
