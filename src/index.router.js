// import { connectDB } from "../DB/connection.js";
import noteRouter from "./modules/notes/note.router.js";

const bootstrap = (app, express) => {
  app.use(express.json()); // convert buffer data

//   connectDB();
  //Setup App Routing
  app.use("/note", noteRouter);
  app.use("*", (req, res, next) => {
    return res.json({ message: "In-valid Routing" });
  });
};
export default bootstrap;
