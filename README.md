# Configurations of environments
This is package to set the environments configurations of the services:
## Firebase
These are environments to connect to firebase (You could find in your firebase, then click in settings and select project configurations, then choose services account and generate new admin sdk):
* FIREBASE_TYPE: services of firebase
* FIREBASE_PROJECT_ID: Id of your firebase
* FIREBASE_PRIVATE_KEY_ID: identification of private key of your firebase
* FIREBASE_PRIVATE_KEY: value of private key of your firebase
* FIREBASE_CLIENT_EMAIL: email to associate your firebase
* FIREBASE_CLIENT_ID: your user identification in firebase
* FIREBASE_AUTH_URI: Uri of your authentification.
* FIREBASE_AUTH_URI: Toke to access the service authentification
* FIREBASE_AUTH_PROVIDER_X509_CERT_URL: Certification provider:
* FIREBASE_CLIENT_X509_CERT_URL: Certification to client
## Sequelize
these are environments to connect to SQL:
* SEQUELIZE_USERNAME: username to connect your sql database.
* SEQUELIZE_PASSWORD: password of the user to connect your sql database.
* SEQUELIZE_DATABASE: database name to connect your sql.
* SEQUELIZE_HOST: public host to access your sql database.
* SEQUELIZE_DIALECT: Type of database (postgresql, mysql).
* SEQUELIZE_PORT: Port to connect your database.
## API
these are environment general of your service.
* API_PORT: out port
## Mongo
These are enviroment to connect your mongo
* MONGO_USERNAME: username to connect your mongo
* MONGO_PASSWORD: password of the username.
* MONGO_DATABASE: name of your database no sql
* MONGO_HOST: public host to accesss your mongo
* MONGO_PORT: port to access your mongo
## Pagination
these are environments general to create an pagination:
* PAGINATION_SKIP: Offset by default
* PAGINATION_LIMIT: count of registers
* PAGINATION_SORT: ASC or DESC