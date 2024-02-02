import User from "../models/User.js";

export const updateUser = async (req, res, next) => {
  try {
    console.log(req.params.id);
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
}
export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.body;
    console.log("dfsvs");
    console.log(id);
    await User.findByIdAndDelete(id);
    res.status(200).json("User has been deleted.");
  } catch (err) {
    next(err);
  }
}
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
}
export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
}
export const userUpdate = async (req, res, next) => {
  try {
    const { id } = req.body;
    const { user } = req.body
    console.log(id);
    console.log(req.body);
    const updatedUser = await User.findByIdAndUpdate(id, {
      $set: req.body.user
    }


    );
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
}

export const userDelete = async (req, res, next) => {
  try {
    // const { id } = req.params;
    // console.log(id);
    // console.log("sd");
    // await User.deleteOne({_id:id});
    // res.status(200).json("User Deleted");
    console.log("Delete");
  } catch (err) {
    next(err);
  }
}