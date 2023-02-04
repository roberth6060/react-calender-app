import {
  prop as Property,
  getModelForClass,
  modelOptions,
} from "@typegoose/typegoose";
import { Field, ObjectType, ID } from "type-graphql";

@ObjectType({ description: "The Events Model" })
@modelOptions({ schemaOptions: { collection: "events", timestamps: true } })
export class Event {
  @Field(() => ID)
  id: string;

  @Field()
  @Property({ type: () => String, required: true })
  title: string;

  @Field()
  @Property({ type: () => String, required: true })
  description: string;

  @Field({ nullable: true })
  @Property({ type: String, required: false })
  backgroundColor: string;

  @Field()
  @Property({ required: true, default: Date.now })
  createdAt: Date;

  @Field()
  @Property({ required: true, default: Date.now })
  updatedAt: Date;
}

export const EventsModel = getModelForClass(Event);
