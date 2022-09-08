require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

require("dotenv").config(); //all the key value pairs are being made available due to this lib
require("@nomiclabs/hardhat-ethers");

const { API_URL_KEY, PRIVATE_KEY } = process.env; //environment variables are being loaded here.
module.exports = {
    defaultNetwork: "goerli",
    solidity: "0.8.1",

    networks: {
        goerli: {
            url: API_URL_KEY,
            accounts: [PRIVATE_KEY],
        },
    },
};
