var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User.entity.js";
let Task = class Task {
};
__decorate([
    PrimaryGeneratedColumn({ name: "id_list" }),
    __metadata("design:type", Number)
], Task.prototype, "id_list", void 0);
__decorate([
    Column({ name: "nome", type: "varchar", length: 100 }),
    __metadata("design:type", String)
], Task.prototype, "nome", void 0);
__decorate([
    Column({ name: "concluido", type: "boolean", default: false }),
    __metadata("design:type", Boolean)
], Task.prototype, "concluido", void 0);
__decorate([
    ManyToOne(() => User, (user) => user.task),
    JoinColumn({ name: 'id_user' }),
    __metadata("design:type", Object)
], Task.prototype, "id_user", void 0);
Task = __decorate([
    Entity("task")
], Task);
export { Task };
//# sourceMappingURL=Task.entity.js.map