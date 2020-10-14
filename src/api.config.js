module.exports = {
    authentication:{
        path: "/authentication",
        port: process.env.API_AUTHENTICATION_PORT || 8080
    },
    catalogs:{
        path: "/catalogs",
        port: process.env.API_CATALOGS_PORT || 8081
    },
    security:{
        path: "/security",
        port: process.env.API_SECURITY_PORT || 8082
    },
    company:{
        path: "/companies",
        port: process.env.API_COMPANY_PORT || 8083
    }
}