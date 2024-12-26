import { Web3 } from 'web3';

export const contractAddress = '0x6a11343855c4Cc5cb5aBB0fB6272Eea1aB2079a6';

export const web3 = new Web3(window.ethereum);
export const ABI =[
  {
      "type": "constructor",
      "inputs": [
          {
              "name": "intializationObject",
              "type": "tuple",
              "internalType": "struct Type.InitiazationObject",
              "components": [
                  {
                      "name": "vrf",
                      "type": "address",
                      "internalType": "address"
                  },
                  {
                      "name": "key_hash",
                      "type": "bytes32",
                      "internalType": "bytes32"
                  }
              ]
          }
      ],
      "stateMutability": "nonpayable"
  },
  {
      "type": "fallback",
      "stateMutability": "payable"
  },
  {
      "type": "receive",
      "stateMutability": "payable"
  },
  {
      "type": "function",
      "name": "acceptOwnership",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "checkUpKeep",
      "inputs": [
          {
              "name": "",
              "type": "bytes",
              "internalType": "bytes"
          }
      ],
      "outputs": [
          {
              "name": "upKeepNeeded",
              "type": "bool",
              "internalType": "bool"
          },
          {
              "name": "",
              "type": "bytes",
              "internalType": "bytes"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "enterRaffle",
      "inputs": [],
      "outputs": [],
      "stateMutability": "payable"
  },
  {
      "type": "function",
      "name": "getKeyhash",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "bytes32",
              "internalType": "bytes32"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "getOwner",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "address",
              "internalType": "address"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "getPlayers",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "address[]",
              "internalType": "address payable[]"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "getWinner",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "tuple",
              "internalType": "struct XmasGame.Winner",
              "components": [
                  {
                      "name": "winner",
                      "type": "address",
                      "internalType": "address payable"
                  },
                  {
                      "name": "amount",
                      "type": "uint256",
                      "internalType": "uint256"
                  }
              ]
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "getvrf",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "address",
              "internalType": "address"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "owner",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "address",
              "internalType": "address"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "rawFulfillRandomWords",
      "inputs": [
          {
              "name": "requestId",
              "type": "uint256",
              "internalType": "uint256"
          },
          {
              "name": "randomWords",
              "type": "uint256[]",
              "internalType": "uint256[]"
          }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "s_vrfCoordinator",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "address",
              "internalType": "contract IVRFCoordinatorV2Plus"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "setCoordinator",
      "inputs": [
          {
              "name": "_vrfCoordinator",
              "type": "address",
              "internalType": "address"
          }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "setSubId",
      "inputs": [
          {
              "name": "_subscriptionId",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "transferOwnership",
      "inputs": [
          {
              "name": "to",
              "type": "address",
              "internalType": "address"
          }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
  },
  {
      "type": "event",
      "name": "CoordinatorSet",
      "inputs": [
          {
              "name": "vrfCoordinator",
              "type": "address",
              "indexed": false,
              "internalType": "address"
          }
      ],
      "anonymous": false
  },
  {
      "type": "event",
      "name": "OwnershipTransferRequested",
      "inputs": [
          {
              "name": "from",
              "type": "address",
              "indexed": true,
              "internalType": "address"
          },
          {
              "name": "to",
              "type": "address",
              "indexed": true,
              "internalType": "address"
          }
      ],
      "anonymous": false
  },
  {
      "type": "event",
      "name": "OwnershipTransferred",
      "inputs": [
          {
              "name": "from",
              "type": "address",
              "indexed": true,
              "internalType": "address"
          },
          {
              "name": "to",
              "type": "address",
              "indexed": true,
              "internalType": "address"
          }
      ],
      "anonymous": false
  },
  {
      "type": "error",
      "name": "OnlyCoordinatorCanFulfill",
      "inputs": [
          {
              "name": "have",
              "type": "address",
              "internalType": "address"
          },
          {
              "name": "want",
              "type": "address",
              "internalType": "address"
          }
      ]
  },
  {
      "type": "error",
      "name": "OnlyOwnerOrCoordinator",
      "inputs": [
          {
              "name": "have",
              "type": "address",
              "internalType": "address"
          },
          {
              "name": "owner",
              "type": "address",
              "internalType": "address"
          },
          {
              "name": "coordinator",
              "type": "address",
              "internalType": "address"
          }
      ]
  },
  {
      "type": "error",
      "name": "Raffle_upkeepNotNeeded",
      "inputs": [
          {
              "name": "balance",
              "type": "uint256",
              "internalType": "uint256"
          },
          {
              "name": "player",
              "type": "uint256",
              "internalType": "uint256"
          },
          {
              "name": "raffleState",
              "type": "uint256",
              "internalType": "uint256"
          },
          {
              "name": "elapsedTime",
              "type": "uint256",
              "internalType": "uint256"
          }
      ]
  },
  {
      "type": "error",
      "name": "ZeroAddress",
      "inputs": []
  },
  {
      "type": "error",
      "name": "paymentFailed",
      "inputs": []
  },
  {
      "type": "error",
      "name": "raffle_Notended",
      "inputs": []
  }
];

export const xmasRaffle = new web3.eth.Contract(ABI, contractAddress);

export interface Winner {
  winner: string;
  amount: number;
}
