import { gql, useMutation } from "@apollo/client";
import {
  UpdateEvents_updateEvents,
  UpdateEventsVariables,
} from "./__generated__/UpdateEvents";

const EDIT_EVENT_MUTATION = gql`
  mutation UpdateEvents($editEventInput: EventsInput!) {
    updateEvents(editEventInput: $editEventInput) {
      id
      title
      description
      startDate
      endDate
      startTime
      endTime
      recurring
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
