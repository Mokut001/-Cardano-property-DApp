import { Lucid, Blockfrost, Network } from "lucid-cardano";

export const initLucid = async (network: Network = "Preview") => {
  const blockfrostApiKey = process.env.NEXT_PUBLIC_BLOCKFROST_API_KEY;
  const blockfrostUrl = network === "Mainnet" 
    ? "https://cardano-mainnet.blockfrost.io/api/v0" 
    : "https://cardano-preview.blockfrost.io/api/v0";

  return await Lucid.new(
    new Blockfrost(blockfrostUrl, blockfrostApiKey!),
    network
  );
};