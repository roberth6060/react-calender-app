import { Resolver, Mutation, Arg, Query, ID } from "type-graphql";
import { EventsModel, Events } from "../models/events.model";
import { EventsInput } from "./types/events-input";

@Resolver((_) => Events)
export class NotesResolver {
  @Query((_returns) => Events, { nullable: false, name: "events" })
  async getEventsById(@Arg("id") id: string) {
    return await EventsModel.findById({ _id: id });
  }

  @Query(() => [Events], {
    name: "eventList",
    description: "Get List of Events",
  })
  async getAllEvent() {
    return await EventsModel.find();
  }

  @Mutation(() => Events, { name: "createEvents" })
  async createEvents(
    @Arg("newEventInput") { title, description, backgroundColor }: EventsInput
  ): Promise<Events> {
    const events = (
      await EventsModel.create({
        title,
        description,
        backgroundColor,
      })
    ).save();

    return events;
  }

  @Mutation(() => Events, { name: "updateEvents" })
  async updateEvents(
    @Arg("editEventInput")
    { id, title, description, backgroundColor }: EventsInput
  ): Promise<Events> {
    const events = await EventsModel.findByIdAndUpdate(
      { _id: id },
      {
        title,
        description,
        backgroundColor,
      },
      { new: true }
    );

    return events;
  }

  @Mutation(() => String, { name: "deleteEvent" })
  async deleteEvent(@Arg("id") id: string): Promise<String> {
    const result = await EventsModel.deleteOne({ _id: id });

    if (result) return id;
    else return "";
  }
}
