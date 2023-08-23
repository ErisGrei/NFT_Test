import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.19",

  networks: {
    mumbai:{
      url: 'https://polygon-mumbai.g.alchemy.com/v2/vSDS0wq-qBFUhPzkQ2RbISboYyfV7oOO', //from alchemy
      accounts:['c4bc9d97c2a129b70dc390f24c50bbc9d22af1683f2bfd088d952a98fa5ec156'] // private metamask
    },

  },
  etherscan:{
    apiKey: 'XFA8TMYB376RXZA8UMKUTA4NJB7ZBBM9KN', // from etherscan.io for sepolia and from polygonscan for mumbai
  },

};
export default config;