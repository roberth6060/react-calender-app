import { Field, InputType, ID } from "type-graphql";
import { Events } from "../../models/events.model";

@InputType()
export class EventsInput implements Partial<Events> {
  @Field(() => ID, { nullable: true })
  id: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field({ nullable: true })
  backgroundColor: string;

  @Field()
  startDate: string;

  @Field()
  endDate: string;

  @Field()
  startTime: string;

  @Field()
  endTime: string;

  @Field({ nullable: true })
  recurring: boolean;
}
