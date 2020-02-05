import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';


describe('Component TripSummary', () => {
  it ('should render correct link', () => {
    const expectedLink = 'abc';
    const component = shallow(<TripSummary id={expectedLink} name='name' cost = 'cost' w/>);

    expect(component.find('.link').prop('to')).toEqual(`/trip/${expectedLink}`);
  });

  it('have to check if <img> has got valid src and alt', () => {
    const expectedSrc = 'image';
    const expectedAlt = 'imageName';

    const component = shallow(
      <TripSummary image={expectedSrc} name={expectedAlt} id='id' cost = 'cost' />);

    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });

  it('should render correct name, days and cost', () => {
    const expectedName = 'Bob';
    const expectedCost = '$1000';
    const expectedDays = 14;

    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDays} id ='id' />);

    expect(component.find('.title').text()).toEqual(expectedName);

    expect(component.find('.details span').at(1).text()).toEqual(`from ${expectedCost}`);

    expect(component.find('.details span').at(0).text()).toEqual(`${expectedDays} days`);

  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should render tags array corectlly', () => {
    const expectedTags = ['one', 'two', 'three'];
    const component = shallow(<TripSummary tags={expectedTags} name= 'name' cost = 'cost' id ='id'/>);

    expect(component.find('.tags span').at(0).text()).toEqual(expectedTags[0]);
    expect(component.find('.tags span').at(1).text()).toEqual(expectedTags[1]);
    expect(component.find('.tags span').at(2).text()).toEqual(expectedTags[2]);

  });

  it('should render tags div if tags is truthy ', () => {
    const expectedTags = [];
    const component = shallow(<TripSummary tags={expectedTags} cost = 'cost' name='name' id='id'/>);

    expect(component.find('.tags')).toBeTruthy();
  });

});
