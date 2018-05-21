import React from 'react';
import axios from 'axios';
import _ from 'lodash';

import { Link } from 'react-router-dom';

class BandsIndex extends React.Component {

  state = {
    bands: [],
    sortOptions: { field: 'name', direction: 'asc'},
    filter: ''
  }

  sortOptions = [
    { value: 'name|asc', label: 'Name (A to Z)'},
    { value: 'name|desc', label: 'Name (Z to A)'}
  ]

  handleSortChange = ({ target: { value } }) => {
    const [ field, direction ] = value.split('|');
    this.setState({ sortOptions: { field, direction }});
  }

  sortedBands = (band) => {
    const opt = this.state.sortOptions;
    return _.orderBy(band, opt.field, opt.direction);
  }

handleFilterChange = ({ target: { value }}) => {
  this.setState({ filter: value });
}

filteredBands = (band) => {
  return band.filter(band => {
    return RegExp(this.state.filter, 'i').test(band.name);
  });
}

filteredAndSortedBands = (band) => {
  return this.sortedBands(this.filteredBands(band));
}

componentDidMount() {
  axios.get('/api/bands')
    .then(res => this.setState({ bands: res.data }));
}

render() {
  return (

    <div>
      <select onChange={this.handleSortChange}>
        {this.sortOptions.map((option, i) =>
          <option key={i} value={option.value}>{option.label}</option>
        )}
      </select>
      <label>What are you after?
      <input placeholder="filter" onChange={this.handleFilterChange}></input>
      </label>
      <div className='columns is-multiline'>
        {this.filteredAndSortedBands(this.state.bands).map(band =>
          <div className="column is-one-third-desktop is-half-tablet" key={band._id}>
            <Link to={`/bands/${band._id}`}>
              <div className="card showcard">
                <div
                  className="card-image"
                  style={{ backgroundImage: `url(${band.image})`}}
                ></div>
                <div className="card-content">
                  <div className="media">
                    <div className="mediaContent">
                      <h2 className="title is-4">{band.name}</h2>
                      <h4 className="subtitle is-10">{band.genre}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
}

export default BandsIndex;
