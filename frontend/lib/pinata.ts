"server only"

import { PinataSDK } from "pinata";

export const pinata = new PinataSDK({
  pinataJwt: `${process.env.PINATA_JWT_TOKEN}`,
  pinataGateway: `${process.env.PINATA_GATEWAYS_URL}`,
});
