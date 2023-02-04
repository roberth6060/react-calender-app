/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { EventsInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: CreateEvents
// ====================================================

export interface CreateEvents_createEvents {
  __typename: "Events";
  id: string;
  title: string;
  description: string;
  backgroundColor: string | null;
  createdAt: any;
  updatedAt: any;
}

export interface CreateEvents {
  id: any;
  createEvents: CreateEvents_createEvents;
}

export interface CreateEventsVariables {
  newEventInput: EventsInput;
}
