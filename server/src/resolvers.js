module.exports = {
  Query: {
    jobs(_, {input}, {models}) {
      return models.Job.findMany(input || {})
    }
  }
}