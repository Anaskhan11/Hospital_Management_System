import ErrorHandler from "../util/errorHandler.js";
import jwt from "jsonwebtoken";
import Auth from "../Model/authModel.js";

const auth = async (req, res, next) => {
  // const  token  = req.cookies.jwt;
  // if (!token) {
  //   return next(new ErrorHandler("Please LogIn to Access This Resources"));
  // }
  // const decodeData = Jwt.verify(token, process.env.JWT_SECERT);
  // req.patient = await Patient.findById({ _id: decodeData._id });
  // next();
  // console.log(req.cookies);
  try {
    const token = req.cookies.token;
    if (!token) {
      return next(new ErrorHandler("Please Login to Access This Resources"));
    }
    const verifyPatientandDoc = jwt.verify(token, process.env.JWT_SECERT);
    // console.log(verifyPatientandDoc);
    const auth = await Auth.findOne({ _id: verifyPatientandDoc._id });
    // console.log(auth);
    next();
  } catch (error) {
    res.status(401).send(error);
  }
};

export default auth;
