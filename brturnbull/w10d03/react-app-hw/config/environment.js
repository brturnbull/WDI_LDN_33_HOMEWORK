const port = process.env.PORT || 4000;
const dbURI = process.env.MONGODB_URI ||'mongodb://localhost/bandcity';
const secret = process.env.SECRET || 'yummy';

module.exports = { port, dbURI, secret };
