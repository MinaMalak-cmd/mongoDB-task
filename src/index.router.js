import connectDB  from "../DB/connection.js";
import seedDB from "../DB/seeds.js";
import noteRouter from "./modules/notes/note.router.js";
import userRouter from "./modules/users/user.router.js";

const bootstrap = async (app, express) => {
  app.use(express.json()); // convert buffer data
  
  await connectDB();

  await seedDB();
  //Setup App Routing
  app.use("/note", noteRouter);
  app.use("/user", userRouter);
  app.use("*", (req, res, next) => {
    return res.json({ message: "In-valid Routing" });
  });
};
export default bootstrap;
