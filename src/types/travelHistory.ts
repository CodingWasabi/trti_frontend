export interface IParams {
  id: number;
}

export interface ITravelHistoryImage {
  src?: string | null;
  alt?: string;
}

export interface ITravelHistorySummary {
  name: string;
  startDate: string;
  endDate: string;
  location: string;
  participantsCount: number;
  type?: string;
}

export interface ITravelHistory extends ITravelHistoryImage, ITravelHistorySummary {
  id?: number;
}

export interface ITravelHistoryList {
  travelHistoryList: Array<ITravelHistory>;
}

export interface ITravelGroupProps {
  name: string;
  period: Array<string>;
  image: string;
  location: string;
  members: Array<string>;
}
