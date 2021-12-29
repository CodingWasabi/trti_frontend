export interface IParams {
  id: number;
}

export interface ITravelHistoryImage {
  imageUrl?: string | null;
  alt?: string;
  isAgreed: boolean;
}

export interface ITravelHistorySummary {
  title: string;
  period: Array<string>;
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
  title: string;
  period: Array<string>;
  image: string;
  location: string;
  members: Array<string>;
}
