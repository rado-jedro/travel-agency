import React from 'react';
import { shallow } from 'enzyme';
import DaysToSummer from './DaysToSummer';

const summerDescription = '.description';

describe('Component DaysToSummer', () => {
  it('should render without crashing', () => {
    const component = shallow(<DaysToSummer />);
    expect(component).toBeTruthy();
  });

  it('should render description', () => {
    const component = shallow(<DaysToSummer />);
    expect(component.exists(summerDescription)).toEqual(true);
  });
});

const trueDate = Date;
const mockDate = customDate =>
  class extends Date {
    constructor(...args) {
      if (args.length) {
        super(...args);
      } else {
        super(customDate);
      }
      return this;
    }
    static now() {
      return new Date(customDate).getTime();
    }
  };

const checkDescriptionAtDate = (date, expectedDescription) => {
  it(`should show correct at ${date}`, () => {
    global.Date = mockDate(`${date}T00:00:00.000Z`);

    const component = shallow(<DaysToSummer />);
    const renderedDate = component.find('.description').text();
    expect(renderedDate).toEqual(expectedDescription);

    global.Date = trueDate;
  });
};

describe('Component HappyHourAd with mocked Date', () => {
  checkDescriptionAtDate('2020-03-01', '112 days until Summer!');

  checkDescriptionAtDate('2020-06-20', '1 day until Summer!');

  checkDescriptionAtDate('2020-06-21', '');
  checkDescriptionAtDate('2020-08-20', '');

  checkDescriptionAtDate('2020-09-24', '270 days until Summer!');
});
