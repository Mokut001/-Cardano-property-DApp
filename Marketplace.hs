{-# LANGUAGE DataKinds           #-}
{-# LANGUAGE ImportQualified     #-}
{-# LANGUAGE NoImplicitPrelude   #-}
{-# LANGUAGE OverloadedStrings   #-}
{-# LANGUAGE TemplateHaskell     #-}
{-# LANGUAGE TypeApplications    #-}

module PropertyMarketplace where

import           Plutus.V2.Ledger.Api
import           Plutus.V2.Ledger.Contexts
import           PlutusTx
import           PlutusTx.Prelude          hiding (Semigroup (..), unless)

data PropertyDatum = PropertyDatum
    { sellerPKH :: PubKeyHash
    , price     :: Integer -- Lovelace per share
    }
PlutusTx.unstableMakeIsData ''PropertyDatum

data MarketplaceRedeemer = Buy | Withdraw
PlutusTx.unstableMakeIsData ''MarketplaceRedeemer

{-# INLINABLE mkValidator #-}
mkValidator :: PropertyDatum -> MarketplaceRedeemer -> ScriptContext -> Bool
mkValidator dat redeemer ctx = case redeemer of
    Buy -> 
        let info = scriptContextTxInfo ctx
            -- Verify the seller receives the price
            paidToSeller = any (\o -> txOutAddress o == (pubKeyHashAddress (sellerPKH dat)) && valueOf (txOutValue o) adaSymbol adaToken >= price dat) (txInfoOutputs info)
        in traceIfFalse "Seller not correctly compensated" paidToSeller
    Withdraw ->
        traceIfFalse "Only the original seller can withdraw listing" (txSignedBy (scriptContextTxInfo ctx) (sellerPKH dat))

validator :: Validator
validator = mkValidatorScript $$(PlutusTx.compile [|| mkValidator ||])