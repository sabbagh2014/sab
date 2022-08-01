export const NetworkContextName = 'Binance Test Net'
export const ACTIVE_NETWORK = 97
export const BNB_NETWORK = 97
export const OpenMarketplace = '0x14C9c6A657EE450805848B07A403DD883B862C1f'
export const NFTTokenContract = '0x0dCD9c3d03f09B9313d2A6851B7C98B532AC7dC9'
export const deadAddress = '0x0000000000000000000000000000000000000000'
export const massToken = '0xFF0A2E01166e0f75B66090d9910d112B39238130'
// export const USDTToken = '0xdac17f958d2ee523a2206206994597c13d831ec7'
export const USDTToken = '0x21783C0Ce32e1859F6bccC6e575Ae6019765e443'
export const WBTCToken = '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'
export const BUSDToken = '0xe9e7cea3dedca5984780bafc599bd69add087d56'
export const CEO_NAME = 'Md AlMas'
export const websiteName =
  window.location.protocol + '//' + window.location.host
export const RPC_URL = 'https://data-seed-prebsc-1-s1.binance.org:8545/'
export const networkList = [
  {
    name: 'MASS',
    chainId: '3',
    tokenAddress: massToken,
    networkName: 'Ropsten Test Network',
    databaseKey: 'massBalance',
    img: 'images/tokens/1.png',
  },
  {
    name: 'WBTC',
    chainId: '1',
    tokenAddress: WBTCToken,
    networkName: 'Ethereum Mainnet',
    databaseKey: 'btcBalance',
    img: 'images/tokens/6.png',
  },
  {
    name: 'BUSD',
    chainId: '1',
    tokenAddress: USDTToken,
    networkName: 'Ethereum Mainnet',
    databaseKey: 'usdtBalance',
    img: 'images/tokens/3.png',
  },
  //   {
  //     name: "BUSD",
  //     chainId: "",
  //     tokenAddress: BUSDToken,
  //   },
  {
    name: 'ETH',
    chainId: '3',
    tokenAddress: massToken,
    networkName: 'Ropsten Test Network',
    databaseKey: 'ethBalance',
    img: 'images/tokens/4.png',
  },
  {
    name: 'BNB',
    chainId: '97',
    tokenAddress: massToken,
    networkName: 'Smart Chain - Testnet',
    databaseKey: 'bnbBalace',
    img: 'images/tokens/2.png',
  },
  // {
  //   name: "BNB",
  //   chainId: "97",
  //   tokenAddress: massToken,
  //   networkName: "Smart Chain - Testnet",
  //   databaseKey: "bnbBalance",
  //   img: "images/tokens/2.png",
  // },
]
export const getCoinkDetails = (name) => {
  switch (name.toString()) {
    case 'MASS':
      return {
        name: 'MASS',
        chainId: '3',
        tokenAddress: massToken,
        networkName: 'Ropsten Test Network',
        databaseKey: 'massBalance',
        img: 'images/tokens/1.png',
      }
    case 'WBTC':
      return {
        name: 'WBTC',
        chainId: '1',
        tokenAddress: WBTCToken,
        networkName: 'Ethereum Mainnet',
        databaseKey: 'btcBalance',
        img: 'images/tokens/6.png',
      }
    case 'USDT':
      return {
        name: 'USDT',
        chainId: '1',
        tokenAddress: USDTToken,
        networkName: 'Ethereum Mainnet',
        databaseKey: 'usdtBalance',
        img: 'images/tokens/3.png',
      }
    case 'ETH':
      return {
        name: 'ETH',
        chainId: '3',
        tokenAddress: massToken,
        networkName: 'Ropsten Test Network',
        databaseKey: 'ethBalance',
        img: 'images/tokens/4.png',
      }
    case 'BNB':
      return {
        name: 'BNB',
        chainId: '97',
        tokenAddress: massToken,
        networkName: 'Smart Chain - Testnet',
        databaseKey: 'bnbBalance',
        img: 'images/tokens/2.png',
      }
  }
}

export const getNetworkDetails = (chianId) => {
  switch (chianId.toString()) {
    case '42':
      return [
        {
          chainId: '0x2A',
          chainName: 'Kovan Test Network',
          nativeCurrency: {
            name: 'Kovan Test Network',
            symbol: 'ETH',
            decimals: 18,
          },
          rpcUrls: [
            'https://kovan.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
          ],
          blockExplorerUrls: ['https://kovan.etherscan.io'],
        },
      ]
    case '97':
      return [
        {
          chainId: '0x61',
          chainName: 'Smart Chain - Testnet',
          nativeCurrency: {
            name: 'Smart Chain - Testnet',
            symbol: 'BNB',
            decimals: 18,
          },
          rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
          blockExplorerUrls: ['https://testnet.bscscan.com/'],
        },
      ]
    case '80001':
      return [
        {
          chainId: '0x13881',
          chainName: 'Mumbai testnet',
          nativeCurrency: {
            name: 'Mumbai testnet',
            symbol: 'MATIC',
            decimals: 18,
          },
          rpcUrls: ['https://matic-mumbai.chainstacklabs.com'],
          blockExplorerUrls: ['https://explorer-mumbai.maticvigil.com/'],
        },
      ]
    case '43113':
      return [
        {
          chainId: '0xA869',
          chainName: 'Avalanche Network',
          nativeCurrency: {
            name: 'Avalanche Network',
            symbol: 'AVAX',
            decimals: 18,
          },
          rpcUrls: ['https://api.avax-test.network/ext/bc/C/rpc'],
          blockExplorerUrls: ['https://testnet.snowtrace.io/'],
        },
      ]
    case '4002':
      return [
        {
          chainId: '0xfa2',
          chainName: 'Fantom Opera',
          nativeCurrency: {
            name: 'Fantom Opera',
            symbol: 'FTM',
            decimals: 18,
          },
          rpcUrls: ['https://rpc.testnet.fantom.network/'],
          blockExplorerUrls: ['https://rpc.testnet.fantom.network/'],
        },
      ]
  }
}
export const exploreData = [
  {
    user: '@Alex',
    likes: '152',
    time: '8h : 15m : 25s left',
    stock: '4 in stock',
    text3: 'From 1.35 ETH 11/Bid 1.1 w',
    image: 'images/Explore/Explore1.png',
    name: 'Skyblue Creator',
    price: '0.004 ETH',
  },
  {
    user: '@Alex',
    likes: '152',
    time: '8h : 15m : 25s left',
    stock: '4 in stock',
    text3: 'From 1.35 ETH 11/Bid 1.1 w',
    image: 'images/Explore/Explore2.png',
    name: 'Skyblue Creator',
    price: '0.004 ETH',
  },
  {
    user: '@Alex',
    likes: '152',
    time: '8h : 15m : 25s left',
    stock: '4 in stock',
    text3: 'From 1.35 ETH 11/Bid 1.1 w',
    image: 'images/Explore/Explore3.png',
    name: 'Skyblue Creator',
    price: '0.004 ETH',
  },
  {
    user: '@Alex',
    likes: '152',
    time: '8h : 15m : 25s left',
    stock: '4 in stock',
    text3: 'From 1.35 ETH 11/Bid 1.1 w',
    image: 'images/Explore/Explore4.png',
    name: 'Skyblue Creator',
    price: '0.004 ETH',
  },
  {
    user: '@Alex',
    likes: '152',
    time: '8h : 15m : 25s left',
    stock: '4 in stock',
    text3: 'From 1.35 ETH 11/Bid 1.1 w',
    image: 'images/Explore/Explore1.png',
    name: 'Skyblue Creator',
    price: '0.004 ETH',
  },
  {
    user: '@Alex',
    likes: '152',
    time: '8h : 15m : 25s left',
    stock: '4 in stock',
    text3: 'From 1.35 ETH 11/Bid 1.1 w',
    image: 'images/Explore/Explore2.png',
    name: 'Skyblue Creator',
    price: '0.004 ETH',
  },
  {
    user: '@Alex',
    likes: '152',
    time: '8h : 15m : 25s left',
    stock: '4 in stock',
    text3: 'From 1.35 ETH 11/Bid 1.1 w',
    image: 'images/Explore/Explore3.png',
    name: 'Skyblue Creator',
    price: '0.004 ETH',
  },
  {
    user: '@Alex',
    likes: '152',
    time: '8h : 15m : 25s left',
    stock: '4 in stock',
    text3: 'From 1.35 ETH 11/Bid 1.1 w',
    image: 'images/Explore/Explore4.png',
    name: 'Skyblue Creator',
    price: '0.004 ETH',
  },
]
