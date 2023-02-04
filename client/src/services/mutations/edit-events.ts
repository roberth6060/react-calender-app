import { gql, useMutation } from "@apollo/client";
import { GET_EVENTS_LIST } from "../queries/get-events-list";
import { getEventsList } from "../queries/__generated__/getEventsList";
import {
  UpdateEvents_updateEvents,
  UpdateEventsVariables,
} from "./__generated__/UpdateEvents";

const EDIT_EVENT_MUTATION = gql`
  mutation UpdateEvents($editEventInput: EventsInput!) {
    updateEvents(editEventInput: $editEventInput) {
      id
      title
      backgroundColor
      description
      createdAt
      updatedAt
    }
  }
`;

export const useUpdateEvent = () => {
  const [editEventMutate, { data, loading, error }] = useMutation<
    UpdateEvents_updateEvents,
    UpdateEventsVariables
  >(EDIT_EVENT_MUTATION);

  return { editEventMutate, loading, data, error };
};
