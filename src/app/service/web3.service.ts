import { Injectable } from '@angular/core';
import { Web3 } from 'web3';
import WalletConnect from '@walletconnect/client';
import { ethers } from 'ethers';
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers';
import { web3, Winner, xmasRaffle } from '../../../contractInfo';

@Injectable({
  providedIn: 'root',
})
export class Web3Service {
  private modal: any;
  constructor() {
    this.initializeModal();
  }
  private initializeModal() {
    // 1. Get projectId from https://cloud.walletconnect.com
    const projectId = 'b3013a5aee77ad1242d4649eb78e10dc';
    const mainnet = {
      chainId: 1,
      name: 'Ethereum',
      currency: 'ETH',
      explorerUrl: 'https://etherscan.io',
      rpcUrl: 'https://cloudflare-eth.com',
    };
    //  // 3. Create your application's metadata object
    const metadata = {
      name: 'My Website',
      description: 'My Website description',
      url: 'https://mywebsite.com',
      // url must match your domain & subdomain
      icons: ['https://avatars.mywebsite.com/'],
    };
    // 4. Create Ethers config
    const ethersConfig = defaultConfig({
      /*Required*/ metadata: metadata,
      /*Optional*/ enableEIP6963: true, // true by default
      enableInjected: true, // true by default
      enableCoinbase: true, // true by default rpcUrl: '...', // used for the Coinbase SDK defaultChainId: 1 // used for the Coinbase SDK
    }); // 5. Create a Web3Modal instance
    this.modal = createWeb3Modal({
      ethersConfig,
      chains: [mainnet],
      projectId,
      enableAnalytics: true, // Optional - defaults to your Cloud configuration
      enableOnramp: true, // Optional - false as default
    });
  }

  async connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      let web3 = new Web3(window.ethereum);
      // let accounts = await web3.eth.getAccounts();
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: '0xaa36a7', // Hexadecimal chain ID for Sepolia
            chainName: 'Sepolia',
            nativeCurrency: {
              name: 'SepoliaETH',
              symbol: 'ETH',
              decimals: 18,
            },
            rpcUrls: ['https://rpc.sepolia.org'],
            blockExplorerUrls: ['https://sepolia.etherscan.io'],
          },
        ],
      });
    } else {
      this.modal.open();
    }
  }

  async getConnectedAccount(): Promise<string> {
    if (typeof window.ethereum !== 'undefined') {
      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.getAccounts();
      if (accounts.length === 0) {
        throw new Error('No accounts found. Please connect your wallet.');
      }
      return accounts[0];
    } else {
      throw new Error('MetaMask is not installed.');
    }
  }
  async enterRaffle() {
    try {
      const account = await this.getConnectedAccount();
      await xmasRaffle.methods['enterRaffle']().send({
        from: account,
        value: web3.utils.toWei('0.0004', 'ether'),
      });
    } catch (error) {
      console.error(error);
    }
  }

  async getWinner(): Promise<Winner> {
    try {
      const winner: Winner = await xmasRaffle.methods['getWinner']().call();
      console.log(winner);
      return winner;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

declare let window: any;
