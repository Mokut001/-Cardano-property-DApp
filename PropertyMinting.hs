{-# LANGUAGE DataKinds           #-}
{-# LANGUAGE ImportQualified     #-}
{-# LANGUAGE NoImplicitPrelude   #-}
{-# LANGUAGE OverloadedStrings   #-}
{-# LANGUAGE TemplateHaskell     #-}
{-# LANGUAGE TypeApplications    #-}

module PropertyMinting where

import           Plutus.V2.Ledger.Api
import           Plutus.V2.Ledger.Contexts
import           PlutusTx
import           PlutusTx.Prelude          hiding (Semigroup (..), unless)

{-# INLINABLE mkPolicy #-}
mkPolicy :: PubKeyHash -> () -> ScriptContext -> Bool
mkPolicy adminPKH _ ctx = 
    traceIfFalse "Unauthorized: Not Admin" isSignedByAdmin
  where
    info = scriptContextTxInfo ctx
    isSignedByAdmin = txSignedBy info adminPKH

policy :: PubKeyHash -> MintingPolicy
policy admin = mkMintingPolicyScript $
    $$(PlutusTx.compile [|| mkPolicy ||])
    `PlutusTx.applyCode`
    PlutusTx.liftCode admin