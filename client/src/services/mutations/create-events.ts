import { gql, useMutation } from "@apollo/client";
import { GET_EVENTS_LIST } from "../queries/get-events-list";
import { getEventsList } from "../queries/__generated__/getEventsList";
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
    }
  }
`;

export const useCreateEvents = () => {
  const [createEventsMutate, { data, loading, error }] = useMutation<
    CreateEvents_createEvents,
    CreateEventsVariables
  >(CREATE_EVENTS_MUTATION, {
    update(cache, { data }) {
      const existingEvents: getEventsList = cache.readQuery({
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
