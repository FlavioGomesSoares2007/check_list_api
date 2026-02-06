import "./app/database/data-source.js";
import user from "./app/routes/User.Routes.js";
import auth from "./app/routes/Auth.Routes.js";
import task from "./app/routes/Task.Routes.js";
import express from "express";
import cors from "cors";
const app = express();
const port = 3000;
app.use(cors({
    origin: 'https://check-list-cliente.onrender.com',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use("/user", user);
app.use("/login", auth);
app.use("/task", task);
app.listen(port, () => {
    console.log(`sevidor em http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map