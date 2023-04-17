import { fireEvent, screen } from '@testing-library/react';
import { mockedState } from '__mocks__/mockData';
import render, { mockedUsedNavigate } from '__mocks__/test-utils';
import Courses from '../Courses';

describe('Courses:', () => {
	it('Courses should display amount of CourseCard equal length of courses array', () => {
		render(<Courses />);
		expect(screen.getAllByTestId('card')).toHaveLength(2);
	});

	it('Courses should display Empty container if courses array length is 0', () => {
		render(<Courses />, {
			...mockedState,
			courses: { courses: [] },
		});
		expect(screen.getByTestId('container')).toBeEmptyDOMElement();
	});

	it('CourseForm should be showed after a click on a button "Add new course"', () => {
		render(<Courses />, {
			...mockedState,
			user: {
				...mockedState.user,
				role: 'admin',
			},
		});

		const button = screen.getByTestId('add-course');
		fireEvent.click(button);
		expect(mockedUsedNavigate).toBeCalledTimes(1);
		expect(mockedUsedNavigate).toBeCalledWith('/courses/add');
	});
});
