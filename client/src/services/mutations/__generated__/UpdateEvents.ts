/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { EventsInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateEvents
// ====================================================

export interface UpdateEvents_updateEvents {
  __typename: "Events";
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  recurring: boolean;
}

export interface UpdateEvents {
  updateEvents: UpdateEvents_updateEvents;
}

export interface UpdateEventsVariables {
  editEventInput: EventsInput;
}
