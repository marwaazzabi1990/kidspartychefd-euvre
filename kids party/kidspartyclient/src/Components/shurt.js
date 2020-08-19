import React, { Component } from "react";

import { Bar, Line, Pie } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: [
        "Janvier ",
        "fervrier",
        "mars",
        "april",
        "may",
        "juin",
        "juillet",
        "out",
      ],
      datasets: [
        {
          label: "population",
          data: [617594, 181045, 153060, 106519, 105162, 95072],
          backgroundColor: [
            "rgba(255,99,132,0.6)",
            "rgba(255,192,132,0.6)",
            "rgba(255,206,132,0.6)",
            "rgba(75,192,192,0.6)",
            "rgba(153,102,255,0.6)",
            "rgba(255,159,64,0.6)",
            "rgba(255,99,132,0.6)",
          ],
        },
      ],
    };
  }
  render() {
    return (
      <div className="shart">
        chart Component
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

export default Chart;
