var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, Unique, } from "typeorm";
import { Task } from "./Task.entity.js";
let User = class User {
};
__decorate([
    PrimaryGeneratedColumn({ name: "id_user" }),
    __metadata("design:type", Number)
], User.prototype, "id_user", void 0);
__decorate([
    Column({ name: "email", type: "varchar", length: 200 }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    Column({ name: "senha_hash", type: "text" }),
    __metadata("design:type", String)
], User.prototype, "senha_hash", void 0);
__decorate([
    CreateDateColumn({ name: "criado_em" }),
    __metadata("design:type", Date)
], User.prototype, "criado_em", void 0);
__decorate([
    OneToMany(() => Task, (task) => task.id_user),
    __metadata("design:type", Object)
], User.prototype, "task", void 0);
User = __decorate([
    Entity("user"),
    Unique(["email"])
], User);
export { User };
//# sourceMappingURL=User.entity.js.map