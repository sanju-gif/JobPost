const apiRouter = require("express").Router();

const router = require("./user.router");
const mathRoute = require("./maths.routes");
const apiRouter1 = require("./job.routes")

apiRouter.use(router);
apiRouter.use(mathRoute);
apiRouter.use(apiRouter1);

module.exports = apiRouter;
