module.exports = {
    algorithm: process.env.CRYPT_ALGORITHM,
    secretKey: process.env.CRYPT_SECRETKEY,
    iv: Number(process.env.CRYPT_IV)
}