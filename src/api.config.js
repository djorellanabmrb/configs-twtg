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
        port: process.env.API_DELIVERY_PORT || 8084
    },
    order:{
        path: "/orders-service",
        port: process.env.API_ORDER_PORT || 8085
    }
}