import { screen } from '@testing-library/react';
import moment from 'moment';

import { minutesToHoures } from 'helpers';
import { CourseID } from 'store/courses/coursesTypes';
import render from '__mocks__/test-utils';
import CourseCard from './../CourseCard';

describe('CourseCard:', () => {
	let course: CourseID;

	beforeEach(() => {
		const { storeMock } = render();
		course = storeMock.getState().courses.courses[0];

		render(
			<CourseCard
				{...course}
				authors={['27cc3006-e93a-4748-8ca8-73d06aa93b6d']}
				authorsList={[
					{
						id: '27cc3006-e93a-4748-8ca8-73d06aa93b6d',
						name: 'Vasiliy Dobkin',
					},
				]}
			/>
		);
	});

	it('CourseCard should display title', () => {
		expect(screen.getByText(course.title)).toBeInTheDocument();
	});

	it('CourseCard should display description', () => {
		const description = document.querySelector('p')?.innerHTML;
		expect(description).toBe(course.description);
	});

	it('CourseCard should display duration in the correct format', () => {
		expect(screen.getByText(minutesToHoures(course.duration)).innerHTML).toBe(
			'02:00 hours'
		);
	});

	it('CourseCard should display authors list by id', () => {
		expect(screen.getByText('Vasiliy Dobkin')).toBeInTheDocument();
	});

	it('CourseCard should display created date in the correct format (DD/MM/YYYY)', () => {
		expect(screen.getByText(course.creationDate)).toBeInTheDocument();
		expect(
			moment(course.creationDate, 'DD/MM/YYYY', true).isValid()
		).toBeTruthy();
	});
});
