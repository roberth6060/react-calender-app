"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsModel = exports.Events = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const type_graphql_1 = require("type-graphql");
let Events = class Events {
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID),
    __metadata("design:type", String)
], Events.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)({ type: () => String, required: true }),
    __metadata("design:type", String)
], Events.prototype, "title", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)({ type: () => String, required: true }),
    __metadata("design:type", String)
], Events.prototype, "description", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typegoose_1.prop)({ type: String, required: false }),
    __metadata("design:type", String)
], Events.prototype, "backgroundColor", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)({ required: true, default: Date.now }),
    __metadata("design:type", Date)
], Events.prototype, "createdAt", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)({ required: true, default: Date.now }),
    __metadata("design:type", Date)
], Events.prototype, "updatedAt", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)({ type: () => String, required: true }),
    __metadata("design:type", String)
], Events.prototype, "startDate", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)({ type: () => String, required: true }),
    __metadata("design:type", String)
], Events.prototype, "endDate", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)({ type: () => String, required: true }),
    __metadata("design:type", String)
], Events.prototype, "startTime", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)({ type: () => String, required: true }),
    __metadata("design:type", String)
], Events.prototype, "endTime", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)({ type: () => Boolean, required: true }),
    __metadata("design:type", Boolean)
], Events.prototype, "recurring", void 0);
Events = __decorate([
    (0, type_graphql_1.ObjectType)({ description: "The Events Model" }),
    (0, typegoose_1.modelOptions)({ schemaOptions: { collection: "events", timestamps: true } })
], Events);
exports.Events = Events;
exports.EventsModel = (0, typegoose_1.getModelForClass)(Events);
//# sourceMappingURL=events.model.js.map