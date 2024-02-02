import express from "express";
import { updateUser, deleteUser, getUser, getUsers , userUpdate, userDelete } from "../controllers/user.js";
import { verifyToken,verifyUser,verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();
// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//     res.send("hello user, you are logged in")
// })

// router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
//     res.send("hello user, you are logged in and you can delete your account")
// })
// router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
//        res.send("hello admin, you are logged in and you can delete all accounts")
//     })

//UPDATE
//router.put("/:id",verifyUser, updateUser);
router.put("/userUpdate", userUpdate);
//DELETE
router.delete("/userDelete", userDelete);

//GET
router.get("/:id",verifyUser, getUser);

//GET ALL
router.get("/",verifyAdmin, getUsers);


export default router;