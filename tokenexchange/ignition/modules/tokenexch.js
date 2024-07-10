const { buildModule} = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("tokenexch", (m) => {

const token = m.contract("SimpleToken");
return { token };
});