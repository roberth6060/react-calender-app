import { gql, useMutation } from "@apollo/client";
import { GET_EVENTS_LIST } from "../queries/get-events-list";
import { EventList } from "../queries/__generated__/EventList";
import {
  CreateEvents_createEvents,
  CreateEventsVariables,
} from "./__generated__/CreateEvents";

const CREATE_EVENTS_MUTATION = gql`
  mutation CreateEvents($newEventInput: EventsInput!) {
    createEvents(newEventInput: $newEventInput) {
      id
      title
      description
      backgroundColor
      createdAt
      updatedAt
      startDate
      endDate
      startTime
      endTime
      recurring
    }
  }
`;

export const useCreateEvents = () => {
  const [createEventsMutate, { data, loading, error }] = useMutation<
    CreateEvents_createEvents,
    CreateEventsVariables
  >(CREATE_EVENTS_MUTATION, {
    update(cache, { data }) {
      const existingEvents: EventList = cache.readQuery({
        query: GET_EVENTS_LIST,
      }) ?? { eventList: [] };

      if (data) {
        const newEventsList = [
          ...existingEvents.eventList,
          {
            id: data?.id,
            title: data?.title,
            description: data?.description,
            backgroundColor: data?.backgroundColor,
            startDate: data?.startDate,
            endDate: data?.endDate,
            startTime: data?.startTime,
            endTime: data?.endTime,
            recurring: data?.recurring,
          },
        ];

        cache.writeQuery({
          query: GET_EVENTS_LIST,
          data: {
            eventsList: newEventsList,
          },
        });
      }
    },
  });

  return { createEventsMutate, loading, data, error };
};
