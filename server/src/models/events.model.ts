import {
  prop as Property,
  getModelForClass,
  modelOptions,
} from "@typegoose/typegoose";
import { Field, ObjectType, ID } from "type-graphql";

@ObjectType({ description: "The Events Model" })
@modelOptions({ schemaOptions: { collection: "events", timestamps: true } })
export class Events {
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

  @Field()
  @Property({ type: () => String, required: true })
  startDate: string;

  @Field()
  @Property({ type: () => String, required: true })
  endDate: string;

  @Field()
  @Property({ type: () => String, required: true })
  startTime: string;

  @Field()
  @Property({ type: () => String, required: true })
  endTime: string;

  @Field()
  @Property({ type: () => Boolean, required: true })
  recurring: boolean;
}

export const EventsModel = getModelForClass(Events);
