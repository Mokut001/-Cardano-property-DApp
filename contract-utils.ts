import { Lucid, Data, UTxO } from "lucid-cardano";

const PropertyDatumSchema = Data.Object({
  seller: Data.String,
  price: Data.BigInt,
});

export const listProperty = async (lucid: Lucid, scriptAddr: string, priceLovelace: number) => {
  const pkh = lucid.utils.getAddressDetails(await lucid.wallet.address()).paymentCredential?.hash!;
  const datum = Data.to({
    seller: pkh,
    price: BigInt(priceLovelace),
  }, PropertyDatumSchema);

  const tx = await lucid.newTx()
    .payToContract(scriptAddr, { inline: datum }, { lovelace: BigInt(2000000) }) // Min ADA + Assets
    .complete();
  
  const signed = await tx.sign().complete();
  return await signed.submit();
};