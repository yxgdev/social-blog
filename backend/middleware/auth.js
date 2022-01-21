import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    const isOurLogin = token.length < 500;

    let decodedData;
    if (token && isOurLogin) {
      decodedData = jwt.verify(token, "a secret");

      //   storing
      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);

      // Storing
      req.userId = decodedData?.sub;
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
