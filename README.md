# Simplesign

Sign and verify messages with public/private keys.  Uses bitcoin addresses and private keys in WIF format.    

````
const signer = require('simplesign')
signer.newAddress()
signer.sign(msg, privatekey)
signer.verify(msg, signature, public)
signer.hash(value)
````
