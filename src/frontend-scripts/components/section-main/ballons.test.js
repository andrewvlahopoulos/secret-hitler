import React from 'react'; // eslint-disable-line
import { shallow } from 'enzyme';
import Creategame from './Creategame';

describe('Balloons', () => {
	it('should initialize correctly', () => {
		const component = shallow(<Creategame />);

		expect(component).toHaveLength(1);
	});
});