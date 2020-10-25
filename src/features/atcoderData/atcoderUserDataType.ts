import rateJson from "./rate.json";

export default interface AtcoderUserDataType {
  userName: string;
  rateData: typeof rateJson;
  highest: Number;
  entryTimes: Number;
  rating: Number;
};