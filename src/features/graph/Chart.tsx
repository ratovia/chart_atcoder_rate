import React, {useReducer} from "react";
import { Line } from "react-chartjs-2";

type dataAction = {
  type: 'increment' | 'decrement'
}

type Data = {
  labels: Number[],
  data: Number[],
  data2: Number[],
};

const initialState: Data = {
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  data: [3, 26, 41,41, 89, 115, 145, 143, 180, 189, 221, 216, 255, 269, 271, 288, 285, 292, 293, 342],
  data2: [13, 126, 141,141, 189, 15, 45, 43, 80, 89, 121, 116, 155, 169, 171, 188, 185, 192, 193, 142],
};

const reducer = (state: Data, action: dataAction) => {
  switch (action.type) {
    case 'increment':
      return state;
    default:
      throw new Error();
  }
}

const Chart = () => {
  // eslint-disable-next-line
  const [rateData, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <Line
        data={{
          type: 'line',
          labels: rateData.labels,
          datasets: [
            {
              lineTension: 0,
              data: rateData.data,
              label: "ratovia",
              borderColor: "#3333ff",
              fill: true,
            },
            {
              lineTension: 0,
              data: rateData.data2,
              label: "kazyam",
              borderColor: "#33ff33",
              fill: true,
            },
          ],
        }}
      />
    </div>
  );
};

export default Chart;
