const express = require("express");
const Menu = require("../model/menu");

const router = new express.Router();

router.post("/menu/create", async (req, res) => {
  try {
    const menu = new Menu({
      ...req.body,
    });
    await menu.save();
    res.status(200).send(menu);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
});

router.get("/menu/all", async(req,res)=>{
    try {
        const menus = await Menu.find()
        
        res.status(200).send(menus)

    } catch (error) {
        console.log(error)
        res.status(400).send(error.message)
    }
})

module.exports = router


