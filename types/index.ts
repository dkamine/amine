export enum ERROR_TYPE {
  EMPTY_DATA,
  SERVER_ISSUE,
}

export type position = {
  satid: string;
  satname: string;
  satlat: number;
  satlng: number;
  satalt: number;
};
