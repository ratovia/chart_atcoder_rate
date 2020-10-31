import { useReducer } from "react";
import AtcoderUserDataType from "./atcoderUserDataType";
import rateJson from "../atcoderData/rate.json";

export type Data = {
  mainUser: string;
  usersData: AtcoderUserDataType[];
};
type action = {
  type: "set";
  payload: typeof rateJson;
  userName: string
};

export const useAtcoderDataReducer = (): any => {
  const mainUser: string = "ratovia";
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

  const calcHighest = (rateData: typeof rateJson) => {
    let max = 0;
    console.log(rateData);
    rateData.forEach((h) => {
      if (parseInt(h.NewRating)  > max) {
        max = parseInt(h.NewRating);
      }
    })
    return max;
  };

  const currentRate = (rateData: typeof rateJson) => {
    return parseInt(rateData[rateData.length - 1].NewRating);
  };

  const reducer = (data: Data, action: action) => {
    console.log(data)
    switch (action.type) {
      case "set":
        const rateData: typeof rateJson = action.payload;
        const atcoder: Data = {
          mainUser: mainUser,
          usersData: [
            {
              userName: action.userName,
              rateData: rateData,
              entryTimes: rateData.length,
              highest: calcHighest(rateData),
              rating: currentRate(rateData),
            },
          ],
        };
        return atcoder;
    }
  };
  const [data, dispatch] = useReducer(reducer, initialData);
  return [data, dispatch];
};
