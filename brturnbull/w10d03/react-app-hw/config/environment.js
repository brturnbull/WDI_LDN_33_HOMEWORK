const port = process.env.PORT || 4000;
const dbURI = process.env.MONGODB_URI ||'mongodb://localhost/bandcity';

module.exports = { port, dbURI };
