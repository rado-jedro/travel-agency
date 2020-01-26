import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';


describe('Component TripSummary', () => {
  it ('should render correct link', () => {
    const expectedLink = 'abc';
    const component = shallow(<TripSummary id={expectedLink} />);

    expect(component.find('.link').prop('to')).toEqual(`/trip/${expectedLink}`);
  });

  it('have to check if <img> has got valid src and alt', () => {
    const expectedSrc = 'imageSrc';
    const expectedAlt = 'imageName';
    const component = shallow(
      <TripSummary src={expectedSrc} alt={expectedAlt} />);

    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });

  it('should render correct name, days and cost', () => {
    const expectedName = 'Bob';
    const expectedCost = '$1000';
    const expectedDays = 14;


    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDays} />);

    expect(component.find('.title').text()).toEqual(expectedName);

    expect(component.find('.details span').at(1).text()).toEqual(`from ${expectedCost}`);

    expect(component.find('.details span').at(0).text()).toEqual(`${expectedDays} days`);

  });

  it('should generate an error if required props are missing', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });
});
