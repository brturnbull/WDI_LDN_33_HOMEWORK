/* global describe, it, before, after, beforeEach */

import React from 'react';
import { expect } from 'chai';
import Promise from 'bluebird';
import axios from 'axios';
import _ from 'lodash';
import sinon from 'sinon';
// shallow is for functional and mount for classical wrappers
import { mount } from 'enzyme';
import { MemoryRouter as Router } from 'react-router-dom';
import BandsIndex from '../../../src/components/bands/Index';

const bandData = [{
  _id: 1,
  name: 'The Wombats',
  members: ['Matthew Murphy', 'Dan Haggis', 'Tord Overland Knudsen'],
  origin: {
    name: 'Liverpool',
    lat: null,
    lng: null
  },
  genre: 'Indie rock',
  image: 'https://pbs.twimg.com/profile_images/939100274349789184/zJl0juRy_400x400.jpg',
  yearFormed: 2003,
  yearBrokenUp: null
},{
  _id: 2,
  name: 'The Streets',
  members: ['Mike Skinner'],
  origin: {
    name: 'Birmingham',
    lat: null,
    lng: null
  },
  genre: 'UK Garage',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqiTmLMmoofBvIKCbcjWYlVAvzYYFRpo_9gHHQ-UZOJHak4rlc',
  yearFormed: 1994,
  yearBrokenUp: null
}];

describe('BandsIndex', () => {
  let wrapper;
  let promise;

  before(done => {
    // giving a pretend response to "axios" to avoid actually making a http request
    promise = Promise.resolve({ data: bandData });
    sinon.stub(axios, 'get').returns(promise);
    done();
  });

  after(done => {
    axios.get.restore();
    done();
  });

  beforeEach(done => {
    wrapper = mount(
      <Router>
        <BandsIndex />
      </Router>
    );
    done();
  });

  it('should display 2 cards', done => {
    promise.then(() => {
      wrapper.update();
      expect(wrapper.find('div.card').length).to.eq(bandData.length);
      done();
    });
  });

  it('should display the correct image,genre and name for each band', done => {
    promise.then(() => {
      wrapper.update();
      _.orderBy(bandData, 'name', 'asc').forEach((band, index) => {
        expect(wrapper.find('.title').at(index).text()).to.eq(band.name);
      });
      done();
    });
  });

  it('should display the order of the bands when the sort dropdown is changed', done => {
    promise.then(() => {
      wrapper.find('select').simulate('change', { target: { name: 'sort', value: 'name|desc'} });
      wrapper.update();
      _.orderBy(bandData, 'name', 'desc').forEach((band, index) => {
        expect(wrapper.find('.title').at(index).text()).to.eq(band.name);
      });
      done();
    });
  });

  it('should create a link for each band', done => {
    promise.then(() => {
      wrapper.update();
      bandData.forEach(band => {
        expect(wrapper.find({ href: `/bands/${band._id}`}).length).to.eq(1);
      });
      done();
    });
  });

});
