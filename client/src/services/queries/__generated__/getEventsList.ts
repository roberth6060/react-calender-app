/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getEventsList
// ====================================================

export interface getEventsList_eventList {
  __typename: "Events";
  id: string;
  title: string;
  description: string;
  createdAt: any;
  updatedAt: any;
}

export interface getEventsList {
  /**
   * Get List of Events
   */
  eventList: getEventsList_eventList[];
}
