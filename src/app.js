const express = require("express");
const app = express();
const path = require("path");
require("./db/connection");
const Register = require("./models/register");
const port = process.env.PORT ;
const staticPath = path.join(__dirname, "../public");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(staticPath, "register.html"));
});

app.post("/register", async (req, res) => {
  try {
    const password = req.body.password;
    const repassword = req.body.repassword;
    const existingUser = await Register.findOne({ email: req.body.email });

    if (!existingUser) {
      if (password === repassword) {
        const registration = new Register({
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          email: req.body.email,
          password: req.body.password,
          repassword: req.body.repassword,
          gender: req.body.gender,
          country: req.body.country
        });

        const registered = await registration.save();
        res.status(201).sendFile(path.join(staticPath, "index.html"));
      } else {
        res.sendFile(path.join(staticPath, "error.html"));
      }
    } else {
      res.send("user already exist");
    }
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

app.listen(port, () => {
  console.log(`server running at port no ${port}`);
});
