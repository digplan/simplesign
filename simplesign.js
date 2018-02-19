var bitcore = require('bitcore-lib')
var message = require('bitcore-message')

const simplesign = module.exports = {
  newAddress: ()=>{
    const priv = new bitcore.PrivateKey()
    const addr = priv.toAddress()
    return {
      'public': String(addr),
      'private': priv.toWIF()
    }
  },
  sign: (msg, priv)=>{
    if(typeof priv === 'string')
      priv = new bitcore.PrivateKey(priv)
    return new message(msg).sign(priv)
  },
  verify: (msg, sig, pub)=>{
    var v
    try {
      v = new message(msg).verify(pub, sig)
    } catch(e) {
      return false
    }
    return v
  },
  hash: (value)=>{
    value = new Buffer(value)
    return bitcore.crypto.Hash.sha256(value).toString('hex')
  },
  isValid: (s)=>{
    if(bitcore.Address.isValid(s))
      return 'public'
    if(bitcore.PrivateKey.isValid(s))
      return 'private'
    return false
  }
}

