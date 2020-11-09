module.exports = {
    authentication:{
        path: "/authentication-service",
        port: process.env.API_AUTHENTICATION_PORT || 8080
    },
    catalogs:{
        path: "/catalogs-service",
        port: process.env.API_CATALOGS_PORT || 8081
    },
    security:{
        path: "/security",
        port: process.env.API_SECURITY_PORT || 8082
    },
    company:{
        path: "/companies-service",
        port: process.env.API_COMPANY_PORT || 8083
    },
    deliveries:{
        path: "/deliveries-service",
        port: process.env.API_DELIVERIES_PORT || 8084,
        token: "E361ECC31F2AAC2066A3103D3B14DC63B5984B028F9F2D09DEE67460CE2702BC81673ACF58109B553324852C62A227D9A75D4C2F686580270FE143048F47C33C"
    }
}