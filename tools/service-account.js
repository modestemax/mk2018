const serviceAccount_kamto18 = require('./kamto18-service-account');
const databaseURL_kamto18 = 'https://kamto-2018.firebaseio.com';
const dir_kamto18 = 'kamto18';

const serviceAccount_kamto18_dev = require('./kamto18-dev-service-account');
const databaseURL_kamto18_dev = "https://kamto18-dev.firebaseio.com";
const dir_kamto18_dev = 'kamto18_dev';


const serviceAccount_ballots = require('./ballots-237-service-account');
const databaseURL_ballots= "https://ballots-237.firebaseio.com";
const dir_ballots = 'ballots';

const serviceAccount_ballots_stat = require('./ballots-stats-service-account');
const databaseURL_ballots_stat= "https://ballots-237-stats.firebaseio.com";
const dir_ballots_stat = 'ballots_stat';


module.exports = {
  serviceAccount_kamto18, databaseURL_kamto18, dir_kamto18,
  serviceAccount_kamto18_dev, databaseURL_kamto18_dev, dir_kamto18_dev,
  serviceAccount_ballots, databaseURL_ballots, dir_ballots,
  serviceAccount_ballots_stat, databaseURL_ballots_stat, dir_ballots_stat,
}
