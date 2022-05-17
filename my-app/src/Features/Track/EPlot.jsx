import React from 'react';
import Plot from 'react-plotly.js';

export default class EPlot extends React.Component {
  render() {
    return (
      <Plot
        data={[
          {
            x: this.props.x,
            y: this.props.y,
            type: 'bar',
            mode: 'lines+markers',
            marker: {color: '#fa8072'},
          },
        ]}
        layout={ {width: 500, height: 240, title: 'A Expense Plot'} }
      />
    );
  }
}