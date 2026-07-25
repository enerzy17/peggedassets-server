const chainContracts = {
  base: {
    issued: ["0x5C2EfdF0D8D286959b42308966bc2B97f5680AA3"],
    // kUSD returned by redeemers is transferred INTO the PSM contracts and is
    // not burned, so it accumulates there as protocol-held inventory that no
    // external account holds. Counting it as circulating overstates supply
    // against the USDC reserves that back it.
    unreleased: [
      "0xFf3025ec18e301855aB0f36Ec6ECa115a29A5Fbc", // redeem-reserve PSM
      "0x07eBb486e11BD217e6085eb5ab663e4517595993", // retired mint PSM
      "0xaBDE1138aa1Ce88d1dF06422C0c3b05D70569803", // live mint PSM
    ],
  },
};

import { addChainExports } from "../helper/getSupply";
const adapter = addChainExports(chainContracts);
export default adapter;
