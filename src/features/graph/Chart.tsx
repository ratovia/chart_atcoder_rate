import React from "react";
import { Line } from "react-chartjs-2";
import AtcoderUserDataType from "../atcoderData/atcoderUserDataType";

const Chart = (props: any) => {
  const dataSets = props.atcoderData.usersData.map(
    (row: AtcoderUserDataType) => {
      return {
        lineTension: 0,
        data: row.rateData.filter(h => parseInt(h.NewRating) > 0).map(h => {
          return {
            x: h.Date,
            y: parseInt(h.NewRating),
          };
        }),
        label: row.userName,
        borderColor: "#3333ff",
        fill: true,
        spanGaps: true,
      };
    }
  );

  const dataLabel = ()  => { 
    return props.atcoderData.usersData.flatMap(
      (row: AtcoderUserDataType) => {
        return row.rateData.map(h => h.Date)
      }
    );
  }

  return (
    <div>
      <Line
        data={{
          type: "line",
          labels: dataLabel(),
          datasets: dataSets,
        }}
      />
    </div>
  );
};

export default Chart;
