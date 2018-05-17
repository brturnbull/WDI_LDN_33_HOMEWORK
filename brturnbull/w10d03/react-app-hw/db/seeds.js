const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');
const Band = require('../models/band');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();

  Band.create([{
    name: 'The Wombats',
    members: ['Matthew Murphy', 'Dan Haggis', 'Tord Overland Knudsen'],
    origin: {
      name: 'Liverpool',
      lat: null,
      lng: null
    },
    genre: 'Indie rock',
    image: 'https://pbs.twimg.com/profile_images/939100274349789184/zJl0juRy_400x400.jpg',
    yearFormed: 2003,
    yearBrokenUp: null
  },{
    name: 'The Streets',
    members: ['Mike Skinner'],
    origin: {
      name: 'Birmingham',
      lat: null,
      lng: null
    },
    genre: 'UK Garage',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqiTmLMmoofBvIKCbcjWYlVAvzYYFRpo_9gHHQ-UZOJHak4rlc',
    yearFormed: 1994,
    yearBrokenUp: null
  },{
    name: 'Arctic Monkeys',
    members: ['Alex Turner', 'Matt Helders', 'Jamie Cook', 'Nick O\'Malley'],
    origin: {
      name: 'Sheffield',
      lat: null,
      lng: null
    },
    genre: 'Indie Rock',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Arctic_Monkeys_-_Orange_Stage_-_Roskilde_Festival_2014.jpg/600px-Arctic_Monkeys_-_Orange_Stage_-_Roskilde_Festival_2014.jpg',
    yearFormed: 2002,
    yearBrokenUp: null
  }])
    .then(bands => console.log(`${bands.length} bands created!`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
