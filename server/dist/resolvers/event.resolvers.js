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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventResolver = void 0;
const type_graphql_1 = require("type-graphql");
const events_model_1 = require("../models/events.model");
const events_input_1 = require("./types/events-input");
let EventResolver = class EventResolver {
    async getEventsById(id) {
        return await events_model_1.EventsModel.findById({ _id: id });
    }
    async getAllEvent() {
        return await events_model_1.EventsModel.find();
    }
    async createEvents({ title, description, backgroundColor, startDate, endDate, startTime, endTime, recurring, }) {
        const events = (await events_model_1.EventsModel.create({
            title,
            description,
            backgroundColor,
            startDate,
            endDate,
            startTime,
            endTime,
            recurring,
        })).save();
        return events;
    }
    async updateEvents({ id, title, description, backgroundColor, startDate, endDate, startTime, endTime, recurring, }) {
        const events = await events_model_1.EventsModel.findByIdAndUpdate({ _id: id }, {
            title,
            description,
            backgroundColor,
            startDate,
            endDate,
            startTime,
            endTime,
            recurring,
        }, { new: true });
        return events;
    }
    async deleteEvent(id) {
        const result = await events_model_1.EventsModel.deleteOne({ _id: id });
        if (result)
            return id;
        else
            return "";
    }
};
__decorate([
    (0, type_graphql_1.Query)((_returns) => events_model_1.Events, { nullable: false, name: "events" }),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EventResolver.prototype, "getEventsById", null);
__decorate([
    (0, type_graphql_1.Query)(() => [events_model_1.Events], {
        name: "eventList",
        description: "Get List of Events",
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EventResolver.prototype, "getAllEvent", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => events_model_1.Events, { name: "createEvents" }),
    __param(0, (0, type_graphql_1.Arg)("newEventInput")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [events_input_1.EventsInput]),
    __metadata("design:returntype", Promise)
], EventResolver.prototype, "createEvents", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => events_model_1.Events, { name: "updateEvents" }),
    __param(0, (0, type_graphql_1.Arg)("editEventInput")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [events_input_1.EventsInput]),
    __metadata("design:returntype", Promise)
], EventResolver.prototype, "updateEvents", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => String, { name: "deleteEvent" }),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EventResolver.prototype, "deleteEvent", null);
EventResolver = __decorate([
    (0, type_graphql_1.Resolver)((_) => events_model_1.Events)
], EventResolver);
exports.EventResolver = EventResolver;
//# sourceMappingURL=event.resolvers.js.map