import React from "react";
import { Bar } from "react-chartjs-2";
export default class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ["FPT", "PTIT", "VNPT", "CMC", "VIETEL", "VTV"],
        datasets: [
          {
            label: "Cổ phiếu",
            data: [12, 23, 42, 12, 34, 23],
          },
        ],
      },
    };
  }

  render() {
    return (
      <div>
        <Bar
          data={this.state.chartData}
          options={{
            maintainAspectRatio: false,
          }}
        />
      </div>
    );
  }
}
