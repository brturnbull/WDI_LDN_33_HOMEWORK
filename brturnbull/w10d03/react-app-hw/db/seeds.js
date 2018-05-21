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
  },{
    name: 'Alt-J',
    members: ['Joe Newman', 'Thom Sonny Green', 'Gus Unger-Hamilton'],
    origin: {
      name: 'Leeds',
      lat: null,
      lng: null
    },
    genre: 'Experimental Rock',
    image: 'https://yt3.ggpht.com/a-/AJLlDp15AOz93Y6_2eyUbpOcE1G4rqT4jQs06Cj2RQ=s900-mo-c-c0xffffffff-rj-k-no',
    yearFormed: 2007,
    yearBrokenUp: null
  },{
    name: 'Catfish and the Bottlemen',
    members: ['Ryan Evan McCann'],
    origin: {
      name: 'Llandudno',
      lat: null,
      lng: null
    },
    genre: 'Alternative Rock',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Catfish_and_the_Bottlemen_at_Brooklyn_Steel.jpg/440px-Catfish_and_the_Bottlemen_at_Brooklyn_Steel.jpg',
    yearFormed: null,
    yearBrokenUp: null
  },{
    name: 'Dashboard Confessional',
    members: ['Chris Carrabba', 'Scott Schoenbeck', 'Armon Jay', 'Chris Kamrada'],
    origin: {
      name: 'Boca Raton',
      lat: null,
      lng: null
    },
    genre: 'Emo',
    image: 'https://nyoobserver.files.wordpress.com/2016/12/unspecified-1.jpg?quality=80&w=635&h=423',
    yearFormed: 2007,
    yearBrokenUp: null
  },{
    name: 'Blink-182',
    members: ['Mark Hoppus', 'Travis Barker', 'Matt Skiba'],
    origin: {
      name: 'Poway',
      lat: null,
      lng: null
    },
    genre: 'Punk Rock',
    image: 'https://img.wennermedia.com/920-width/rs-96097-26001260-26001264-large.jpg',
    yearFormed: null,
    yearBrokenUp: null
  }])
    .then(bands => console.log(`${bands.length} bands created!`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
