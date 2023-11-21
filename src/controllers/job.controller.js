const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports.createjob = async (req, res) => {
    try {
        const {userId,title} = req.body;
        if (!(userId && title)) {
          return res.status(400).json({ msg: "title and userId is required." });
        }
        const oldUser = await prisma.job.findUnique({
          where: {
            userId: userId,
          },
        });
        if (oldUser) {
          return res.status(409).send({msg:"User Already Create job"});
        }
  
      const user = await prisma.job.create({data : req.body});
  
      res
        .send({ message: "userDetail added sucessfully", token: user})
        .status(200);
    } catch (err) {
      res.status(500).json({ error: "Error registering user" });
    }
  };
  
module.exports.get_users = async (req, res) => {
    try {
    const user = await prisma.job.findMany();
  
      res.send({ msg: "data fetched!!", count: user.length, user });
    } catch {
      res.status(500).json({ error: error });
    }
  };
  