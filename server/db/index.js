const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('jobs.json');
const db = low(adapter);

const createJobModel = require('./job');

module.exports = {
  models: {
    Job: createJobModel(db)
  },
  db
}