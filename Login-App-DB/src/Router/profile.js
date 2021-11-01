const express = require("express");
const Profile = require("../model/profile");
const auth = require("../middleware/auth");
const multer = require("multer");
const sharp = require("sharp");

const router = new express.Router();

// const cors = require("cors");
// router.use(cors());
router.get("/profile/me", auth, async (req, res) => {
  try {
    await req.user.populate("myProfile");
    const profile = await Profile.findById(req.user.myProfile[0]._id);
    res.status(200).send(profile);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.post("/profile/create", auth, async (req, res) => {
  try {
    const profile = new Profile({
      ...req.body,
      owner: req.user._id,
    });
    await profile.save();
    res.status(200).send(profile);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.post("/users/logoutAll", auth, async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.send(req.user);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: error.message });
  }
});

router.patch("/profile/upload", auth, async (req, res) => {
  try {
    const allowUpdateKey = ["yourname", "address", "idCard", "date"];
    const updateKeys = Object.keys(req.body);
    const isValidate = updateKeys.every((updateKey) =>
      allowUpdateKey.includes(updateKey)
    );

    if (!isValidate) {
      return res
        .status(400)
        .send({ error: "Invalid Update, Please upload again" });
    }

    await req.user.populate("myProfile");

    const myProfile = await Profile.findById(req.user.myProfile[0]._id);

    //console.log(myProfile);

    updateKeys.forEach(
      (updateKey) => (myProfile[updateKey] = req.body[updateKey])
    );

    await myProfile.save();
    res.status(200).send(myProfile);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error });
  }
});

const upload = multer({
  limits: 10000000,
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg||jpeg||png)$/)) {
      return cb(new Error("Please upload one of these file: jpg,jpeg,png"));
    }
    cb(undefined, true);
  },
});

// .resize({ width: 250, height: 250 }) ? need to resize

router.post(
  "/profile/me/image",
  auth,
  upload.single("image"),
  async (req, res) => {
    try {
      console.log(req.file);
      const imageSharp = await sharp(req.file.buffer).toBuffer();
      await req.user.populate("myProfile");

      const myProfile = await Profile.findById(req.user.myProfile[0]._id);
      myProfile.image = imageSharp;
      await myProfile.save();
      res.status(200).send(myProfile);
    } catch (error) {
      console.log(error);
      res.status(400).send({ error: error.message });
    }
  }
);

router.post(
  "/profile/idCardImage/front",
  auth,
  upload.single("imageIdCardFront"),
  async (req, res) => {
    try {
      console.log(req.file); // req.file là attri cung cấp bởi multer
      const imageSharp = await sharp(req.file.buffer).toBuffer();

      await req.user.populate("myProfile");

      const myProfile = await Profile.findById(req.user.myProfile[0]._id);
      myProfile.frontIdCard = imageSharp;
      await myProfile.save();
      res.status(200).send(myProfile);
    } catch (error) {
      console.log(error);
      res.status(400).send({ error: error.message });
    }
  }
);

router.post(
  "/profile/idCardImage/back",
  auth,
  upload.single("imageIdCardBack"),
  async (req, res) => {
    try {
      console.log(req.file); // req.file là attri cung cấp bởi multer
      const imageSharp = await sharp(req.file.buffer).toBuffer();
      await req.user.populate("myProfile");
      const myProfile = await Profile.findById(req.user.myProfile[0]._id);
      myProfile.backIdCard = imageSharp;
      await myProfile.save();
      res.status(200).send(myProfile);
    } catch (error) {
      console.log(error);
      res.status(400).send({ error: error.message });
    }
  }
);

router.get("/anything", (req, res) => {
  try {
    res.send("Hello World");
  } catch (error) {}
});

module.exports = router;
