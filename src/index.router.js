import connectDB from "../DB/connection.js";
import seedDB from "../DB/seeds.js";
import noteRouter from "./modules/notes/note.router.js";
import userRouter from "./modules/users/user.router.js";
import isAuthorized from "./modules/users/controllers/auth.js";

const bootstrap = async (app, express, session) => {
  app.use(express.json()); // convert buffer data

  // Database connection and seeding
  await connectDB();
  await seedDB();


  //Setup App Routing
  app.use("/note", isAuthorized, noteRouter);
  app.use("/user", userRouter);
  app.use("*", (req, res, next) => {
    return res.json({ message: "In-valid Routing" });
  });
};
export default bootstrap;
