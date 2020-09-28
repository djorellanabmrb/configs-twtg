module.exports = {
    secret: (process.env.JWT_SECRET) ? process.env.JWT_SECRET.replace(/\\n/g, '\n') : "",
    serviceAccountEmail:  process.env.JWT_SERVICE_ACCOUNT_EMAIL,
    expTime: Number(process.env.JWT_EXP_TIME)
}