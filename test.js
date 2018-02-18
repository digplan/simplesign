const signer = require('./simplesign.js')

console.log('Hash empty string', signer.hash(''))

const public = '18Z98d6Ms4AEXh6ibpmjPyqUpAhfiY4DmN'
const private = '5KhejCafYpYvPTjE6LhL95wdbnA8ABVc66UfdCWtn42qcTVHkgG'
const message = 'hey there world'
sign(message, public, private)
console.log('is valid: ' + signer.isValid(public))
console.log('is valid: ' + signer.isValid(private))
console.log('is valid: ' + signer.isValid('x'))

const newaddress = signer.newAddress()
console.log('New address', newaddress)
sign(message, newaddress.public, newaddress.private)

function sign(msg, pub, pri){
 console.log(`Signing msg ${msg} for public ${pub} and private ${pri}`)
 const sig = signer.sign(msg, pri)
 console.log('Signature', sig)
 const verify = signer.verify(msg, sig, pub)
 console.log('Verified', verify)
 const noverify = signer.verify('hey no', sig, pub)
 console.log('No verify', noverify)
}
