import React from 'react';
import toJson from 'enzyme-to-json';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import { shallow,render,mount } from 'enzyme';

import Header from '../../Components/Header/Header'
import {Switch,Route,BrowserRouter} from 'react-router-dom'

describe('<Header />', () => {

  it('snapshot testing for Header component', () => {
    const wrapper = shallow(<Header />);
    expect(toJson(wrapper)).toMatchSnapshot()
  });

  it('state value for header component',()=>{
    const wrap=mount(<Header show={true}/>);
    const val=wrap.state()
    expect(val.searchTerm).toEqual("")
})

  it('checking incoming props',()=>{
    const wrap=mount(<Header show={true}/>);
    const val=wrap.props()
    console.log('props value ',val)
    expect(val).toBeTruthy()
})

})