import React from "react";

import getTime from "scripts/timer";

import Grid from "material-ui/Grid";
class SpecialOffersTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: {}
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    const { timeOut } = this.props;
    this.setState(getTime(timeOut));
  }

  render() {
    return (
      <Grid>
        <Grid item xs={12}>
          SpecialOffers
        </Grid>
        <Grid item xs={12}>
          <div>Days: {this.state.days}</div>
          <div>Hours: {this.state.hours}</div>
          <div>Minutes: {this.state.minutes}</div>
          <div>Seconds: {this.state.seconds}</div>
        </Grid>
      </Grid>
    );
  }
}

export default SpecialOffersTimer;
