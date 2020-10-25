import { useReducer } from "react";
import { fetchData } from "./fetchData";
import rateJson from "./rate.json";
import AtcoderUserDataType from "./atcoderUserDataType";
export type Data = {
  mainUser: string;
  usersData: AtcoderUserDataType[];
};
type action = {
  type: "fetch";
  payload: Data;
};

export const useAtcoderDataReducer = (): any => {
  const mainUser: string = "ratovia";
  // const rateData: typeof rateJson = fetchData({userName: mainUser});
  const initialData: Data = {
    mainUser: mainUser,
    usersData: [
      {
        userName: "loading...",
        rateData: [],
        entryTimes: 0,
        highest: 0,
        rating: 0,
      },
    ],
  };

  const reducer = (data: Data, action: action) => {
    switch (action.type) {
      case "fetch":
        const atcoder: Data = {...action.payload}
        return atcoder;
    }
  };
  const [data, dispatch] = useReducer(reducer, initialData);
  return [data, dispatch];
};
