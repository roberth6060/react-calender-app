import { gql } from '@apollo/client';

export const GET_EVENTS_LIST = gql`
query EventList {
  eventList {
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