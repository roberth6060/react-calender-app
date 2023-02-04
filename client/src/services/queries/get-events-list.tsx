import { gql } from '@apollo/client';

export const GET_EVENTS_LIST = gql`
  query getEventsList {
  eventList {
    id
    title
    description
    createdAt
    updatedAt
  }
}
`;