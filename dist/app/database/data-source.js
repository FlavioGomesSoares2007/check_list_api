import { DataSource } from "typeorm";
import { User } from "../model/User.entity.js";
import { Task } from "../model/Task.entity.js";
import "dotenv/config";
export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_SENHA,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: true,
    entities: [User, Task],
    subscribers: [],
    migrations: [],
    extra: {
        ssl: {
            rejectUnauthorized: true,
        },
    },
});
try {
    await AppDataSource.initialize();
    console.log("Banco de dados conectado com sucesso!");
}
catch (error) {
    console.log(error);
}
//# sourceMappingURL=data-source.js.map