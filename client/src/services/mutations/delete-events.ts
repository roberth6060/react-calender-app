import { gql, useMutation } from "@apollo/client";
import { GET_EVENTS_LIST } from "../queries/get-events-list";
import { EventList } from "../queries/__generated__/EventList";
import { DeleteEvent, DeleteEventVariables } from "./__generated__/DeleteEvent";

const DELETE_EVENT_MUTATION = gql`
  mutation DeleteEvent($deleteEventId: String!) {
    deleteEvent(id: $deleteEventId)
  }
`;

export const useDeleteEvents = () => {
  const [deleteEventsMutate, { data, loading, error }] = useMutation<
    DeleteEvent,
    DeleteEventVariables
  >(DELETE_EVENT_MUTATION, {
    update: (cache, { data }) => {
      if (data?.deleteEvent !== "") {
        const existingEvents: EventList = cache.readQuery({
          query: GET_EVENTS_LIST,
        }) ?? { eventList: [] };
        const updatedEventsList = existingEvents.eventList.filter(
          (x) => x.id !== data?.deleteEvent
        );
        cache.writeQuery({
          query: GET_EVENTS_LIST,
          data: {
            eventsList: updatedEventsList,
          },
        });
      }
    },
  });

  return { deleteEventsMutate, loading, data, error };
};
