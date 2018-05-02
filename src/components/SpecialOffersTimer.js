import React from "react";
import PropTypes from "prop-types";

import getTime from "scripts/timer";

import Grid from "material-ui/Grid";

import lang from "constants/lang";

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
          {lang.TITLE_SPECIAL_OFFERS_TIMER}
        </Grid>
        <Grid item xs={12}>
          <div>
            {lang.DAYS_SPECIAL_OFFERS_TIMER + ":"} {this.state.days}
          </div>
          <div>
            {lang.HOURS_SPECIAL_OFFERS_TIMER + ":"} {this.state.hours}
          </div>
          <div>
            {lang.MINUTES_SPECIAL_OFFERS_TIMER + ":"} {this.state.minutes}
          </div>
          <div>
            {lang.SECONDS_SPECIAL_OFFERS_TIMER + ":"} {this.state.seconds}
          </div>
        </Grid>
      </Grid>
    );
  }
}

SpecialOffersTimer.propTypes = {
  timeOut: PropTypes.string.isRequired
};

export default SpecialOffersTimer;
