const nanoid = require('nanoid');

const createJobModel = db => {
  return {
    findMany(filter) {
      return db.get('jobs')
        .filter(filter)
        .orderBy(['id'], ['asc'])
        .value()
    },
    findOne(filter) {
      return db.get('jobs')
        .find(filter)
        .value()
    },
  }
}

module.exports = createJobModel