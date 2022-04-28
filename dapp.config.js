const FORMATIC_KEY = process.env.NEXT_PUBLIC_FORMATIC_KEY
const RPC_URL = process.env.NEXT_PUBLIC_ALCHEMY_RPC_URL

const config = {
  title: 'Bored Ape Dapp',
  description: 'A showcase Dapp which is built for you to create your own '
}

const onboardOptions = {
  dappId: process.env.NEXT_PUBLIC_DAPP_ID,
  networkId: 4, //Rinkbey
  walletSelect: [
    { walletName: 'metamask', preferred: true },
    { walletName: 'coinbase', preferred: true },
    {
      walletName: 'walletLink',
      preferred: true,
      rpcUrl: RPC_URL,
      appName: 'BoredApr Dapp'
    },
    { walletName: 'trust', preferred: true, rpcUrl: RPC_URL },
    { walletName: 'gnosis', preferred: true },
    { walletName: 'authereum' },

    {
      walletName: 'ledger',
      rpcUrl: RPC_URL
    },
    {
      walletName: 'lattice',
      rpcUrl: RPC_URL,
      appName: 'BoredAPe Dapp'
    },
    {
      walletName: 'keepkey',
      rpcUrl: RPC_URL
    },

    {
      walletName: 'fortmatic',
      apiKey: FORMATIC_KEY,
      preferred: true
    }
  ],
  walletCheck: [
    { checkName: 'derivationPath' },
    { checkName: 'accounts' },
    { checkName: 'connect' },
    { checkName: 'network' }
  ]
}

export { config }
