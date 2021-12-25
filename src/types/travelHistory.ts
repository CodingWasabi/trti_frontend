export interface ITravelHistoryImage {
  src?: string | null;
  alt?: string;
}

export interface ITravelHistorySummary {
  title: string;
  startDate: string;
  endDate: string;
  location: string;
  participantsCount: number;
}

export interface ITravelHistory extends ITravelHistoryImage, ITravelHistorySummary {
  id?: number;
}

export interface ITravelHistoryList {
  travelHistoryList: Array<ITravelHistory>;
}
