import render from '__mocks__/test-utils';
import { createCourse, getCourses } from '../coursesCreators';
import {
	fetchCourses,
	initialStateCourses,
	mockedState,
	newStateCourses,
} from '__mocks__/mockData';
import { database } from 'types/server';
import { baseURL } from 'services';
import axios from 'axios';
import { actions } from '../coursesTypes';

jest.mock('axios');

describe('CoursesReduser:', () => {
	afterAll(() => jest.unmock('axios'));

	const { storeMock } = render(<></>, {
		...mockedState,
		courses: initialStateCourses,
	});

	it('Reducer should return the initial state.', () => {
		expect(storeMock.getState().courses).toStrictEqual(initialStateCourses);
	});

	it('and reducer should handle CREATE_OR_UPDATE_COURSE and returns new state.', () => {
		const result = storeMock.dispatch(createCourse(newStateCourses[0]));

		expect(storeMock.getState().courses).toStrictEqual({
			courses: newStateCourses,
		});
		expect(result.type).toBe(actions.SAVE_COURSE);
	});

	it('Reducer should handle GET_COURSES and returns new state.', async () => {
		(axios.get as jest.Mock).mockResolvedValue({
			data: { result: fetchCourses },
		});

		const response = await axios
			.get(`${baseURL + database.GET_COURSES}`)
			.then((res) => storeMock.dispatch(getCourses(res.data.result)));

		expect(axios.get).toHaveBeenCalledWith(`${baseURL + database.GET_COURSES}`);
		expect(response.type).toEqual(actions.GET_COURSES);
		expect(storeMock.getState().courses.courses).toEqual(fetchCourses);
	});
});
