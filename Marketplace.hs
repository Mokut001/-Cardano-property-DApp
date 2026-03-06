{-# LANGUAGE DataKinds           #-}
{-# LANGUAGE NoImplicitPrelude   #-}
{-# LANGUAGE TemplateHaskell     #-}
{-# LANGUAGE TypeApplications    #-}

module Marketplace where

import           Plutus.V2.Ledger.Api
import           Plutus.V2.Ledger.Contexts
import           PlutusTx
import           PlutusTx.Prelude          hiding (Semigroup (..), unless)

data PropertyDatum = PropertyDatum
    { seller :: PubKeyHash
    , price  :: Integer -- Price in Lovelace per fraction
    }
PlutusTx.unstableMakeIsData ''PropertyDatum

data MarketplaceRedeemer = Buy | Withdraw
PlutusTx.unstableMakeIsData ''MarketplaceRedeemer

{-# INLINABLE mkValidator #-}
mkValidator :: PropertyDatum -> MarketplaceRedeemer -> ScriptContext -> Bool
mkValidator dat redeemer ctx = case redeemer of
    Buy -> 
        let info = scriptContextTxInfo ctx
            paidToSeller = any (\\o -> txOutAddress o == (pubKeyHashAddress (seller dat)) && valueOf (txOutValue o) adaSymbol adaToken >= price dat) (txInfoOutputs info)
        in traceIfFalse "Seller not paid" paidToSeller
    Withdraw ->
        traceIfFalse "Only seller can withdraw" (txSignedBy (scriptContextTxInfo ctx) (seller dat))

validator :: Validator
validator = mkValidatorScript $$(PlutusTx.compile [|| mkValidator ||])