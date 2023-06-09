const sendToken = (auth, statusCode, res) => {
  const token = auth.getJWTToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  res.status(statusCode).cookie(`token`, token, options).json({
    sucess: true,
    token,
  });
};

export default sendToken;
