import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { findByData } from '../../../Utils/index.js';
import Cover from './Cover.js';

configure({adapter: new Adapter})

describe('Cover Component', ()=>{
  let component;
  beforeEach=(()=>{
    component = setUp();
  })

  it('Should mount Cover component', ()=> {
    const component = shallow(<Cover />)
    const wrapper = findByData(component, 'cover')
    expect(wrapper.length).toBe(1);
  })
})