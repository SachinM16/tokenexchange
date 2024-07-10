require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks:{
    hardhat:{},
    sepolia:{
      url:"https://sepolia.infura.io/v3/fde5357a7d7e46bf9cf74f7f0a1d56d8",
      accounts:['b382b88e8de3f73f397f22a7723ad7dee5172e341372e65ddabcce565edee927']
    }
  }
};
