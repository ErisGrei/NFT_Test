import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.19",

  networks: {
    sepolia:{
      url: 'https://eth-sepolia.g.alchemy.com/v2/7NkOhetv9AIe3LmoX8BIe0RBTN5q7tDM', //from alchemy
      accounts:['c4bc9d97c2a129b70dc390f24c50bbc9d22af1683f2bfd088d952a98fa5ec156'] // private metamask
    },

  },
  etherscan:{
    apiKey: 'D3WMX94DMB1PBE5D4V2EK9GSHF82VNVEMS', // from etherscan.io
  },

};
export default config;