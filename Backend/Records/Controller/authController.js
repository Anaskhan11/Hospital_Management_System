import Auth from "../Model/authModel.js";
import sendToken from "../util/sendToken.js";
import ErrorHandler from "../util/errorHandler.js";

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler("Please Enter Email and Password"));
  }
  const auth = await Auth.findOne({ email }).select("+password");

  if (!auth) {
    return next(new ErrorHandler("User with this email does not exists.", 401));
  }

  //   console.log(password);
  const isPasswordMatched = await auth.comparePassword(password);
  //   console.log(isPasswordMatched);
  if (!isPasswordMatched) {
    return next(new ErrorHandler("invalid Email or Password ", 401));
  }

  sendToken(auth, 200, res);
};

// logout Patient

export const logout = async (req, res) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({
    sucess: true,
    message: "Logged Out Patient",
  });
};
