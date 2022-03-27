import User from "../../src/models/user";
import dbConnect from "../../src/utils/dbConnect";

export default async function userHandler(req, res) {
  await dbConnect();
  const {
    body: { email, password },
    method,
  } = req;

  switch (method) {
    case "POST": {
      if (!email || !password) {
        res
          .status(200)
          .json({ result: "error", message: "Please fill all data!" });
      } else {
        User.findOne({ email: email }, function (err, doc) {
          if (!doc) {
            // register;
            const newUser = new User({
              email,
              password,
            });
            newUser.save((err) => {
              if (err) {
                res
                  .status(200)
                  .json({ result: "error", message: "DB save error: " });
              } else {
                res
                  .status(200)
                  .json({ result: "success", data: { email: email } });
              }
            });
          } else {
            // login
            if (password !== doc.password) {
              res
                .status(401)
                .json({ result: "error", message: "Wrong password" });
              return;
            } else {
              res
                .status(200)
                .json({ result: "success", data: { email: email } });
            }
          }
        });
      }
      break;
    }
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
