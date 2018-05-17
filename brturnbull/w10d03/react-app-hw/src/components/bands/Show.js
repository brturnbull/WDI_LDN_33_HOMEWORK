import React from 'react';
import axios from 'axios';

// creating a new classical component
class BandsShow extends React.Component {

  state = {
    band: null
  }

  componentDidMount () {
    console.log(this.props);
    axios.get(`/api/bands/${this.props.match.params.id}`)
      .then(res => this.setState({ band: res.data }));
  }

  render() {
    return (
      <div>
        {/* what is this?  */}
        {this.state.band && <div>
          <h2>{this.state.band.name}</h2>
          <img src={this.state.band.image} />
        </div>}
      </div>
    );
  }
}

export default BandsShow;
