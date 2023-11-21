const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.create = async (req, res) => {
    try {
      const {email,name} = req.body;
      if (!(email && name)) {
        return res.status(400).json({ msg: "Username and Email is required." });
      }
      const oldUser = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });
      if (oldUser) {
        return res.status(409).send({msg:"userDetail Already Exist. Please Login"});
      }

      const user = await prisma.user.create({data : req.body});
  
      return res
        .send({ message: "userDetail added sucessfully", token: user})
        .status(200);
    } catch (err) {
      return res.send({ error: "Error registering user" });
    }
  };
  
  exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email) {
        return res.status(400).json({ msg: "Username and Email is required." });
      }
      const user = await userDetail.findOne({
        include: [{ model: userRole }],
        where: { email },
      });
  
      if (!user) {
        return res.status(401).send({ error: "Unauthorized user!!!!" });
      }
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ error: "Invalid Password" });
      }
  
      const jwtToken = jwt.sign(
        { userId: user.id, role: user.userRole.role },
        secretKey,
        {
          expiresIn: "1h",
        },
      );
      return res.send({ message: "Login sucessfully", jwtToken }).status(200);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Error logging in user" });
    }
  };
  
  exports.get_users = async (req, res) => {
    try {
    const user = await prisma.user.findMany();
  
    res.send({ msg: "data fetched!!", count: user.length, user });
    } catch {
      res.status(500).json({ error: error });
    }
  };
  