import { Router } from "express";
import appointmentsRouter from "./appointments.routes";
import userRouters from "./users.routes";
import sessionsRouter from "./sessions.routes";

const routes = Router();

routes.use("/appointments", appointmentsRouter);
routes.use("/users", userRouters);
routes.use("/sessions", sessionsRouter);

export default routes;
