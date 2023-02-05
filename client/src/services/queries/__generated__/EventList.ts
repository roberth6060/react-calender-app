/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: EventList
// ====================================================

export interface EventList_eventList {
  __typename: "Events";
  id: string;
  title: string;
  description: string;
  backgroundColor: string | null;
  createdAt: any;
  updatedAt: any;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  recurring: boolean;
}

export interface EventList {
  /**
   * Get List of Events
   */
  eventList: EventList_eventList[];
}
