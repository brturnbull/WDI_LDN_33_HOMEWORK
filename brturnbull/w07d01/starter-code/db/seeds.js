const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const {dbURI} = require('../config/environment');

const Thing = require('../models/thing');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();

  Thing.create([{
    name: 'Eastern Brown Snake',
    scientificName: 'Pseudonaja textilis',
    dangerRating: '8/10',
    image: 'https://i.amz.mshcdn.com/iNQjyv8W_KxKFNFoj4wErOdf3GU=/fit-in/1200x9600/http%3A%2F%2Fmashable.com%2Fwp-content%2Fuploads%2F2015%2F08%2Fbrownsnake-640x360.jpg'
  },{
    name: 'Funnel Web Spider',
    scientificName: 'Atrax robustus',
    dangerRating: '8/10',
    image: 'https://i.amz.mshcdn.com/B5ZqMX1OljWMx2gqnNTrIGoUB08=/fit-in/1200x9600/http%3A%2F%2Fmashable.com%2Fwp-content%2Fuploads%2F2015%2F08%2Ffunnelweb-640x359.jpg'
  },{
    name: 'Blue Ringed Octopus',
    scientificName: 'Hapalochlaena',
    dangerRating: '7/10',
    image: 'http://www.slate.com/content/dam/slate/articles/health_and_science/wild_things/2015/06/150623_WILD_Octopus.jpg.CROP.promo-mediumlarge.jpg'
  },{
    name: 'Drop Bear',
    scientificName: 'Thylarctos plummetus',
    dangerRating: '10/10',
    image: 'https://s.yimg.com/uu/api/res/1.2/.kivxXTC4S8ZjT9ci3w0JQ--~B/aD00ODA7dz03MjA7c209MTthcHBpZD15dGFjaHlvbg--/http://media.zenfs.com/en-US/homerun/news.mashable/5b8aa29d397cae59624a4a618e30e337'
  },{
    name: 'Box Jellyfish',
    scientificName: 'Chironex fleckeri',
    dangerRating: '10/10',
    image: 'https://i.amz.mshcdn.com/a8ctgGvsX6xIZtBxqADe-zbkf2Y=/fit-in/1200x9600/http%3A%2F%2Fmashable.com%2Fwp-content%2Fuploads%2F2015%2F08%2Fboxjellyfish1-640x359.jpg'
  }])
    .then(things => console.log(`${things.length} deadly animals created!`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
