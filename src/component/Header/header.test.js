import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header.js';

configure({adapter: new Adapter});

const setUp =(props={})=>{
  const component = shallow(<Header {...props} />);
  return component;
}

const findByData =(component, attr)=>{
  let wrapper =  component.find(`[data-test='${attr}']`);
  return wrapper;
}

describe('Header Component', ()=> {

  let component;
  beforeEach=(()=>{
    component = setUp();
  })

  it('Should mount the header', ()=>{
    const headerCopy = shallow(<Header />)
    const wrapper = findByData(headerCopy, 'header-wrapper')
    expect(wrapper.length).toBe(1);
  })

  it('Should mount paragraph text', ()=> {
    const headerCopy = shallow(<Header />)
    const wrapper = findByData(headerCopy, 'navbar-brand-text')
    expect(wrapper.length).toBe(1);
  })
})