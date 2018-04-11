const mongoose = require('mongoose');

const databaseURI = 'mongodb://localhost/seeding-data';

const Burger = require('..models/burgers');

Burger.collection.drop();
