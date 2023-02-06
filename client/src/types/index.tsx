export interface EventRouteParams {
  date: string;
}

export enum TYPE_OF_MONTH {
  PREVIOUSMONTH= "previous",
  CURRENTMONTH= "current",
  NEXTMONTH= "next",
}

export interface IDays {
    days: Array<string> | undefined,
    type: string,
    curDate?: string,
}
