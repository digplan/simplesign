var bitcore = require('bitcore-lib')
var message = require('./message.js')
const fs = require('fs')

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
    if(fs.existsSync(msg))
      msg = fs.readFileSync(msg).toString('base64')
    if(typeof priv === 'string')
      priv = new bitcore.PrivateKey(priv)
    return new message(msg).sign(priv)
  },
  verify: (msg, sig, pub)=>{
    var v
    if(fs.existsSync(msg))
      msg = fs.readFileSync(msg).toString('base64')
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

if(!module.parent){
 console.log(simplesign[process.argv[2]].apply(this, process.argv.slice(3)))
}
