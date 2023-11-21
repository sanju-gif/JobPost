const apiRouter1 = require("express").Router();

const job_end = require("../controllers/job.controller");

apiRouter1.use("/createjob", job_end.createjob)
apiRouter1.use("/getJob", job_end.get_users)

module.exports = apiRouter1;
