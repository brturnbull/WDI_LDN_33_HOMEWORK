/* global describe, it */

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import BandForm from '../../../src/components/bands/Form';

describe('BandForm', () => {
  it('Should render 3 input fields', done => {
    const state = {
      errors: {}
    };

    const component = shallow(<BandForm data={state} errors={state.errors} />);
    expect(component.find('input').length).to.eq(3);
    done();
  });

  it('should populate the form', done => {
    const state = {
      name: 'name',
      genre: 'genre',
      image: 'image',
      errors: {}
    };

    const component = shallow(<BandForm data={state} errors={state.errors} />);
    expect(component.find({ value: 'name'}).length).to.eq(1);
    expect(component.find({ value: 'genre'}).length).to.eq(1);
    expect(component.find({ value: 'image'}).length).to.eq(1);
    done();
  });

  it('should display errors', done => {
    const state ={
      errors: {
        name: 'this field is required',
        genre: 'this field is required',
        image: 'this field is required'
      }
    };
    const component = shallow(<BandForm data={state} errors={state.errors} />);
    expect(component.find('small').length).to.eq(2);
    done();
  });
});
