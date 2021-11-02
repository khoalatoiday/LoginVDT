const User = require("../model/user");
const express = require("express");
const moment = require("moment")
const router = new express.Router();
const auth = require("../middleware/auth")

router.post("/users/create", async (req,res) =>{
    const user = new User(req.body)
    
    try {
      const createAt = moment();
      user.idUser = "MS000" + createAt;
      console.log(user.idUser)
      const token = await user.generateAuthToken();
      res.status(201).send({user, token})
    } catch (error) {
        res.status(400).send(error.message)
    }
})


router.post("/users/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.phoneNumber,
      req.body.password
    );
    const token = await user.generateAuthToken()
    
    res.send({user, token})
    console.log("Đăng nhập thành công")
  } catch (error) {
      console.log(error)
      res.status(400).send(error)
  }
});

router.post("/users/logout", auth, async(req,res)=>{
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save()
    res.status(200).send("Đăng xuất thành công")
  } catch (error) {
    console.log(error)
    res.status(400).send({error: error.message})
  }
})

router.get("/users/me", auth, async(req,res)=>{
  try {
    res.status(200).send(req.user)
  } catch (error) {
    console.log(error)
    res.status(400).send({error:error.message})
  }
})





module.exports = router